
export const useBaseURL = async () => {
    const dataBaseURL = {
        baseURL: "http://localhost:8008/api/",
        // baseURL:"https://admin.thegioidilac.shop/api/",

        baseURLImage: "https://images.samsung.com/"
        // baseURLImage:"https://admin.thegioidilac.shop/api/",

    }
    return useState('dataBaseURL', () => dataBaseURL)
}