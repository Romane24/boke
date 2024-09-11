var express = require('express');
var router = express.Router();
const UserModel = require('../model/UserModel')
const ArticleModel = require('../model/ArticleModel')
const CommentModel = require('../model/CommentModel')


//写入用户
/* router.get('/', function(req, res, next) {
  UserModel.create({
    username:'faker',
    password:'12345',
    nickname:'李哥',
    headImgurl:
    'https://cn.bing.com/images/search?view=detailV2&ccid=9pbHDupT&id=1A8BC7E02E1C3BDF6A546A584AFB77A3386360DA&thid=OIP.9pbHDupTvVTpH_9bZdjQagHaHa&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.f696c70eea53bd54e91fff5b65d8d06a%3frik%3d2mBjOKN3%252b0pYag%26riu%3dhttp%253a%252f%252fimg.touxiangwu.com%252f2020%252f3%252f3QRfqa.jpg%26ehk%3d263ZRDleUxN%252fG6wux14UWLQ7Vp5%252fd2KdU5l1bTUhHJc%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=480&expw=480&q=%e5%a4%b4%e5%83%8f&simid=607986397252441215&FORM=IRPRST&ck=8B06085607C41D08500BEBF5C1DE8A58&selectedIndex=4&itb=0'
  }).then(data=>{
    res.send('写入成功')
  }).catch(err=>{
    console.log('写入失败')
  })
}); */

//写入文章
/* router.get('/art', function(req, res, next) {
  ArticleModel.create({
    title:'今天天气很好啊',
    content:'我想要在下午的时候出去玩',
    author:'66d7c126974cd2a9cad65ebc',
  }).then(data=>{
    res.send('写入成功')
  }).catch(err=>{
    console.log('写入失败')
  })
}); */

//查询文章
/* router.get('/find', function(req, res, next) {
  ArticleModel.find().populate('author',{username:1,_id:0}).populate('coms').then(data=>{
    res.send(data)
  }).catch(err=>{
    console.log('查询失败')
    console.log(err)
  })
}); */


//评论
/* router.get('/comment',function(req,res){
  CommentModel.create({
    content:'说得好',
    article_id:'66d7c4e81a3ccf400c057ce1',
    reply_user_id:'66d7c127974cd2a9cad65ebe'
  }).then(data=>{
    res.send(data)
  }).catch(err=>{
    console.log(err)
  })
  
}) */


//查询评论
/* router.get('/comment2',function(req,res){
  CommentModel.find().populate('article_id',{title:1}).then(data=>{
    res.send(data)
  }).catch(err=>{
    console.log(err)
  })
  
}) */

//注册
router.post('/reg',(req,res)=>{
 let {username,password,nickname,headImgurl} = req.body
 if(username&&password&&nickname&&headImgurl)
 {
  UserModel.create(req.body).then(data=>{
    res.json({
      code:'001',
      msg:'注册成功',
      data:data
    })
  }).catch(err=>{
      res.json({
        code:'101',
        msg:'注册失败',
        data:err
      })
    })
 }
 else{
  res.json({
    code:'102',
    msg:'注册失败,个人信息有误',
    data:null
  })
 }
})





//登录
router.get('/login',(req,res)=>{
  let {username,password} = req.query
  UserModel.find({username,password}).then(data=>{
    if(data == null){
      console.log(data)
      res.json({
        code:'002',
        msg:'登录成功',
        data:data
    })
    }else
    {
      console.log(data)
      res.json({
        code:'104',
        msg:'登陆失败，账号密码错误',
        data:null
      })
    }
     
  }).catch(err=>{
    res.json({
      code:'103',
      msg:'登陆失败数据库查询失败',
      data:null
    })
  })

})
module.exports = router;
