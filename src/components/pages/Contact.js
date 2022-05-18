import ContactForm from "../ContactForm"

const Contact = () => {

    return (
        <div className="w-full max-w-md mx-auto  p-6 rounded-md border-2 border-slate-300">
            <p className="text-white font-semibold mb-8">Si te quieres contactar conmigo, por favor rellena este formulario:</p>
            <ContactForm />
        </div>
    )
}

export default Contact