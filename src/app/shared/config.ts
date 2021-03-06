export const CONFIG = {
  apiKey: 'AIzaSyBFpCfEAAT-ltA-MqDdgTMOcr877v2gLlc',
  signUp: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
  signIn: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
  dataBaseUsers: 'https://treba-zrabic.firebaseio.com/',
  localStorageUserId:'zrabicUserId',
  inProgress: 'In Progress',
  redirectUrl: '/',
  logInUrl: '/log-in',
  signUpUrl:'/sign-ug',
  userLocalStorage: 'zrabicUser',
  todo: 'Todo',
  done: 'Done',
  errorList: {
    EMAIL_NOT_FOUND: 'There is no user record corresponding to this identifier. The user may have been deleted',
    INVALID_PASSWORD: 'The password is invalid or the user does not have a password',
    USER_DISABLED: 'The user account has been disabled by an administrator',
    EMAIL_EXISTS: 'The email address is already in use by another account',
    OPERATION_NOT_ALLOWED: 'Password sign-in is disabled for this project',
    TOO_MANY_ATTEMPTS_TRY_LATER: 'We have blocked all requests from this device due to unusual activity. Try again later',
    INVALID_EMAIL: 'The email address is badly formatted',
    404: 'Not Found. Could not get object',
    "WEAK_PASSWORD : Password should be at least 6 characters": 'Password should be at least 6 characters'
  }

}