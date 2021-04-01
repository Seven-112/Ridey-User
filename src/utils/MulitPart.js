



export function dataURItoBlob(dataURI) {

    const length = dataURI.length
    const array = new Uint8Array(new ArrayBuffer(length))
    for (let i = 0; i < length; i++) array[i] = dataURI.charCodeAt(i)
    console.log("initial Array", array)

    return array
}