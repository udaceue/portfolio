import React from 'react'
import WorkItem from './WorkItem'

function Work({data}) {
  return (
    <div id='work' className='min-h-max'>
    <h2 className='text-indigo-700 my-8 text-center text-4xl font-bold'>Experience</h2>
    <div className='block  md:grid grid-cols-2'>
        {data.map((el, index)=>{
            return(
            <div key={index}>
            <WorkItem 
            year={el.year}
            title={el.title}
            duration={el.duration} 
            details={el.details}/>     
            </div>
            )
        })}
     </div>
    </div>
  )
}

export default Work