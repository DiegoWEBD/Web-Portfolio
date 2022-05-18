import Skills from '../Skills'
import ProfileInfo from '../ProfileInfo'

const About = ({ cache }) => {

    return(
        <div className="container md:bg-zinc-900 mb-20 sm:mb-10 md:flex mx-auto rounded-xl md:shadow-xl md:shadow-black">
            <div className="bg-gradient-to-br from-purple-800 to-blue-800 md:w-1/3 rounded-xl text-slate-300 pt-1 md:pt-0 pb-8 md:pb-0 shadow-xl shadow-black md:shadow-none">
                <ProfileInfo />
            </div>
            
            <div className="bg-zinc-900 md:w-2/3 p-6 text-slate-200 mt-10 md:mt-0 rounded-xl shadow-xl shadow-black md:shadow-none">
                <p className="text-2xl lg:text-3xl font-bold mb-8 text-center">Mis Skills</p>       
                <Skills cache={cache} />
            </div>
        </div>
    )
}

export default About