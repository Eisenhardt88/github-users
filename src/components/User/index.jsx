import React from 'react'
import './style.scss'
import { Spinner } from '../Spinner'
import { isInfoProvided, timeToLocal } from '../../utils'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export const User = ({ user, loading }) => {
  return (
    <div className='user'>
      {loading ? (
        <Spinner />
      ) : (
        <div className='user__content'>
          <div className='user__avatar'>
            <img src={user.avatar_url} alt={user.login} />
          </div>
          <div className='user__params'>
            <div className='user__params-item'>Name: {isInfoProvided(user.name)}</div>
            <div className='user__params-item'>Profile created: {timeToLocal(user.created_at)}</div>
            <div className='user__params-item'>Followers: {isInfoProvided(user.followers)}</div>
            <div className='user__params-item'>Following: {isInfoProvided(user.following)}</div>
            <div className='user__params-item'>Company: {isInfoProvided(user.company)}</div>
            <div className='user__params-item'>Email: {isInfoProvided(user.email)}</div>
            <div className='user__params-item'>Location: {isInfoProvided(user.email)}</div>
            <div className='user__params-item'>Blog: {isInfoProvided(user.blog)}</div>
            <div className='user__params-item'>Bio: {isInfoProvided(user.bio)}</div>
          </div>
        </div>
      )}
      <div className='user__buttons'>
        <Button variant='contained' color='primary' component={Link} to='/'>
          {' '}
          Back to the list
        </Button>
      </div>
    </div>
  )
}
