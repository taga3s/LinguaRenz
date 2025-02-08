package main

import (
	"fmt"
	"linguarenz/internal/db"
)

func main() {
	dbConn := db.NewDB()
	defer fmt.Println("Successfully Migrated")
	defer db.CloseDB(dbConn)
	// migrate
}
