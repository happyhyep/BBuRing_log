import { getAxios, postAxios, deleteAxios } from './AxiosCall';
import { instance } from './AxiosCall';



export const uploadPost = (userid, groupid, position, star, formdata) => {return instance.post('/upload/post', userid, groupid, position, star, formdata)} //작성한 formdata(이미지, description)를 해당 위치와 함께 데이터베이스에 저장
export const fetchAllPosts = (position) => {return instance.get('/posts/all', position)} //position마다 저장된 모든 post들 fetch -> index, star, formdata(image, description) 반환