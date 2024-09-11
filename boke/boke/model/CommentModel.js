const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CommentSchema = new Schema({
  content:String,
  article_id:{type: Schema.Types.ObjectId, ref:'article'},
  reply_user_id:{ type: Schema.Types.ObjectId,ref:'user'}
},{
timestamps:true
})
const CommentModel = mongoose.model('comment',CommentSchema)
module.exports = CommentModel