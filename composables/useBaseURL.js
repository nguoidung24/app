
export const useBaseURL = async () => {
    const dataBaseURL = {
        baseURL:"http://localhost:8008/api/",
        baseURLImage:""
    }
    return useState('dataBaseURL', () => dataBaseURL)
}