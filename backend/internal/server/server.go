package server

import (
	"context"
	"linguarenz/internal/config"
	"linguarenz/internal/server/route"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"
)

func Run(ctx context.Context) {
	router := gin.Default()
	route.InitRoute(router)

	serverConf := config.GetServerConfig()

	srv := &http.Server{
		Addr:              ":" + serverConf.Port,
		Handler:           router,
		ReadHeaderTimeout: 10 * time.Second,
		ReadTimeout:       10 * time.Minute,
		WriteTimeout:      10 * time.Minute,
	}
	log.Printf("Starting server on localhost%s...\n", ":8080")

	// Initializing the server in a goroutine so that
	// it won't block the graceful shutdown handling below
	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			panic(err)
		}
	}()

	log.Println("Shutting down gracefully, press Ctrl+C again to force")

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGTERM, syscall.SIGINT)

	<-quit

	// The context is used to inform the server it has 15 seconds to finish
	// the request it is currently handling
	ctx, cancel := context.WithTimeout(ctx, 15*time.Second)
	defer cancel()

	if err := srv.Shutdown(ctx); err != nil {
		log.Fatalf("Shutdown Error: %v", err)
	}
}
