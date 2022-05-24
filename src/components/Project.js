import { useState } from 'react'
import { motion } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'
import ProjectSkills from './ProjectSkills'

const Project = ({ project, cache, setCache }) => {

    const [is_open, setIsOpen] = useState(false)
    
    return(
        <motion.div layout className='h-fit w-[340px] sm:w-[440px] flex justify-center text-center'>
            <motion.div
                onClick={() => setIsOpen(!is_open)} 
                className="w-[326px] sm:w-[400px] md:hover:w-[418px] block pt-6 pb-4 mb-12 sm:mb-0 px-[26px] md:hover:px-[33px] h-fit transition-all  rounded-lg shadow-lg shadow-black/60 border hover:shadow-xl hover:shadow-black/60 hover:rounded-xl"
            >
                <motion.div layout className="h-48 overflow-hidden rounded shadow-lg shadow-black">
                    <motion.img alt={ project.name } className="min-h-full" src={project.logo_route} />
                </motion.div>

                <motion.div layout className="mt-4 break-words">
                    <motion.p className="mb-1 text-2xl text-slate-100 font-extrabold transition-all duration-300" >{ project.name }</motion.p>
                    
                    {is_open && (<motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                        <motion.p className="mb-4 text-[15px] text-slate-400 font-semibold italic transition-all duration-300">{ project.description }</motion.p>
                        {
                            project.github_link
                                ?   <motion.div className="mb-1 flex items-center">
                                        <motion.p className="text-md my-auto text-slate-300 font-bold mr-3 transition-all duration-300 ">Github:</motion.p>
                                        <motion.p className="text-md my-auto transition-all animate-bounce"><motion.a rel='noopener noreferrer' href={project.github_link} target="_blank"><AiFillGithub /></motion.a></motion.p>
                                    </motion.div>
                                :   null
                        }
                        {
                            project.page_link
                                ?   <motion.div className="mb-1 flex items-center">
                                        <motion.p className="text-md text-slate-300 font-bold mr-3 transition-all duration-300">Web:</motion.p>
                                        <motion.p className="text-xs text-indigo-700 hover:text-indigo-900 font-semibold transition-all duration-300"><motion.a rel='noopener noreferrer' href={project.page_link} target="_blank">{project.page_link}</motion.a></motion.p>
                                    </motion.div>
                                :   null
                        }
                        <motion.div className='mt-4'>
                            <ProjectSkills 
                                project={project} 
                                cache={cache} 
                                setCache={setCache}   
                            />
                        </motion.div>
                    </motion.div>)}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Project