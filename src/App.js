import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'

const App = () => {

  const [current_route, setCurrentRoute] = useState('/')
  const [cache, setCache] = useState({})
  
  return (
    <div className='min-h-screen text-slate-200 bg-neutral-900 p-2 font-mono'>
      <NavBar current_route={current_route} />
      <section className='mt-14 md:mt-20 w-10/12 mx-auto'>
        <Routes>
          <Route exact path='/' element={<Home setCurrentRoute={setCurrentRoute} />} />
          <Route path='/acerca-de' element={<About setCurrentRoute={setCurrentRoute} cache={cache} setCache={setCache} />} />
          <Route path='/proyectos' element={<Projects setCurrentRoute={setCurrentRoute} cache={cache} setCache={setCache} />} />
          <Route path='/contacto' element={<Contact setCurrentRoute={setCurrentRoute} />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
