import Project from './Project'

const ProjectsList = ({ projects, cache, setCache }) => {
    return (
        <div className='h-fit md:h-[34rem] w-full flex flex-wrap gap-y-5 sm:gap-y-16 justify-around items-center'>
            {
                projects.map(project => <Project 
                    key={project.id} 
                    project={project} 
                    cache={cache}
                    setCache={setCache}
                />)
            }
        </div>
    )
}

export default ProjectsList