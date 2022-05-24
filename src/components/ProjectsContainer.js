import { useState, useEffect } from 'react'
import Project from './Project'
import LoadingAnimation from './LoadingAnimation'
import { BASE_API_URL } from '../configs'

const ProjectsContainer = ({ cache, setCache }) => {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)

    const getProjectsFromAPI = async () => {
        
        setLoading(true)
        const response = await fetch(`${BASE_API_URL}/projects`)
        const data = await response.json()
                
        setLoading(false)
        setProjects(data)

        setCache({
            ...cache,
            projects: data
        })
    }

    useEffect(() => {

        if(cache.projects) setProjects(cache.projects)
        else getProjectsFromAPI()
    }, [])

    return (
        <div className="py-3 flex flex-wrap justify-around items-center">
            
            { loading ? <LoadingAnimation bg_color='neutral-900' /> : null }
            {
                !loading && projects.length === 0
                    ?   <p className="p-3 border-2 border-indigo-800 rounded text-white mb-5 text-xl">Aún no tengo ningún proyecto registrado :c</p>
                    :   projects.map(project => <Project key={project.id} project={project} cache={cache} />)
            }
                
        </div>
        
    )
}

export default ProjectsContainer