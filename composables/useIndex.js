import { storeToRefs } from 'pinia'
import { useWebsiteStore } from '~/stores/website'

export const useSlider = async () => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    const websiteStore = useWebsiteStore()
    const { webData } = storeToRefs(websiteStore)
    let data = null;

    if (websiteStore.getWebData('listProducts') == null) {
        await fetch(BASE_URL + 'Banner')
            .then((response) => response.json())
            .then((response) => data = response);
        websiteStore.setWebData({ key: 'listProducts', value: data })
    }

    return useState('list', () => webData)
}

export const useHotProducts = async () => {
    const BASE_URL = (await (useBaseURL())).value.baseURL
    const websiteStore = useWebsiteStore()
    const { webData } = storeToRefs(websiteStore)
    let data = null;

    if (websiteStore.getWebData('listHotProducts') == null) {
        await fetch(BASE_URL + 'Outstanding')
            .then((response) => response.json())
            .then((response) => data = response);
        websiteStore.setWebData({ key: 'listHotProducts', value: data })
    }

    return useState('list', () => webData)
}