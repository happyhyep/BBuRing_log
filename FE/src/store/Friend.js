import { getAxios, postAxios, deleteAxios } from './AxiosCall';
import { instance } from './AxiosCall';



export const requestFriend = (data) => {return instance.post('/friend/request', data)}
export const acceptFriend = (data) => {return instance.post('/friend/accept', data)}