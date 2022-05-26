import { GiDeadHead } from 'react-icons/gi'
import useWindowDimensions from '../custom_hooks/useWindowDimentions'

const PageNotFound = () => {

    const window_dimentions = useWindowDimensions()

    return(
        <div className='h-[70vh] flex flex-col md:flex-row justify-center items-center gap-y-10'>
            <GiDeadHead size={ window_dimentions.width >= 768 ? '20rem' : '13rem' } />
            <div className='text-center w-3/4 md:w-1/2 flex flex-col gap-y-2'>
                <p className='text-7xl sm:text-8xl md:text-9xl font-bold'> 404 </p>
                <p className='text-4xl sm:text-5xl md:text-6xl font-semibold tracking-widest italic'> ERROR </p>
                <p className='text-slate-400 text-[1.1rem] sm:text-xl md:text-2xl italic'> La página que intentas buscar no existe :( </p>
            </div>
        </div>
    )
}

export default PageNotFound