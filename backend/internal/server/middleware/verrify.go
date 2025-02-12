package middleware

import (
	"crypto/ecdsa"
	"encoding/json"
	"errors"
	"fmt"
	"linguarenz/internal/config"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-jose/go-jose/v4"
	"github.com/golang-jwt/jwt/v5"
)

func getJwksURL() string {
	stackAuthConf := config.GetStackAuthConfig()
	return fmt.Sprintf("https://api.stack-auth.com/api/v1/projects/%s/.well-known/jwks.json", stackAuthConf.ProjectID)
}

type JWKSet struct {
	Keys []jose.JSONWebKey `json:"keys"`
}

func fetchJWKS() (*JWKSet, error) {
	jwksURL := getJwksURL()
	resp, err := http.Get(jwksURL)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	var jwks JWKSet
	if err := json.NewDecoder(resp.Body).Decode(&jwks); err != nil {
		return nil, err
	}
	return &jwks, nil
}

func getKey(jwks *JWKSet, keyID string) (*ecdsa.PublicKey, error) {
	for _, key := range jwks.Keys {
		if key.KeyID == keyID {
			if ecdsaKey, ok := key.Key.(*ecdsa.PublicKey); ok {
				return ecdsaKey, nil
			}
		}
	}
	return nil, errors.New("public key not found")
}

func verifyToken(tokenString string, jwks *JWKSet) (*jwt.Token, error) {
	parsedToken, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodECDSA); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		keyID, ok := token.Header["kid"].(string)
		if !ok {
			return nil, errors.New("kid not found in token header")
		}
		return getKey(jwks, keyID)
	})
	return parsedToken, err
}

func getAccessToken(c *gin.Context) string {
	return c.GetHeader("x-stack-access-token")
}

func Verify() gin.HandlerFunc {
	return func(c *gin.Context) {
		jwks, err := fetchJWKS()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"message": "Something went wrong"})
			c.Abort()
			return
		}

		accessToken := getAccessToken(c)
		token, err := verifyToken(accessToken, jwks)
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"message": "Invalid user"})
			c.Abort()
			return
		}

		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok || !token.Valid {
			c.JSON(http.StatusUnauthorized, gin.H{"message": "Invalid user"})
			c.Abort()
			return
		}

		c.Set("userID", claims["sub"])

		c.Next()
	}
}
