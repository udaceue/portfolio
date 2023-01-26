import React from 'react'
import ProjectItem from './ProjectItem'
import odin from "../assets/odin.jpeg"

function Projects() {
  return (
    <div>
        <img src={odin}></img>
        <ProjectItem/>
    </div>
  )
}

export default Projects