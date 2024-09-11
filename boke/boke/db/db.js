module.exports = db
const {DBHOST,DBPORT,DBNAME} = require('../config/config')
function db(success,unsuccess)
{
if(typeof unsuccess !== 'function')
{ unsuccess = ()=>{
  console.log('连接失败')
}
}

  const mongoose = require('mongoose');

  //设置 strictQuery 为 true
  mongoose.set('strictQuery', true);
  
  //3. 连接 mongodb 服务                        数据库的名称
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);
  
  //4. 设置回调
  // 设置连接成功的回调  once 一次   事件回调函数只执行一次
  mongoose.connection.once('open', () => {
    success()
  })
  
  // 设置连接错误的回调
  mongoose.connection.on('error', () => {
    unsuccess()
  });
  
  //设置连接关闭的回调
  mongoose.connection.on('close', () => {
    console.log('连接关闭');
  });
  
}