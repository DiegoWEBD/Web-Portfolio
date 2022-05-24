import { useEffect } from 'react'
import ProjectsContainer from '../ProjectsContainer'

const Projects = ({ cache, setCache, setCurrentRoute }) => {

    useEffect(() => {
        setCurrentRoute('/proyectos')
    }, [])

    return (
        <div className="mx-auto mb-10">
            <p className="text-6xl mb-20 font-bold text-center text-slate-100">Proyectos</p>
            <ProjectsContainer cache={cache} setCache={setCache} />
        </div>
    )
}

export default Projects