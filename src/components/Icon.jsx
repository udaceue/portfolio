import React from 'react'

function Icon({icon, href}) {
  return (
    <div className='pointer hover:text-gray-500 text-xl'>
        <a href={href} target="_blank">{icon}</a>
    </div>
  )
}

export default Icon