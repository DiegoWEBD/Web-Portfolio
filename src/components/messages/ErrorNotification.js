const ErrorNotification = ({ children }) => {

    return(
        <p className='bg-red-500 text-white tracking-wide font-semibold rounded-md border border-red-600 shadow-md shadow-red-500/70 text-center py-1'>
            { children }
        </p>
    )
}

export default ErrorNotification