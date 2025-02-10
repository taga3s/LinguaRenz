package health_controller

import (
	"linguarenz/internal/db"
	"net/http"

	"github.com/gin-gonic/gin"
)

func HealthCheck() func(*gin.Context) {
	return func(c *gin.Context) {
		err := db.CheckConnection()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"message": err.Error(),
			})
			return
		}
		res := HealthResponse{
			Message: "ok",
		}
		c.JSON(http.StatusOK, res)
	}
}
