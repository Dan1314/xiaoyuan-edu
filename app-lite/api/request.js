import { API_BASE_URL } from '../config/index.js';

export function request(path, { method = 'GET', data } = {}) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: API_BASE_URL + path,
      method,
      data,
      header: { Authorization: 'Bearer ' + (uni.getStorageSync('access_token') || '') },
      success: (res) => (res.data && res.data.code === 0 ? resolve(res.data.data) : reject(res.data)),
      fail: reject,
    });
  });
}
