// pages/demo1/one1.js
var app = getApp();
Page({
  data:{
    name:"聊天内容!!!",
    userInfo:{},
    message:[
      { text1:"别人别人别人别人别人别人别人别人别人",
        text2:"自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己"
      },
      { text1:"别人",
        text2:"自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己"
      },
      { text1:"别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人",
        text2:"自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己"
      }
      ,{ text1:"别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人",
        text2:"自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己"
      }
      ,{ text1:"别别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人人",
        text2:"自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己自己"
      }
      ,{ text1:"别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人别人",
        text2:"自己自己自己自己自己自己自己自己自己自己自己"
      }
    ]
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
      title: '当前页面标题改变'
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
  }
})