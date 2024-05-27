import BaseServices from "../../core/base-services";
import { ApiConfig } from "../../core/base-services/model";

const baseServices = new BaseServices();

export const getServerSideFakeFtnRromise = () => {
    const config: ApiConfig = {
        baseConfig: {
            // baseURL: 'https://run.mocky.io/v3/bde86be9-d85f-4a71-a1ac-aaa21a426c65',
            baseURL: 'https://66504ac3ec9b4a4a60317b34.mockapi.io/contain',
        },
        url: '',
        renderType: 'ISR'
    }

    return baseServices.get(config)
};

export const postServerSideFakeFtnRromise = (body: any) => {
    const config: ApiConfig = {
        baseConfig: {
            baseURL: 'https://jsonplaceholder.typicode.com',
        },
        url: 'posts',
        body,
    }

    return baseServices.post(config)
};

export const putServerSideFakeFtnRromise = (body: any, id: string) => {
    const config: ApiConfig = {
        baseConfig: {
            baseURL: 'https://jsonplaceholder.typicode.com',
        },
        url: `posts/${id}`,
        body,
    }

    return baseServices.put(config)
};

export const deleteServerSideFakeFtnRromise = (id: string) => {
    const config: ApiConfig = {
        baseConfig: {
            baseURL: 'https://jsonplaceholder.typicode.com',
        },
        url: `posts/${id}`,
    }

    return baseServices.delete(config)
};