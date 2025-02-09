package route

import (
	hc "linguarenz/internal/controller/health_controller"

	"github.com/gin-gonic/gin"
)

func InitRoute(r *gin.Engine) {
	r.GET("/health", hc.HealthCheck())
}
