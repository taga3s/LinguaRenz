package user_model

import "time"

type User struct {
	ID              string `gorm:"primaryKey"`
	GoogleAccountID string
	CreatedAt       time.Time
}
