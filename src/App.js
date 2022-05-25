import { useState } from 'react'
import NavBar from './components/NavBar'
import PageRoutes from './components/PageRoutes'

const App = () => {

  const [current_route, setCurrentRoute] = useState('/')
  const [cache, setCache] = useState({})

  
  return (
    <div className='min-h-screen text-slate-200 bg-[#171717] p-2 font-mono'>
      <NavBar current_route={current_route} />
      <section className='mt-14 md:mt-20 mx-auto'>
        <PageRoutes 
          cache={cache} 
          setCache={setCache}
          setCurrentRoute={setCurrentRoute}  
        />
      </section>
    </div>
  )
}

export default App
