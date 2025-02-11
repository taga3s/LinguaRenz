package db

import (
	"linguarenz/internal/config"
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var gormDB *gorm.DB

func NewDB() error {
	dsn, err := config.GetDSN()
	if err != nil {
		return err
	}

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return err
	}
	log.Println("Connected to database 🚀")

	gormDB = db

	return nil
}

func GetDB() *gorm.DB {
	return gormDB
}

func CloseDB() {
	// Access the raw *sql.DB object
	sqlDB, err := gormDB.DB()
	if err != nil {
		log.Fatalf("Error getting *sql.DB object: %v", err)
	}

	if err := sqlDB.Close(); err != nil {
		log.Fatalln(err)
	}
}

func CheckConnection() error {
	sqlDB, _ := gormDB.DB()
	if err := sqlDB.Ping(); err != nil {
		return err
	}

	return nil
}
