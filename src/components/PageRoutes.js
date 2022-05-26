import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'

const PageRoutes = ({ cache, setCache, setCurrentRoute }) => {

    const location = useLocation()

    useEffect(() => {
        setCurrentRoute(location.pathname)
    }, [location])

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname} >
                <Route exact path='/' element={<Home />} />
                <Route path='/acerca-de' element={<About cache={cache} setCache={setCache} />} />
                <Route path='/proyectos' element={<Projects cache={cache} setCache={setCache} />} />
                <Route path='/contacto' element={<Contact />} />
                <Route path='*' element={ <PageNotFound /> } />
            </Routes>
        </AnimatePresence>
    )
}

export default PageRoutes