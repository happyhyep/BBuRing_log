import { getAxios, postAxios, deleteAxios } from './AxiosCall';
import { instance } from './AxiosCall';



export const uploadPost = (position, formdata) => {return instance.post('/upload', position, formdata)} //작성한 formdata(이미지, description)를 해당 위치와 함께 데이터베이스에 저장