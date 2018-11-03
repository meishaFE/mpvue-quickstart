import { BASE_URL } from '@/config/api';
import URLSearchParams from 'url-search-params';

const handleNoLogin = () => {
  wx.removeStorageSync('auth');
  const url = '/pages/authorize/index';
  wx.reLaunch({
    url
  });
};

const Fly = require('flyio/dist/npm/wx');

export const fly = new Fly();

// 设置超时
fly.config.timeout = 0;
// 设置请求基地址
fly.config.baseURL = BASE_URL;

// 添加请求拦截器
fly
  .interceptors
  .request
  .use((request) => {
    const params = new URLSearchParams();
    params.append('data', JSON.stringify(request.body) || '');
    request.body = params.toString();
    request.headers['Auth'] = wx.getStorageSync('auth') || '';
    request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return request;
  });

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly
  .interceptors
  .response
  .use(res => {
    if (!res || !res.data || typeof res.data !== 'object') {
      return Promise.reject(new Error('Request response is empty'));
    }
    const data = res.data;
    switch (data.code) {
      case -1001:
        handleNoLogin();
        return Promise.reject(new Error('You are not logged in'));
    }
    if (data.code !== 0) {
      // 处理后端返回的 code 不为 0 的情况
      return Promise.reject(new Error(data.msg));
    } else {
      // 正常返回
      return data;
    }
  }, err => {
    // 发生网络错误后会走到这里
    return Promise.reject(new Error(`Request failed with status code ${err.status}`));
  });
