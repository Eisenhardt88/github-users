import { actionTypes } from '../types'
import { api } from '../../api'

const setLoadingAction = value => ({
  type: actionTypes.users.SET_LOADING,
  payload: value,
})

const setErrorAction = data => ({
  type: actionTypes.users.SET_ERROR,
  payload: data,
})

export const getUsersListAction = params => async dispatch => {
  try {
    dispatch(setLoadingAction(true))

    const res = await api.users.getUsersListApi(params)

    return dispatch({
      type: actionTypes.users.SET_USERS_LIST,
      payload: res,
    })
  } catch (err) {
    dispatch(setErrorAction(err))
  } finally {
    dispatch(setLoadingAction(false))
  }
}

export const getUserAction = params => async dispatch => {
  try {
    dispatch(setLoadingAction(true))

    const res = await api.users.getUserApi(params)

    return dispatch({
      type: actionTypes.users.SET_USER,
      payload: res,
    })
  } catch (err) {
    dispatch(setErrorAction(err))
  } finally {
    dispatch(setLoadingAction(false))
  }
}
