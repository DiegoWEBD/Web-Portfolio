import ContactForm from "../ContactForm"

const Contact = () => {

    return (
        <div className="w-full max-w-md mx-auto bg-gradient-to-br from-slate-800 to-gray-700 p-6 rounded-md shadow-xl shadow-black">
            <p className="text-white font-semibold mb-8">Si te quieres contactar conmigo, por favor rellena este formulario:</p>
            <ContactForm />
        </div>
    )
}

export default Contact