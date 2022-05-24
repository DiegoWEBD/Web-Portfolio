import { motion } from 'framer-motion'
import ProjectsContainer from '../ProjectsContainer'

const Projects = ({ cache, setCache }) => {

    return (
        <motion.div 
            className="mx-auto mb-10"
            initial={ { x: "100%", transition: { duration: 0.2 } } }
            animate={ { x: 0, transition: { duration: 0.2 } } }
        >
            <ProjectsContainer cache={cache} setCache={setCache} />
        </motion.div>
    )
}

export default Projects