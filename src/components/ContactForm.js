import { useFormik } from 'formik'
import { useState } from 'react'
import  ErrorMessage  from './ErrorMessage'
import  SuccessNotification  from './SuccessNotification'
import emailjs from 'emailjs-com'

const ContactForm = () => {

    const [message_sent, setMessageSent] = useState(false)

    const sendEmail = (target) => {
        emailjs.sendForm(
            'service_sx6z1ba', 
            'template_wf7ob3o', 
            target, 
            'lxor4yzaQl9MquSI1'
        )
        .then(() => {
            setMessageSent(true)
            setTimeout(() => {
                setMessageSent(false) // Just to clear the message
            }, 3000)
        })
        .catch(err => console.log(err))
    }

    const onSubmit = (values) => {
        sendEmail(values)
    }

    const validate = (values) => {
        const errors = {}

        if(!values.name){
            errors.name = 'Este campo es obligatorio'
        }
        if(!values.email){
            errors.email = 'Este campo es obligatorio'
        }
        if(!values.message){
            errors.message = 'Este campo es obligatorio'
        }

        return errors
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate,
        onSubmit,
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        if(!formik.errors){
            sendEmail(event.target)
        }
        
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg shadow-black rounded p-5 mb-4">
        
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre
                </label>
                <input 
                    className="shadow appearance-none border border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="text" 
                    {...formik.getFieldProps('name')} 
                    placeholder="Nombre" 
                />
                { formik.touched.name && formik.errors.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Correo de contacto
                </label>
                <input 
                    className="shadow appearance-none border border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="email" 
                    {...formik.getFieldProps('email')}
                    placeholder="Correo electrónico" 
                />
                { formik.touched.email && formik.errors.email ? <ErrorMessage>{formik.errors.email}</ErrorMessage> : null}
            </div>

            <div className="mb-8">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Mensaje
                </label>
                <textarea 
                    className="shadow appearance-none border border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                    type="text" 
                    {...formik.getFieldProps('message')} 
                    placeholder="Escribe aquí tu mensaje..."
                />
                { formik.touched.message && formik.errors.message ? <ErrorMessage>{formik.errors.message}</ErrorMessage> : null}
            </div>

            <div className='mb-8'>
            {
                message_sent ? <SuccessNotification>Mensaje enviado</SuccessNotification> : null
            }
            </div>

            <div className='flex justify-center mb-5'>
                <button type="submit" className=" text-indigo-600 hover:text-white hover:bg-indigo-600 transition-all text-lg border-[2px] sm:border-[3px] border-indigo-600 font-semibold tracking-wide py-1 px-6 rounded-full focus:outline-none focus:shadow-outline">
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default ContactForm