const LoadingAnimation = ({ bg_color }) => {

    const style = `h-10 w-10 border-[4px] border-${bg_color} border-t-blue-500 rounded-full animate-spin`
    console.log(style)

    return(
        <div className={style} />
    )
}

export default LoadingAnimation