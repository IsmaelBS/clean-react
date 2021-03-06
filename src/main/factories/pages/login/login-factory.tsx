import React from 'react'
import { makeLoginValidation } from './login-validation-factory'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/storage/local-save-access-token-factory'
import { Login } from '@/presentation/pages'

export const makeLogin: React.FC = () => {
  return (<Login
    validation={makeLoginValidation()}
    authentication={makeRemoteAuthentication()}
    saveAccessToken={makeLocalSaveAccessToken()}
  />)
}
