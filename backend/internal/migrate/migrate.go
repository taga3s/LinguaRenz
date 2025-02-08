package main

import (
	"fmt"
	"linguarenz/internal/db"
	"log"
)

func main() {
	if err := db.NewDB(); err != nil {
		log.Fatal(err)
	}
	defer fmt.Println("Successfully Migrated")
	defer db.CloseDB()
	// migrate
}
