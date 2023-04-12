import { getAxios, postAxios, deleteAxios } from './AxiosCall';
import { instance } from './AxiosCall';

export const fetchAllMapAPI = () => {return instance.get('/map/all')}