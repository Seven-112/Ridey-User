import { getUrl } from './get-Url';
import { generateResponse } from './response-generate';
import { dataURItoBlob } from '../../utils/MulitPart';

export const createNetworkRequest = async (method, type, data) => {
    const response = await fetch(getUrl(type), {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log(response)

    const parsedResponse = await response.json();
    const responseData = await generateResponse(parsedResponse);
    return responseData;
}
export const createFormData = async (photo) => {
    console.log("inside form Data", photo)
    const formData = new FormData();
    const modifiedData = Platform.OS === "android" ? photo.file : photo.file;
    formData.append("file",{uri:modifiedData,name:'profile.jpg',type:'image/jpeg'})
  
    return formData;
};
// const formData = new FormData()
// console.log(profileUrl)
// formData.append("file", { uri: profileUrl, name: 'image.jpg', type: 'image/jpeg' })
// console.log(profileUrl)
// return async dispatch => {
//     const response = await fetch(`${VARIABLES.serverUrl}/storage`,
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//             body: formData
//         }
//     );
export const createFileUploadNetworkRequest = async (method, type, data) => {
    const file = await createFormData(data)
    const response = await fetch(getUrl(type), {
        method: method,
        headers: {
             'Content-Type': 'multipart/form-data',
        },
        body: file
})
const parsedResponse = await response.json();
const responseData = await generateResponse(parsedResponse);
return responseData;
}
