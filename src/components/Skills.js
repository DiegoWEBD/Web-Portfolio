import { useState, useEffect } from 'react'
import Skill from './Skill'
import LoadingAnimation from './LoadingAnimation'

const Skills = ({ cache }) => {

    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(false)

    const getSkills = async () => {

        if(cache.skills.length !== 0){
            setSkills(cache.skills)
            return
        }

        setLoading(true)
        const response = await fetch('https://api.diego-maldonado.com/skills')
        const data = await response.json()

        setLoading(false)
        setSkills(data)
        cache.skills = data
    }

    useEffect(() => {
        getSkills()
    }, [])

    
    return (
        <div className="py-3 flex flex-wrap justify-center mx-auto md:max-h-96 overflow-auto md:w-11/12">
            
            { loading ? <LoadingAnimation /> : null }
            {
                !loading && skills.length === 0
                    ?   <p className="p-2 border-2 border-zinc-900 rounded text-zinc-900 mb-5 text-xl">Aún no tengo skills registradas :c</p>
                    :   skills.map(skill => <Skill key={skill.name} skill={skill} />)
                                
            }
            
        </div> 
    )
}

export default Skills