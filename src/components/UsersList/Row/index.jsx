import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

export const Row = ({user})=> (
  <Link to = {`/user/${user.login}`} className = "row">
    <div className = "row__image">
      <img src = {user.avatar_url} alt = {user.login} />
    </div>
    <div className = "row__login">
      {user.login}
    </div>
    <a href = {user.html_url} className = "row__link" target="_blank" rel="noreferrer">
      Open profile on GitHub
    </a>
  </Link>
) 
