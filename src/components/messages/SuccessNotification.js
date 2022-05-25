const SuccessNotification = ({ children }) => {

    return(
        <p className='bg-green-500 text-white font-semibold tracking-wider border rounded-md border-green-600 shadow-md shadow-green-600/70 text-center py-1'>
            { children }
        </p>
    )
}

export default SuccessNotification