// временно any, потом рефактор

const reducer = (state: any, action: any) => {
  switch (action.type) {
  case 'AUTH':
    return {
      ...state,
      userData: action.payload.userData,
      isAuth: true,
      accessToken: action.payload.access_token,
      refreshToken: action.payload.refresh_token,
    }
  case 'LOGOUT':
    return {}
  default:
    return state
  }
}

export default reducer
