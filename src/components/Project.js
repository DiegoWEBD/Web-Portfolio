const Project = ({ project }) => {
    
    return(
        <div className="mx-auto group opacity-70 hover:opacity-100 block px-6 pt-6 pb-4 mb-10 max-w-sm h-60 overflow-hidden rounded-lg border shadow shadow-black bg-gradient-to-br from-slate-800 to-gray-700 border-gray-700 hover:bg-gray-700 hover:shadow-xl hover:h-full hover:rounded-xl">
            <div className="h-48 overflow-hidden rounded shadow-lg shadow-black">
                <img alt={ project.name } className="min-h-full" src={project.logo_route} />
            </div>

            <div className="mt-4 invisible group-hover:visible break-words">
                <p className="mb-1 text-2xl text-slate-300 font-extrabold opacity-0 group-hover:opacity-100 transition-all duration-300">{ project.name }</p>
                <p className="mb-4 text-slate-400 font-semibold italic opacity-0 group-hover:opacity-100 transition-all duration-300">{ project.description }</p>

                {
                    project.github_link
                        ?   <div className="mb-1 flex">
                                <p className="text-md my-auto text-purple-600 font-semibold mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ">Github:</p>
                                <p className="text-md my-auto text-slate-100 hover:text-slate-500 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-bounce"><a rel='noopener noreferrer' href={project.github_link} target="_blank"><img alt={project.github_link} className='h-5' src={ require('../img/github_logo.png') } /></a></p>
                            </div>
                        :   null
                }
                {
                    project.page_link
                        ?   <div className="mb-1 flex">
                                <p className="text-xs text-slate-400 font-semibold mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300">Web:</p>
                                <p className="text-xs text-purple-500 hover:text-purple-700 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"><a rel='noopener noreferrer' href={project.page_link} target="_blank">{project.page_link}</a></p>
                            </div>
                        :   null
                }
                
                
            </div>
        </div>
    )
}

export default Project