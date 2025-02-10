package main

import (
	"fmt"
	"linguarenz/internal/db"
	um "linguarenz/internal/model/user_model"
	"log"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalln(err)
	}

	if err := db.NewDB(); err != nil {
		log.Fatal(err)
	}
	dbConn := db.GetDB()
	defer fmt.Println("Successfully Migrated ✅")
	defer db.CloseDB()
	// migrate
	dbConn.AutoMigrate(&um.User{})
}
