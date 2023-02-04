import {axiosInstance as axios} from './axiosInstance'

const GET_USER_BY_ID = (userId) => `/website/user/${userId}`;
const CREATE_NEW_USER = () => `website/user/create`;
const GET_ALL_ITEMS = () => `item/all`;

export const createNewUser = (userBody) => {
    return axios.post(CREATE_NEW_USER(), userBody);
}

export const getUserById = (userId) => {
    return axios.get(GET_USER_BY_ID(userId));
}

export const getAllItems = () => {
    return axios.get(GET_ALL_ITEMS());
}