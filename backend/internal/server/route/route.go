package route

import (
	hc "linguarenz/internal/controller/health_controller"
	uc "linguarenz/internal/controller/user_controller"
	"linguarenz/internal/db"
	ur "linguarenz/internal/infrastracture/repository/user_repository"
	us "linguarenz/internal/service/user"

	"github.com/gin-gonic/gin"
)

func InitRoute(r *gin.Engine) {
	// Initiate controller and service
	dbConn := db.GetDB()

	// User
	ur := ur.NewUserRepository(dbConn)
	us := us.NewUserService(ur)
	uc := uc.NewUserController(us)

	// r.Use(middleware.Verify())
	r.GET("/health", hc.HealthCheck())
	user := r.Group("user")
	{
		user.POST("/registration", uc.Register())
	}
}
