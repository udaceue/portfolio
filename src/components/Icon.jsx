import React from 'react'

function Icon({icon}) {
  return (
    <div className='pointer hover:text-gray-500 text-xl'>
        <a href='#'>{icon}</a>
    </div>
  )
}

export default Icon