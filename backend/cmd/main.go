package main

import (
	"context"
	"linguarenz/internal/db"
	"linguarenz/internal/server"
	"log"
)

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	err := db.NewDB()
	if err != nil {
		log.Fatalln(err)
	}

	defer db.CloseDB()

	server.Run(ctx)
}
