const mongoose = require('mongoose');
//创建文档结构
let UserSchema = new mongoose.Schema({
  username:String,
  password:String,
  nickname:String,
  headImgurl:String
},
{
  timestamps:true
});
//创建文档对象模型
let UserModel = mongoose.model('user', UserSchema); //数据库会使用其复数

module.exports = UserModel













