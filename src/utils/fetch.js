import axios from 'axios';
import config from '../config/env';

export default function (method, api, data) {
  console.log(data);
  const apiStr = api.charAt(0) === '/' ? api : `/${api}`;
  return new Promise((resolve) => {
    axios({
      method,
      url: config.serviceUrl + apiStr,
      params: data,
      data,
    }).then((response) => {
      resolve(response.data);
    });
  });
}
