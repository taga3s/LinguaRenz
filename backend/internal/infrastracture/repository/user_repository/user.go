package user_repository

import (
	um "linguarenz/internal/model/user_model"

	"gorm.io/gorm"
)

type IUserRepository interface {
	FindById(id string) (*um.User, error)
	Create(user *um.User) error
}

type UserRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) IUserRepository {
	return &UserRepository{db}
}

func (ur *UserRepository) FindById(id string) (*um.User, error) {
	user := &um.User{}
	if err := ur.db.Where("id = ?", id).First(user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (ur *UserRepository) Create(user *um.User) error {
	if err := ur.db.Create(user).Error; err != nil {
		return err
	}
	return nil
}
