import { useState } from 'react'
import Contact from './components/Contact'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Work from './components/Work'
import {Experience} from "./data/Experience"
import {Projects_Data} from "./data/Projects_Data"

function App() {


  return (
    <div className="App">
      <Sidenav />
      <Main/>
      <Work data={Experience}/>
      <Projects data={Projects_Data}/>
      <Contact />
    </div>
  )
}

export default App
