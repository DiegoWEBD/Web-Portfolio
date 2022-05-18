import ProjectsContainer from '../ProjectsContainer'

const Projects = ({ cache }) => {

    return (
        <div className="mx-auto mb-10">
            <p className="text-6xl mb-20 font-bold text-center text-slate-900">Proyectos</p>
            <ProjectsContainer cache={cache} />
        </div>
    )
}

export default Projects