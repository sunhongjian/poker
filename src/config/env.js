/**
 * 配置编译环境和生产环境
 */
let socketUrl = '';
if (process.env.NODE_ENV === 'development') {
  socketUrl = 'localhost:3000';
}

export default{
  socketUrl,
};
