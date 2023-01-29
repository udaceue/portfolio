import React from 'react'
import WorkItem from './WorkItem'

function Work({data}) {
  return (
    <div id='work' className='min-h-max flex justify-center items-center flex-col p-4'>
    <h2 className='text-indigo-700 my-8 text-center text-4xl font-bold'>Experience</h2>
    <div className='block w-full md:grid grid-cols-2 gap-4'>
        {data.map((el, index)=>{
            return(
            <div key={index} className="p-2 border-b-blue-400 border-b-2">
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