import { getAxios, postAxios, deleteAxios } from './AxiosCall';
import { instance } from './AxiosCall';



export const registerUser = (data) => {return instance.post('/user/register', data)}
export const loginUser = (userIdPw) => {return instance.post('/user/login', userIdPw)}


export const fetchAllUser = () => getAxios('/user/fetch')