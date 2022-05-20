const ErrorMessage = ({ children }) => {

    return(
        <p className='text-red-500 text-xs mt-3 font-semibold'>
            { children }
        </p>
    )
}

export default ErrorMessage