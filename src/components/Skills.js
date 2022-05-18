import { useState, useEffect } from 'react'
import Skill from './Skill'
import LoadingAnimation from './LoadingAnimation'

const Skills = ({ cache }) => {

    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(false)

    const getSkillsFromAPI = async () => {

        setLoading(true)
        const response = await fetch('https://api.diego-maldonado.com/skills')
        const data = await response.json()

        setLoading(false)
        setSkills(data)
        cache.skills = data
    }

    useEffect(() => {

        if(cache.skills) setSkills(cache.skills)
        else getSkillsFromAPI()
    }, [])

    
    return (
        <div className="py-3 flex flex-wrap justify-center mx-auto md:max-h-96 overflow-auto md:w-11/12">
            
            { loading ? <LoadingAnimation /> : null }
            {
                !loading && skills.length === 0
                    ?   <p className="p-2 border-2 border-indigo-700 rounded text-slate-200 mb-5 text-xl">Aún no tengo skills registradas :c</p>
                    :   skills.map(skill => <Skill key={skill.name} skill={skill} />)
                                
            }
            
        </div> 
    )
}

export default Skills