
export const useBaseURL = async () => {
    const data = {
        baseURL:"http://localhost:8008/api/",
        baseURLImage:""
    }
    return useState('dataBaseURL', () => data)
}