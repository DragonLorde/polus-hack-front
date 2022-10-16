export const dataConvert = (data: any, isRememberPassword: boolean) => {
  // eslint-disable-next-line camelcase
  const { userData, refresh_token, access_token } = data
  return {
    userData: {
      emailVerified: userData.emailVerified,
      email: userData.email,
      eosBackend: userData.eosBackend,
      familyName: userData.familyName,
      givenName: userData.givenName,
      name: userData.name,
      preferredUsername: userData.preferredUsername,
    },
    // eslint-disable-next-line camelcase
    accessToken: access_token,
    // eslint-disable-next-line camelcase
    refreshToken: refresh_token,
    isLoading: false,
    isAuth: true,
    storageType: isRememberPassword,
  }
}
