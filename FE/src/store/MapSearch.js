import { getAxios, postAxios, deleteAxios } from './AxiosCall';
import { instance } from './AxiosCall';

export const fetchAllMapAPI = () => {return instance.get('/map/all')}
export const AddMyLocation = (userid?, x,y) => {return instance.post()} // 등록할 위치 x,y 좌표 데이터베이스에 추가 
export const getMyLocation = (userid) => {return instance.get()} // 내 계정의 등록된 위치 좌표 가져오기 -> {title, x, y} 반환 ex. {수원영통, 123.33, 2324.33}