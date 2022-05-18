const Skill = ({ skill }) => {
    return (
        <div key={skill.name} className="text-slate-200 flex mb-3 p-2 mr-3 items-center border-2 border-indigo-700 rounded-xl">
            <div className="h-12 lg:h-14 mr-5">
                <img alt={ skill.name } className="h-full" src={ skill.logo_route } />
            </div>
            <p className="bg-indigo-700 text-lg lg:text-xl font-semibold py-1 px-3 rounded-full">{skill.name}</p>
        </div>
    )
}

export default Skill