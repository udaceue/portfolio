import React from 'react'

function ProjectItem({img,href,appName,stack,description,id}) {
  return (
    <div className='border-4 border-emerald-600 border-opacity-60'>
      <a href={href} target="_blank">
        <div className="bg-gradient-to-r from-blue-800 to-green-600">
          <div className='flex relative'>
            <img className='hover:opacity-0 z-[11]' src={img}></img>
            <div className='absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-center items-center'>
              <p className='text-sm p-1 text-blue-200 lg:text-2xl 2xl:text-4xl '>{appName}</p>
              <p className='text-sm p-1 text-blue-200 lg:text-2xl 2xl:text-4xl '>Technologies:</p>
              <p className='text-sm p-1 text-blue-200 lg:text-2xl 2xl:text-4xl '>{stack}</p>
              <p className='hidden sm:block text-sm p-1 text-amber-200 lg:text-2xl 2xl:text-2xl '>{description}</p>
            </div>
          </div>
        </div>
        </a>
    </div>
  )
}

export default ProjectItem