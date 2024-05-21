
export const useBaseURL = async () => {
    const dataBaseURL = {
        baseURL:"http://localhost:8008/api/",
        // baseURL:"https://admin.thegioidilac.shop/api/",

        baseURLImage:""
    }
    return useState('dataBaseURL', () => dataBaseURL)
}