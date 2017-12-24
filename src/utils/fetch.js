import axios from 'axios';
import { serviceUrl } from '../config/env';

export default function (method, api, data) {
  return axios({
    method: 'post',
    url: serviceUrl + api,
    data,
  });
}
