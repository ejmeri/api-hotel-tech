export interface ApiReturn<T> {
    return: T;
    success: boolean;
    errorType: any;
    error: string;
}

const getResultOrError = <T>(response: any): T => {

    if (!response)
        throw Error('response is null');

    const data = response.data;

    if (!data)
        throw Error('data is null');

    const apiReturn = data as ApiReturn<T>;

    if (!apiReturn)
        throw Error('apiReturn is null');

    if (apiReturn.success) {
        return apiReturn.return;
    }
    else {
        throw new Error(apiReturn.error);
    }
}

export { getResultOrError }