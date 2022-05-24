import { useEffect } from 'react'
import ContactForm from "../ContactForm"

const Contact = ({ setCurrentRoute }) => {

    useEffect(() => {
        setCurrentRoute('/contacto')
    }, [])

    return (
        <div className="w-full max-w-md mx-auto p-6 border border-indigo-800 rounded-md bg-neutral-800 shadow-lg shadow-black/70">
            <p className="text-white font-semibold mb-8">Si te quieres contactar conmigo, por favor rellena este formulario:</p>
            <ContactForm />
        </div>
    )
}

export default Contact