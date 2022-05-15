import { useState, useEffect } from 'react'
import Project from './Project'
import LoadingAnimation from './LoadingAnimation'

const ProjectsContainer = () => {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = async () => {
        const response = await fetch('https://api.diego-maldonado.com/projects')
        const data = await response.json()
        setLoading(false)
        setProjects(data)
    }

    return (
        <div className="py-3 flex flex-wrap justify-center">
            
            { loading ? <LoadingAnimation /> : null }
            {
                !loading && projects.length === 0
                    ?   <p className="p-3 border-2 border-indigo-800 rounded text-white mb-5 text-xl">Aún no tengo ningún proyecto registrado :c</p>
                    :   projects.map(project => <Project key={project.id} project={project} />)
            }
                
        </div>
        
    )
}

export default ProjectsContainer