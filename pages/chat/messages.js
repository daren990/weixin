// pages/demo1/one1.js
var app = getApp();
Page({
  data:{
    userInfo:{},
    imageshow:true,
    btnshow:false,
    valueInput:"",
    addTop:["1"],
    message:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
       console.log(userInfo);//用户信息
      that.setData({
        userInfo:userInfo
      })
    });
    //当前页面标题改变
    wx.setNavigationBarTitle({
      title: '房卡密聊'
    });
    
  },
  addfocus: function(){
    // 获取焦点触发
    this.setData({
      imageshow:false,
      btnshow:true
    })
  },
  blur: function (e){
    //失去焦点时触发
    if( e.detail.value == "" ){
      this.setData({
        imageshow:true,
        btnshow:false
      })
    }else{
      this.setData({
        valueInput:e.detail.value
      })
    }
  },
  submit:function(e){
    //点击发送信息
    let datar = this.data;
    let addmessage = datar.message;
    let addValue = datar.valueInput;
    let scrval = parseInt(datar.addTop) + 1;
    let nextTop = scrval.toString();
    addmessage.push({
      text2:addValue,
      mesId:nextTop
    });
    this.setData({
        message:addmessage,
        valueInput:"",
        addTop:nextTop
    });
 },
 onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onShareAppMessage: function () {
    return {
      title: '房卡兔',
      path: '/pages/chat/messages?id=123'
    }
  }
})