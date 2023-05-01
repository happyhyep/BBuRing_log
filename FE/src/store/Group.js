import { getAxios, postAxios, deleteAxios } from './AxiosCall';
import { instance } from './AxiosCall';


export const createGroup = (name, leader) => {return instance.post('/user/group/create', name, leader)} 
export const requestGroup = (userid) => {return instance.post('/user/group/request', userid)}
export const acceptGroup = (userid) => {return instance.post('/user/group/accept', userid)}

export const fetchAllGroup = () => getAxios('/user/group/fetch')
