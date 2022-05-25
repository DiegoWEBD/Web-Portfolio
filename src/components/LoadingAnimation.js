const LoadingAnimation = ({ bg_color, size }) => {

    const styles = {
        width: `${ size ? size : "40px" }`,
        height: `${ size ? size : "40px" }`,
        border: `4px solid ${bg_color}`,
        borderBottom: '4px solid #1d4ed8',
        borderRadius: '50%',
    }

    return(
        <div style={styles} className='animate-spin' />
    )
}

export default LoadingAnimation