import { useFormik } from 'formik'
import { useState } from 'react'
import  ErrorMessage  from './messages/ErrorMessage'
import  SuccessNotification  from './messages/SuccessNotification'
import ErrorNotification from './messages/ErrorNotification'
import LoadingAnimation from './LoadingAnimation'
import axios from 'axios'
import { BASE_API_URL } from '../configs'

const ContactForm = () => {

    const [sending_message, setSendingMessage] = useState(false)
    const [message_sent, setMessageSent] = useState(false)
    const [message_failed, setMessageFailed] = useState(false)

    const showSuccessNotification = async () => {
        setMessageSent(true)
        setTimeout(() => setMessageSent(false), 3000)
    }

    const showErrorNotification = async () => {
        setMessageFailed(true)
        setTimeout(() => setMessageFailed(false), 3000)
    }

    const sendEmail = async ({ name, email, message }) => {

        setSendingMessage(true)
        await axios
                .get(`${BASE_API_URL}/contact/${name}/${email}/${message}`)
                .then(() => {
                    setSendingMessage(false)
                    showSuccessNotification()
                })
                .catch(() => showErrorNotification())
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

    return (
        <form onSubmit={formik.handleSubmit} className="text-sm bg-[#f6f6f6] rounded p-5 mb-4">
        
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                    Nombre
                </label>
                <input 
                    className="bg-[#f6f6f6] shadow appearance-none border border-indigo-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="text" 
                    {...formik.getFieldProps('name')} 
                    placeholder="Nombre" 
                />
                { formik.touched.name && formik.errors.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                    Correo de contacto
                </label>
                <input 
                    className="bg-[#f6f6f6] shadow appearance-none border border-indigo-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="email" 
                    {...formik.getFieldProps('email')}
                    placeholder="Correo electr??nico" 
                />
                { formik.touched.email && formik.errors.email ? <ErrorMessage>{formik.errors.email}</ErrorMessage> : null}
            </div>

            <div className="mb-2">
                <label className="block text-gray-700 font-bold mb-2">
                    Mensaje
                </label>
                <textarea 
                    className="bg-[#f6f6f6] text-[11px] sm:text-sm shadow appearance-none border border-indigo-600 rounded w-full h-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                    type="text" 
                    {...formik.getFieldProps('message')} 
                    placeholder="Escribe aqu?? tu mensaje..."
                />
                { formik.touched.message && formik.errors.message ? <ErrorMessage>{formik.errors.message}</ErrorMessage> : null}
            </div>

            <div className='min-h-[35px]'>
                <div className='flex justify-center'>
                {
                    sending_message ? <LoadingAnimation bg_color='#f6f6f6' size='33px' /> : null 
                }
                </div>

                {
                    message_sent ? <SuccessNotification>Tu mensaje se ha enviado</SuccessNotification> : null
                }
                    
                {
                    message_failed ? <ErrorNotification>Ha ocurrido un error, int??ntalo otra vez</ErrorNotification> : null
                }

            </div>

            <div className='flex justify-center mt-5'>
                <button type="submit" className=" text-indigo-700 hover:text-white hover:bg-indigo-700 hover:shadow-md hover:shadow-indigo-600/70 transition-all text-lg border-[2px] sm:border-[3px] border-indigo-700 font-semibold tracking-wide py-1 px-6 rounded-full focus:outline-none focus:shadow-outline">
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default ContactForm