import React from 'react'
import ProjectItem from './ProjectItem'


function Projects({data}) {
  return (
    <div className='min-h-min'>
    <h4 className='text-center text-indigo-700 text-4xl font-bold my-4'>Projects</h4>
    <div id='projects' className='grid grid-cols-1 gap-4 p-4 min-h-full w-full justify-items-center md:grid-cols-2'>
        {data.map((element, index)=> {
          return (
          <ProjectItem 
          key={index}
          img={element.img} 
          href={element.href} 
          appName={element.appName}
          description={element.description}
          stack={element.stack}
          />)
        })}
    </div>
    </div>
  )
}

export default Projects