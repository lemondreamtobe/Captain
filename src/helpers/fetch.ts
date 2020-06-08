import axios from 'axios';
import {$$Types} from '../global/types/fetch';
import Cookies from 'js-cookie';

const $$: $$Types = {} as $$Types;

// axios.defaults.baseURL = 'https://api.example.com';

function writeHeader() {
  axios.defaults.headers.common['x-auth-app'] = Cookies.get('x-auth-app');
  axios.defaults.headers.common['x-auth-token'] = Cookies.get('x-auth-token');
}

$$.get = (url: string, params = null) => {
  writeHeader();
  return axios.get(url, params);
}

$$.post = (url: string, params: any) => {
  writeHeader();
  return axios.post(url, params);
}

export default $$;