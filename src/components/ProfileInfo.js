const ProfileInfo = () => {

    return(
        <div>
            <img alt='DWebDev' src={ require('../img/principal_logo.png') } className="mx-auto h-28 md:h-24 lg:h-28 my-14 rounded-full shadow-xl shadow-black" /> 
                
            <div className="w-fit mx-auto p-4">
                <div className="flex flex-wrap mb-2 items-center">
                    <p className="w-fit text-xl mr-5 font-extrabold text-slate-200">Nombre:</p>
                    <p className="italic text-lg">Diego Maldonado Zamorano</p>
                </div>
                <div className="flex flex-wrap mb-2 items-center">
                    <p className="w-fit text-xl mr-5 font-extrabold text-slate-200">Ocupación:</p>
                    <p className="italic text-lg">Desarrollador web</p>
                </div>
                <div className="flex flex-wrap mb-2 items-center">
                    <p className="w-fit text-xl mr-5 font-extrabold text-slate-200">Edad:</p>
                    <p className="italic text-lg">22</p>
                </div>
                <div className="flex flex-wrap mb-2 items-center">
                    <p className="w-fit text-xl mr-5 font-extrabold text-slate-200">Residencia:</p>
                    <p className="text-lg">Chile</p>
                </div>
                <div className="flex flex-wrap mb-2 items-center">
                    <p className="w-fit text-xl mr-5 font-extrabold text-slate-200">Links:</p>
                    <div className="flex">
                        <a 
                            className="hover:text-gray-400 transition-all mr-3" 
                            href="https://github.com/DiegoWEBD" 
                            rel='noopener noreferrer'
                            target="_blank"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a 
                            className="bg-white h-fit rounded hover:bg-gray-400 transition-all mr-3" 
                            href="https://www.linkedin.com/in/diego-maldonado-zamorano-127570202" 
                            rel='noopener noreferrer'
                            target="_blank"
                        >
                            <img alt='Linked in' className="h-5" src={ require('../img/linkedin_logo.png') } />
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap mb-2 items-center">
                    <p className="w-fit text-xl mr-5 font-extrabold text-slate-200">CV:</p>
                    <a href='https://api.diego-maldonado.com/admin/curriculum'>
                        <svg 
                            className="w-6 h-6 animate-bounce" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo