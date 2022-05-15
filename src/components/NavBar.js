import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const openNavMenu = () => {
        setOpen(!open)
    }

    return(
        <nav className='rounded px-4 py-2.5 bg-zinc-900 border-2 border-indigo-800'>
            <div className='container-lg flex flex-wrap justify-between items-center md:mx-7'>
                <Link to='/' className='font-semibold text-xl text-white'>DWebDev</Link>
            
                <div className="block md:hidden">
                    <button 
                        id="mobile-menu-button"    
                        data-collapse-toggle="mobile-menu" 
                        type="button" 
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                        aria-controls="mobile-menu" 
                        aria-expanded="false"
                        onClick={openNavMenu}
                    >
                        <span className="sr-only">Abrir menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                <div className={ !open ? 'hidden w-full md:block md:w-auto' : 'w-full md:block md:w-auto'} >
                    <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium'>
                        <Link onClick={ () => setOpen(false) } to='/' className='py-2 pr-4 pl-4 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent'>
                            <li>Inicio</li>
                        </Link>
                        <Link onClick={ () => setOpen(false) } to='/acerca-de' className='py-2 pr-4 pl-4 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent'>
                            <li>Acerca de</li>
                        </Link>
                        <Link onClick={ () => setOpen(false) } to='/proyectos' className='py-2 pr-4 pl-4 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent'>
                            <li>Proyectos</li>
                        </Link>
                        <Link onClick={ () => setOpen(false) } to='contacto' className='py-2 pr-4 pl-4 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent'>
                            <li>Contacto</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar