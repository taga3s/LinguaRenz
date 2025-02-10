package user_service

import (
	ur "linguarenz/internal/infrastracture/repository/user_repository"
	um "linguarenz/internal/model/user_model"
)

type IUserService interface {
	FindById(id string) (*um.User, error)
	Register(user um.User) error
}

type UserService struct {
	ur ur.IUserRepository
}

func NewUserService(ur ur.IUserRepository) IUserService {
	return &UserService{ur}
}

func (us *UserService) FindById(id string) (*um.User, error) {
	user, err := us.ur.FindById(id)
	if err != nil {
		return nil, err
	}
	return user, nil
}

func (us *UserService) Register(user um.User) error {
	if err := us.ur.Create(&user); err != nil {
		return err
	}
	return nil
}
