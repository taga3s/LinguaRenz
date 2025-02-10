package main

import (
	"context"
	"linguarenz/internal/db"
	"linguarenz/internal/server"
	"log"

	"github.com/joho/godotenv"
)

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	err := godotenv.Load()
	if err != nil {
		log.Fatalln(err)
	}

	err = db.NewDB()
	if err != nil {
		log.Fatalln(err)
	}

	defer db.CloseDB()

	server.Run(ctx)
}
