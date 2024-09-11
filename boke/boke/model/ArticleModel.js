const mongoose = require('mongoose');
const Schema = mongoose.Schema
const UserModel = require('./UserModel')
//创建文档结构
let ArticleSchema = new mongoose.Schema({
  title:String,
  content:String,
  author: { type: Schema.Types.ObjectId, ref: 'user' }  ,
  tag:String,
  views:{
    type:Number,
    default:0
  }
},
{
  timestamps:true
});
//创建文档对象模型
ArticleSchema.virtual('coms',{
  ref:'comment',
  localField:'_id',
  foreignField:'article_id',
  justOne:false,
  /* count:true  */
})
ArticleSchema.set('toObject',{virtuals:true})
ArticleSchema.set('toJSON',{virtuals:true})
let ArticleModel = mongoose.model('article', ArticleSchema); 

module.exports = ArticleModel

