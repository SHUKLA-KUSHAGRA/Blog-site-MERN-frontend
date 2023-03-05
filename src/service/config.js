export const API_NOTIFICATION_MSG = {
    loading : {
        title : 'Loading...',
        message : 'Data is being loaded , Please Wait!!!'
    },
    success : {
        title : 'Success',
        message : 'Data successfully loaded'
    },
    responseFailure : {
        title : 'Error',
        message : 'An error occured while fetching response from server. Please try again !!!'
    },
    requestFailure : {
        title : 'Error',
        message : 'An error occured while parsing request data'
    },
    networkError : {
        title : 'Error',
        message : 'Unable to connect with the server. Please check internet connection and try again !!...'
    },
};

export const SERVICE_URLS = {
    userSignup : {url : '/signup' , method : 'POST'}
}