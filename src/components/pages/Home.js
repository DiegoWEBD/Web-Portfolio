import { motion } from 'framer-motion'

const Home = () => {    

    return(
        <motion.div 
            className="md:flex content-center"
            initial={ { x: "100%", transition: { duration: 0.2 } } }
            animate={ { x: 0, transition: { duration: 0.2 } } }
        >
            <div className="logo w-1/2 md:py-8 mx-auto xl:mt-10">
                <img 
                    alt='Diego Web Dev' 
                    src={ require('../../img/principal_logo.png') } 
                    className="mx-auto rounded-full shadow-xl shadow-black h-36 sm:h-40 md:h-80 lg:h-96" 
                />
            </div>
            
            <div className="mx-auto mt-16 md:mt-0 md:w-1/2 md:flex md:flex-col md:justify-center items-center text-slate-100 tracking-widest">
                <p className="font-semibold text-md text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Hola, soy</p>
                <p className="font-extrabold text-center text-indigo-700 text-3xl lg:text-5xl xl:text-6xl ">Diego Maldonado</p>
                <p className="font-semibold mt-1 text-sm text-center text-xl lg:text-2xl xl:text-3xl">Desarrollador web</p>
            </div>
        </motion.div>
    )
}

export default Home