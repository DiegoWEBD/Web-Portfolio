const ProjectSkills = ({ project_skills }) => {

    return(
        <div className='flex items-center'>
            {
                project_skills.length !== 0 && (
                    <p className='bg-indigo-700 h-fit mr-5 px-2 rounded-full'>skills</p>
                )
            }
            <div className='flex flex-wrap items-center w-full'>
                {
                    project_skills.map(skill => 
                        <img 
                            key={skill.id} 
                            src={skill.logo_route} 
                            alt={skill.name}
                            className='h-5 mr-2 my-1' 
                        />    
                    )
                }
            </div>
        </div>
    )
}

export default ProjectSkills