import { useState, useEffect } from 'react'
import { BASE_API_URL } from '../configs'

const ProjectSkills = ({ project, cache }) => {

    const [project_skills, setProjectSkills] = useState([])

    const getProjectSkillsFromAPI = async () => {
        
        const response = await fetch(`${BASE_API_URL}/projects/${project.id}/skills`)
        const data = await response.json()
        const project_cache = cache.projects.find(p => p.id === project.id)

        project.skills = data
        project_cache.skills = data
        setProjectSkills(data)
    }

    useEffect(() => {

        if(cache.projects.find(p => p.id === project.id && p.skills)){
            const p = cache.projects.find(p => p.id === project.id)
            setProjectSkills(p.skills)
        }
        else getProjectSkillsFromAPI()
    }, [])

    return(
        <div className='flex items-center'>
            <p className='bg-indigo-700 h-fit mr-5 px-2 rounded-full'>skills</p>
            <div className='flex flex-wrap max-w-full items-center w-full'>
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