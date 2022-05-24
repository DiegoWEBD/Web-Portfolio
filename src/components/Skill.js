import { useEffect, useState } from 'react'

const Skill = ({ skill }) => {

    const [image_loaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const loadImage = image_url => {
            return new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = image_url
                loadImg.onload = () => resolve(image_url)
                loadImg.onerror = err => reject(err)
            })
        }

        loadImage(skill.logo_route)
                    .then(() => setImageLoaded(true))
                    .catch(err => console.log(err))
    })

    return (
        <div>
            {
                image_loaded
                    ?   <div className="text-slate-200 flex mb-3 p-2 mr-3 items-center border-2 border-indigo-700 rounded-xl">
                            <div className="h-12 lg:h-14 mr-5">
                                <img alt={ skill.name } className="h-full" src={ skill.logo_route } />
                            </div>
                            <p className="bg-indigo-700 text-lg lg:text-xl font-semibold py-1 px-3 rounded-full">{skill.name}</p>
                        </div>    
                    :   null 
            }
        </div>
    )
}

export default Skill