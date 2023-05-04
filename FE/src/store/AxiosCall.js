import axios from 'axios';

export const instance = axios.create({
    baseURL : 'http://localhost'
})

export const getAxios = (endPoint, data = {}, config = {}) =>
    axios({
        url: `http://localhost${endPoint}`,
        method: 'get',
        withCredentials: true,
        data: data,
        ...config,
    });

export const postAxios = (endPoint, data = {}, config = {}) =>
    axios({
        url: `http://localhost${endPoint}`,
        method: 'POST',
        withCredentials: true,
        data: data,
        ...config,
    });

export const deleteAxios = (endPoint) =>
    axios({
        url: `http://localhost${endPoint}`,
        method: 'DELETE',
        withCredentials: true,
    });


// // 사용예시
// getAxios('/user/list').then((res) => {
//     console.log(res);
// });

// postAxios('/user/register', {
//     motto: 'string',
//     nickname: 'string',
// }).then((res) => {
//     console.log(res);
// });