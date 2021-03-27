import React from 'react'
import './style.scss'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import { Row } from './Row'
import { Spinner } from '../Spinner'

export const UsersList = React.memo(({ users, loading, handlePage, perPage, since, handleSince }) => {
  return (
    <div className='users-list'>
      <div className='users-list__options'>
        <div className='users-list__options-select'>
          <FormControl variant='outlined'>
            <InputLabel>Profiles per page</InputLabel>
            <Select value={perPage} onChange={handlePage} label='Profiles per page'>
              <MenuItem value={5}>5 profiles</MenuItem>
              <MenuItem value={25}>25 profiles</MenuItem>
              <MenuItem value={50}>50 profiles</MenuItem>
              <MenuItem value={100}>100 profiles</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='users-list__options-input'>
          <TextField type='number' value={since} onChange={handleSince} label='Start from ID' variant='outlined' />
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className='users-list__list'>
          {users.map(user => (
            <Row user={user} key={user.id} />
          ))}
        </div>
      )}
    </div>
  )
})
