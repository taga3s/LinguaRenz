package config

import (
	"fmt"
	"os"
	"time"

	"github.com/go-sql-driver/mysql"
)

type Server struct {
	Port string
}

func GetServerConfig() Server {
	server := Server{
		Port: os.Getenv("PORT"),
	}
	return server
}

type DB struct {
	ENV         string
	Host        string
	Name        string
	User        string
	Password    string
	Port        string
	DSN_PREVIEW string
	DSN_PROD    string
}

func GetDSN() (string, error) {
	conf := getDBConfig()

	// 本番用
	if conf.ENV == "prod" {
		return conf.DSN_PROD, nil
	}

	// ステージング用
	if conf.ENV == "preview" {
		return conf.DSN_PREVIEW, nil
	}

	// 開発用
	jst, err := time.LoadLocation("Asia/Tokyo")
	if err != nil {
		err := fmt.Errorf("Error occurred while loading the 'Asia/Tokyo' time zone: %v", err)
		return "", err
	}
	c := mysql.Config{
		DBName:    conf.Name,
		User:      conf.User,
		Passwd:    conf.Password,
		Addr:      conf.Host + ":" + conf.Port,
		Net:       "tcp",
		ParseTime: true,
		Collation: "utf8mb4_0900_ai_ci",
		Loc:       jst,
	}
	return c.FormatDSN(), nil
}

func getDBConfig() DB {
	db := DB{
		ENV:         os.Getenv("GO_ENV"),
		Host:        os.Getenv("DB_HOST"),
		Port:        os.Getenv("DB_PORT"),
		Name:        os.Getenv("DB_DATABASE"),
		User:        os.Getenv("DB_USER"),
		Password:    os.Getenv("DB_PASSWORD"),
		DSN_PREVIEW: os.Getenv("DB_DSN_PREVIEW"),
		DSN_PROD:    os.Getenv("DB_DSN_PROD"),
	}
	return db
}

type StackAuth struct {
	ProjectID     string
	WebHookSecret string
}

func GetStackAuthConfig() StackAuth {
	stackAuth := StackAuth{
		ProjectID:     os.Getenv("STACK_AUTH_PROJECT_ID"),
		WebHookSecret: os.Getenv("STACK_AUTH_WEBHOOK_SECRET"),
	}
	return stackAuth
}
