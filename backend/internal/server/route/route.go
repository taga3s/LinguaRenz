package route

import (
	hh "linguarenz/internal/controller/health_handler"

	"github.com/gin-gonic/gin"
)

func InitRoute(r *gin.Engine) {
	r.GET("/health", hh.HealthCheck())
}
