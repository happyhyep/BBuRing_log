import { getAxios, postAxios, deleteAxios } from './AxiosCall';
import { instance } from './AxiosCall';



export const registerUser = (data) => {return instance.post('/user/register', data)}
export const loginUser = (userIdPw) => {return instance.post('/user/login', userIdPw)}

//현재 유저의 전체 정보를 반환합니다

export const getCurrentUserInfo = () => getAxios('/user/my_profile/info');