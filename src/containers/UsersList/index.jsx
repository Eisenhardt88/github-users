import React, { useEffect, useState, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UsersList } from '../../components'
import { actions } from '../../store/actions'
import { useDebounce } from '../../hooks/useDebounce'
import { getNumValue } from '../../utils'

export const UsersListContainer = () => {
  const dispatch = useDispatch()
  const initialDataFetch = useRef()

  const { usersList: users, loading, error } = useSelector(state => state.users)

  const PER_PAGE_DEFAULT = 5
  const SINCE_DEFAULT = 0

  const [perPage, setPerPage] = useState(getNumValue(localStorage.getItem('per_page')) || PER_PAGE_DEFAULT)
  const [since, setSince] = useState(getNumValue(localStorage.getItem('since')) || SINCE_DEFAULT)
  const debouncedSince = useDebounce(since, 1000)

  useEffect(() => {
    if (!initialDataFetch.current) {
      dispatch(actions.users.getUsersListAction({ perPage, since }))
      initialDataFetch.current = true
    } else {
      dispatch(actions.users.getUsersListAction({ perPage, since: debouncedSince }))
      localStorage.setItem('per_page', JSON.stringify(perPage))
      localStorage.setItem('since', JSON.stringify(debouncedSince))
    }
  }, [perPage, debouncedSince])

  const handlePage = useCallback(e => {
    const value = e.target.value
    setPerPage(value)
  }, [])

  const handleSince = useCallback(e => {
    const value = parseInt(e.target.value)
    if (value < 0) return setSince(0)
    setSince(value)
  }, [])

  if (error) throw new Error('Network Error')

  return (
    <UsersList
      users={users}
      loading={loading}
      handlePage={handlePage}
      perPage={perPage}
      since={since}
      handleSince={handleSince}
    />
  )
}
