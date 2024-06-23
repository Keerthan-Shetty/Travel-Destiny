import React from 'react'
import './Tag.css'

const Tag = ({tag,heading}) => {
  return (
    <div className='common pb-4'>
      <p>{tag}</p>
      <h1 className='text-primary fw-bold'>{heading}</h1>
    </div>
  )
}

export default Tag
