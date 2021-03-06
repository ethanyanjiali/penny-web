import axios from 'axios';
import { API_HOST } from '../config';

const request = axios.create({
  baseURL: API_HOST,
  contentType: 'application/json;charset=utf-8',
});

export default request;
