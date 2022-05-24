const LoadingAnimation = ({ bg_color }) => {

    const styles = {
        width: 38,
        height: 38,
        border: `4px solid ${bg_color}`,
        borderBottom: '4px solid #1d4ed8',
        borderRadius: '50%',
    }

    return(
        <div style={styles} className='animate-spin' />
    )
}

export default LoadingAnimation