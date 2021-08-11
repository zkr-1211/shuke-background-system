import RequestInterceptors from './interceptors/request';
import ResponseInterceptors from './interceptors/response';
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 8000
});

RequestInterceptors(instance);
ResponseInterceptors(instance);

export default instance;