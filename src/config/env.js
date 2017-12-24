/**
 * 配置编译环境和生产环境
 */
let socketUrl = '';
let serviceUrl = '';
if (process.env.NODE_ENV === 'development') {
  socketUrl = 'localhost:3000';
  serviceUrl = 'http://localhost:3000/api';
}


export default{
  socketUrl,
  serviceUrl,
};
