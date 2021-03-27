import React from 'react'
import './style.scss'

export const Spinner = () => {
  return (
    <div className='lds-grid-container'>
      <div className='lds-grid'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
