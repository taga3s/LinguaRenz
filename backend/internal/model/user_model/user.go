package user_model

import "time"

type User struct {
	ID              string    `json:"id" gorm:"primaryKey"`
	GoogleAccountID string    `json:"google_account_id"`
	CreatedAt       time.Time `json:"created_at"`
}
