package db

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var gormDB *gorm.DB

func NewDB() error {
	err := godotenv.Load()
	if err != nil {
		log.Fatalln(err)
	}

	dsn := fmt.Sprintf(
		"%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_DATABASE"),
	)

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
