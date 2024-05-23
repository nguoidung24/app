export const useProduct = async (id) => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    let data = null;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'getByGroupId',
            groupId: id
        })
    }

    await fetch(BASE_URL + 'Products', requestOptions)
        .then((response) => response.json())
        .then((response) => data = response);

    return useState(`product_${id}`, () => data)
}