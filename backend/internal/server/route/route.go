package route

import (
	hc "linguarenz/internal/controller/health_controller"
	uc "linguarenz/internal/controller/user_controller"
	"linguarenz/internal/db"
	ur "linguarenz/internal/infrastracture/repository/user_repository"
	us "linguarenz/internal/service/user"
	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func InitRoute(r *gin.Engine) {
	// Initiate controller and service
	dbConn := db.GetDB()

	// User
	ur := ur.NewUserRepository(dbConn)
	us := us.NewUserService(ur)
	uc := uc.NewUserController(us)

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{os.Getenv("FE_URL")},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		AllowHeaders:     []string{"Origin", "Authorization", "x-stack-access-token"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// r.Use(middleware.Verify())
	r.GET("/health", hc.HealthCheck())
	user := r.Group("user")
	{
		user.GET("/:id", uc.FindById())
		user.POST("/registration", uc.Register())
	}
}
