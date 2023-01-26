import { useState } from 'react'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Work from './components/Work'
import {Experience} from "./data/Experience"

function App() {


  return (
    <div className="App">
      <Sidenav />
      <Main/>
      <Work data={Experience}/>
      <Projects/>
    </div>
  )
}

export default App
