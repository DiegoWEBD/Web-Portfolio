import { motion } from 'framer-motion'
import ContactForm from '../ContactForm'

const Contact = () => {

    return (
        <motion.div 
            className='w-10/12 max-w-md mx-auto p-6 border border-indigo-800 rounded-md bg-neutral-800 shadow-lg shadow-black/70'
            initial={ { x: "250%", transition: { duration: 0.2 } } }
            animate={ { x: 0, transition: { duration: 0.2 } } }
        >
            <p className='text-white font-semibold mb-8'>Si te quieres contactar conmigo, por favor rellena este formulario:</p>
            <ContactForm />
        </motion.div>
    )
}

export default Contact