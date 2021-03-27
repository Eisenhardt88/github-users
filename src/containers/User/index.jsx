import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { User } from '../../components'
import { actions } from '../../store/actions'

export const UserContainer = () => {
  const dispatch = useDispatch()

  const { user, loading, error } = useSelector(state => state.users)

  const { user_id: userId } = useParams()

  useEffect(() => {
    dispatch(actions.users.getUserAction({ userId }))
  }, [userId])

  if (error) throw new Error('Network Error')

  return <User user={user} loading={loading} />
}
