import axios from 'axios';
import {$$Types} from '../global/types/fetch';
import Cookies from 'js-cookie';

const $$: $$Types = {} as $$Types;

// axios.defaults.baseURL = 'https://api.example.com';

// 全局请求头部
function writeHeader() {
  axios.defaults.headers.common['x-auth-app'] = Cookies.get('x-auth-app');
  axios.defaults.headers.common['x-auth-token'] = Cookies.get('x-auth-token');
}

function fetchLog(url, params, res) {

  if (process.env.NODE_ENV === 'development') {
    console.log('================');
    console.log('当前请求路径', url);
    console.log('当前请求时间', +new Date());
    console.log('当前请求参数', params);
    console.log('当前请求结果', res);
    console.log('================');
  }
}

$$.get = async (url: string, params = null) => {
  writeHeader();
  const res = await axios.get(url, params);
  fetchLog(url, params, res);
  return res;
}

$$.post = async (url: string, params: any) => {
  writeHeader();
  const res = await axios.post(url, params);
  fetchLog(url, params, res);
  return res;
}

export default $$;