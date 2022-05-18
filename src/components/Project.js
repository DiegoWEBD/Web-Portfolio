import { AiFillGithub } from 'react-icons/ai'
import ProjectSkills from './ProjectSkills'

const Project = ({ project, cache }) => {
    
    return(
        <div className='w-[440px] flex justify-center'>
            <div className="w-[350px] hover:w-[368px] sm:w-[400px] sm:hover:w-[418px] block pt-6 pb-4 mb-12 px-[26px] hover:px-[35px] h-fit transition-all  rounded-lg shadow-lg shadow-black/60 border hover:shadow-xl hover:shadow-black/60 hover:rounded-xl">
                <div className="h-48 overflow-hidden rounded shadow-lg shadow-black">
                    <img alt={ project.name } className="min-h-full" src={project.logo_route} />
                </div>

                <div className="mt-4 break-words">
                    <p className="mb-1 text-2xl text-slate-100 font-extrabold transition-all duration-300">{ project.name }</p>
                    <p className="mb-4 text-[15px] text-slate-400 font-semibold italic transition-all duration-300">{ project.description }</p>

                    {
                        project.github_link
                            ?   <div className="mb-1 flex items-center">
                                    <p className="text-md my-auto text-slate-300 font-bold mr-3 transition-all duration-300 ">Github:</p>
                                    <p className="text-md my-auto transition-all animate-bounce"><a rel='noopener noreferrer' href={project.github_link} target="_blank"><AiFillGithub /></a></p>
                                </div>
                            :   null
                    }
                    {
                        project.page_link
                            ?   <div className="mb-1 flex items-center">
                                    <p className="text-md text-slate-300 font-bold mr-3 transition-all duration-300">Web:</p>
                                    <p className="text-xs text-indigo-700 hover:text-indigo-900 font-semibold transition-all duration-300"><a rel='noopener noreferrer' href={project.page_link} target="_blank">{project.page_link}</a></p>
                                </div>
                            :   null
                    }
                    <div className='mt-4'>
                        <ProjectSkills 
                            project={project} 
                            cache={cache}    
                        />
                    </div>
                </div>
            </div>
        </div>
    )

    /*return(
        <div className="mx-auto group opacity-70 hover:opacity-100 block px-6 pt-6 pb-4 mb-10 w-[400px] hover:w-[420px] transition-all h-60 overflow-hidden rounded-lg border shadow shadow-black bg-gradient-to-br from-slate-800 to-gray-700 border-gray-700 hover:bg-gray-700 hover:shadow-xl hover:h-full hover:rounded-xl">
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
    )*/
}

export default Project