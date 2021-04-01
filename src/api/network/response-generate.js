import { Response } from '../../Modals'

export const generateResponse = async (response) => {

    const error = response.success ? '':response.message
    const responseData = new Response(
        response.message,
        response.status,
        response.data,
        response.success,
        error
    );
    return responseData;
}
