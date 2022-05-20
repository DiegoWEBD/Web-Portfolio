const ErrorNotification = ({ children }) => {

    return(
        <p className='text-red-500 font-semibold border-2 rounded-md border-red-500 text-center py-1'>
            { children }
        </p>
    )
}

export default ErrorNotification