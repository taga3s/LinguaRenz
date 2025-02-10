package user_service

import (
	ur "linguarenz/internal/infrastracture/repository/user_repository"
	um "linguarenz/internal/model/user_model"
)

type IUserService interface {
	Register(user um.User) error
}

type UserService struct {
	ur ur.IUserRepository
}

func NewUserService(ur ur.IUserRepository) IUserService {
	return &UserService{ur}
}

func (us *UserService) Register(user um.User) error {
	if err := us.ur.Create(&user); err != nil {
		return err
	}
	return nil
}
