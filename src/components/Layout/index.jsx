import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Link } from 'react-router-dom'
import './style.scss'

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar className='layout__header' position='static'>
        <Link className='layout__header-link' to='/'>
          TestTask
        </Link>
      </AppBar>
      {children}
    </>
  )
}
