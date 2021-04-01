import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';
import SignUp from '../Components/SignUp';
import STORE from '../Store'


const SignUpScreen = (props) => {
    const dispatch = useDispatch();

    const signUp = (data) => dispatch(STORE.actions.actionSignUp(data));
    const clearError = ()=>dispatch(STORE.actions.clearError());
    const uploadImage = (data)=>dispatch(STORE.actions.actionFileUpload(data))
    const userError = useSelector(userSelectors.getErrors);
    const userStatus = useSelector(userSelectors.getStatus);
    const uploadData = useSelector(userSelectors.getUploadData);
    const uploadStatus = useSelector(userSelectors.getUploadStatus);
    const enhancedProps = {
        ...props,
        actions: {
            user: {
                signUp,
                clearError,
                uploadImage,
            }
        },
        userError,
        userStatus,
        uploadData,
        uploadStatus,
        navigation: props.navigation
    }

    return <SignUp {...enhancedProps} />
}
export default SignUpScreen;