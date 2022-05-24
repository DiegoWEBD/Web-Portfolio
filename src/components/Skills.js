import { useState, useEffect } from 'react'
import Skill from './Skill'
import LoadingAnimation from './LoadingAnimation'
import { BASE_API_URL } from '../configs'

const Skills = ({ cache, setCache }) => {

    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(false)

    const getSkillsFromAPI = async () => {

        setLoading(true)
        const response = await fetch(`${BASE_API_URL}/skills`)
        const data = await response.json()

        setLoading(false)
        setSkills(data)
        
        setCache({
            ...cache, 
            skills: data
        })
    }

    useEffect(() => {

        if(cache.skills) setSkills(cache.skills)
        else getSkillsFromAPI()
    }, [])

    
    return (
        <div className="py-3 flex flex-wrap justify-center mx-auto md:max-h-96 overflow-auto md:w-11/12">
            
            { loading ? <LoadingAnimation bg_color='neutral-800' /> : null }
            {
                !loading && skills.length === 0
                    ?   <p className="p-2 border-2 border-indigo-700 rounded text-slate-200 mb-5 text-xl">Aún no tengo skills registradas :c</p>
                    :   skills.map(skill => <Skill key={skill.name} skill={skill} />)
                                
            }
            
        </div> 
    )
}

export default Skills