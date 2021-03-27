import { actionTypes } from '../types'

const initialState = {
  usersList: [],
  user: {},
  loading: false,
  error: null,
}

export const users = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.users.SET_USERS_LIST:
      return {
        ...state,
        usersList: payload,
      }
    case actionTypes.users.SET_USER:
      return {
        ...state,
        user: payload,
      }
    case actionTypes.users.SET_LOADING:
      return {
        ...state,
        loading: payload,
      }
    case actionTypes.users.SET_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
