package user_controller

import (
	"encoding/json"
	"io"
	um "linguarenz/internal/model/user_model"
	us "linguarenz/internal/service/user"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	svix "github.com/svix/svix-webhooks/go"
)

type IUserController interface {
	Register() func(*gin.Context)
}

type UserController struct {
	us us.IUserService
}

func NewUserController(us us.IUserService) IUserController {
	return &UserController{us}
}

func (uc *UserController) Register() func(*gin.Context) {
	return func(c *gin.Context) {
		headers := c.Request.Header
		payload, err := io.ReadAll(c.Request.Body)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
			return
		}

		secret := os.Getenv("STACK_AUTH_WEBHOOK_SECRET")
		wh, err := svix.NewWebhook(secret)
		if err != nil {
			log.Fatal(err)
		}

		// Verify the webhook signature
		err = wh.Verify(payload, headers)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
			return
		}

		parsedPayload := WebhookPayload{}
		err = json.Unmarshal([]byte(payload), &parsedPayload)
		if err != nil {
			log.Fatal(err)
		}

		if parsedPayload.Type != "user.created" {
			c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid event type"})
			return
		}

		user := um.User{
			ID:              parsedPayload.Data.ID,
			GoogleAccountID: parsedPayload.Data.OauthProviders[0].AccountID,
		}

		err = uc.us.Register(user)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
			return
		}

		c.JSON(200, gin.H{})
	}
}
