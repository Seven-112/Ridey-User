export const getErrors = (state) => state.auth.error;
export const getLoginData = (state) => state.auth.loginData;
export const getUserId = (state) => state.auth.loginData.userId;
export const getStatus = (state) => state.auth.success;
export const getUploadData = (state) => state.auth.uploadData;
export const getUploadStatus = (state)=>state.auth.uploadStatus
// didTryAutoLogin:true,
// error:action.error,
// success:action.success