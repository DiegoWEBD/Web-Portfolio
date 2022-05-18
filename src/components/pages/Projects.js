import ProjectsContainer from '../ProjectsContainer'

const Projects = ({ cache }) => {

    return (
        <div className="mx-auto mb-10">
            <p className="text-5xl mb-20 font-bold text-center text-slate-200">Proyectos</p>
            <ProjectsContainer cache={cache} />
        </div>
    )
}

export default Projects