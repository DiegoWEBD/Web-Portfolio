import { useState, useEffect } from 'react'
import Skill from './Skill'
import LoadingAnimation from './LoadingAnimation'

const Skills = () => {

    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSkills()
    }, [])

    const getSkills = async () => {
        const response = await fetch('https://api.diego-maldonado.com/skills')
        const data = await response.json()
        setLoading(false)
        setSkills(data)
    }

    return (
        <div className="py-3 flex flex-wrap justify-center mx-auto md:max-h-96 overflow-auto md:w-11/12">
            
            { loading ? <LoadingAnimation /> : null }
            {
                !loading && skills.length === 0
                    ?   <p className="p-2 border-2 border-indigo-800 rounded text-white mb-5 text-xl">Aún no tengo skills registradas :c</p>
                    :   skills.map(skill => <Skill key={skill.name} skill={skill} />)
                                
            }
            
        </div> 
    )
}

export default Skills