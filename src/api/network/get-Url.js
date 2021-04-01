import Constants from '../../Constants/appConstants/Global';

export const getUrl = (type) => {
    let url = '';

    switch (type) {
        case 'login':
            return url = `${Constants.URL}/user/login`;
        case 'signup':
            return url = `${Constants.URL}/user/signup`
        case 'fileUpload':
            return url = `${Constants.URL}/fileUpload/upload`
        case 'forgetPassword':
            return url = `${Constants.URL}/user/login`
        case 'request':
            return url = `${Constants.URL}/request/newRequest`
        case 'getRequest':
            return url = `${Constants.URL}/request/getRequest`
        case 'getAllUserRequest':
            return url = `${Constants.URL}/request/getRequest/user`
        case 'getNearBy':
            return url = `${Constants.URL}/driver/getNearByDriver/`
        case 'createTrip':
            return url = `${Constants.URL}/trip/addTrip`
        case 'getTrip':
            return url = `${Constants.URL}/trip/getTrip/user`
        case 'completeTrip':
            return url = `${Constants.URL}/trip/completeTrip`
        case 'addCard':
            return url = `${Constants.URL}/card/registerPaymentCard`
        case 'getCard':
            return url = `${Constants.URL}/card/getPaymentCard`
        case 'deletePaymetCard':
            return url = `${Constants.URL}/card/deletePaymentCard`
        case 'makeTransaction':
            return url = `${Constants.URL}/Transaction/makeTransaction`
        case 'getTransaction':
            return url = `${Constants.URL}/Transaction/getTransaction`
        default:
            break;
    }
};
