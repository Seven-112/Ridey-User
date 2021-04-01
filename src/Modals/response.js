class Response{
    constructor(message,status,data,success,error){
        this.message = message;
        this.status =  status;
        this.data = data;
        this.success = success;
        this.error = error;
    }
}
export default Response;