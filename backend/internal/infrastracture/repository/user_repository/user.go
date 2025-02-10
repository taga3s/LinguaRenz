package user_repository

import (
	"errors"
	um "linguarenz/internal/model/user_model"

	"gorm.io/gorm"
)

type IUserRepository interface {
	FindById(id string) (*um.User, error)
	FindByGoogleAccountID(googleID string) (*um.User, error)
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
	result := ur.db.First(user, id)
	// Check if user not found
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return nil, nil
	}
	if result.Error != nil {
		return nil, result.Error
	}
	return user, nil
}

func (ur *UserRepository) FindByGoogleAccountID(googleID string) (*um.User, error) {
	user := &um.User{}
	result := ur.db.Where("google_account_id = ?", googleID).First(user)
	// Check if user not found
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return nil, nil
	}
	if result.Error != nil {
		return nil, result.Error
	}
	return user, nil
}

func (ur *UserRepository) Create(user *um.User) error {
	// Check if user already exists
	existedUser, err := ur.FindByGoogleAccountID(user.GoogleAccountID)
	if err != nil {
		return err
	}
	if existedUser != nil {
		return nil
	}
	// Create user
	if err := ur.db.Create(user).Error; err != nil {
		return err
	}
	return nil
}
