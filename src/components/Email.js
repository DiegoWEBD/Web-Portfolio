const Email = () => {
    
    return (
        <div className='bg-white text-slate-900 p-5'>
            <p className='font-semibold mb-5'>Has recibido un mensaje de contacto desde tu Web:</p>
            <div className='shadow-md shadow-indigo-500/50 break-words border border-indigo-700 rounded-md py-2 px-3'>
                <div className='flex flex-wrap items-center'>
                    <p className='font-bold mr-4'>Nombre:</p>
                    <p className='text-sm'>Diego Alexander Maldonado Zamorano</p>
                </div>
                <div className='flex flex-wrap items-center'>
                    <p className='font-bold mr-4'>Email:</p>
                    <p className='text-sm'>diego.maldonado.1alsf@gmail.com</p>
                </div>
                <div>
                    <p className='font-bold'>Mensaje:</p>
                    <p className='bg-[#e3e5eb] rounded py-1 px-2 text-sm'>KAJSHDKJASHDKAJDSHKAJSHDKAJSDHKAJSDHKJASHKAJSDHKAJSDHKAJSDHAKJSDHKAJSDHAKJSDHAKSJDHKAJSDHAKSJDHAKJSDHKASJDHKAJSDHKAJSDHKAJSDHKAJSDHKASJHDKJASDHKAJDSHKAJSDHKAJSDHKAJSDHKASJDHKAJSDHKUDHIQUDHKASJDHQIWUEDHAKSJDH</p>
                </div>
            </div>
        </div>
    )
}

export default Email