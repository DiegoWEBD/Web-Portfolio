import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'

const App = () => {

  const cache = {}
  
  return (
    <div className='min-h-screen text-slate-200 bg-neutral-900 p-2 font-mono'>
      <NavBar />
      <section className='mt-14 md:mt-20 w-10/12 mx-auto'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/acerca-de' element={<About cache={cache} />} />
          <Route path='/proyectos' element={<Projects cache={cache} />} />
          <Route path='/contacto' element={<Contact />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
