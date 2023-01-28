import React from 'react'

function WorkItem({year, title, duration, details}) {
  return (
    <div className='flex flex-col p-4'>
        <div className='flex text-center'>
            <div className='w-12 p-2 bg-indigo-800 text-white rounded-md text-center flex items-center justify-center'>{year}</div>
            <div className='m-2 text-indigo-800 text-lg'>{title}</div>
            <div className='m-2 text-xl italic'>{duration}</div>
        </div>
        <p className='max-w-3xl lg:max-w-4xl mt-4'>{details}</p>
    </div>
  )
}

export default WorkItem