﻿using budgetManager.Dto.AuthDto;
using budgetManager.Dto.UserDto;
using budgetManager.Models;

namespace budgetManager.Services.Interfaces
{
    public interface IAuthService
    {
        Task<AuthenticationDataDto> AuthenticationData(string usernameOrEmail);
        Task<bool> ValidateEmailExist(string emailToValidate);
        Task<User> GetUserByUsernameOrEmail(string usernameOrEmail);
        Task<bool> Login(string usernameOrEmail, string password);
        Task<UserForDetailedDto> Register(UserForRegisterDto userForRegisterDto);
        Task<LoginValidation> ValidateAccountForLogin(string usernameOrEmail);
        Task<string> ValidateUsernameOrEmailExist(string emailOrUsername);
        Task<bool> ValidateRecoveryKey(string recoveryKey, string email);
    }
}
