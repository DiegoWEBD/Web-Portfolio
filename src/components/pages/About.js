import { motion } from 'framer-motion'
import Skills from '../Skills'
import ProfileInfo from '../ProfileInfo'

const About = ({ cache, setCache }) => {

    return(
        <motion.div 
            className="w-10/12 md:bg-neutral-800 mb-20 sm:mb-10 md:flex mx-auto rounded-xl md:shadow-lg md:shadow-black/70"
            initial={ { x: "150%", transition: { duration: 0.2 } } }
            animate={ { x: 0, transition: { duration: 0.2 } } }
        >
            <div className="bg-gradient-to-t from-[#7022ce] to-indigo-500 md:w-1/3 rounded-xl text-slate-300 shadow-xl shadow-black/60 md:shadow-none">
                <ProfileInfo />
            </div>
            
            <div className="bg-neutral-800 md:w-2/3 p-6 text-slate-200 mt-10 md:mt-0 rounded-xl shadow-xl shadow-black/60 md:shadow-none">
                <p className="text-2xl lg:text-3xl font-bold my-8 text-center">Mis Habilidades</p>       
                <Skills cache={cache} setCache={setCache} />
            </div>
        </motion.div>
    )
}

export default About