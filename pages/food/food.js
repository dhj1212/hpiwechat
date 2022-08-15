// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    foodList:[],
    page:1,
    pageSize:10,
    total:0,
    isloading:false//是否请求数据，防止重复多次请求数据
  },

  getFoodList(cb){
    wx.showLoading({
      title: '数据加载中',
    })
    this.setData({isloading : true});
    var foods=[{id:1,name:"红枣粥",phone:"13545654567",address:"浣花西路43号",image:"/images/food/1.jpg",businessHous:"10:00-22:00"},
    {id:2,name:"酸菜鱼",phone:"18934234687",address:"荔胜广场4楼404铺",image:"/images/food/2.jpg",businessHous:"10:30-22:30"},
    {id:3,name:"金针菇",phone:"18876542343",address:"东漖北路193号",image:"/images/food/3.jpg",businessHous:"11:00-22:00"},
    {id:4,name:"鱼香肉丝",phone:"13357654567",address:"茶窖路",image:"/images/food/4.jpg",businessHous:"10:00-22:00"},
    {id:5,name:"红枣粥",phone:"13545654567",address:"芳村花园",image:"/images/food/1.jpg",businessHous:"10:00-22:00"},
    {id:6,name:"红枣粥",phone:"13545654567",address:"浣花西路43号",image:"/images/food/2.jpg",businessHous:"10:00-22:00"},
    {id:7,name:"红枣粥",phone:"13545654567",address:"浣花西路43号",image:"/images/food/3.jpg",businessHous:"10:00-22:00"},
    {id:8,name:"红枣粥",phone:"13545654567",address:"浣花西路43号",image:"/images/food/4.jpg",businessHous:"10:00-22:00"},
    {id:9,name:"红枣粥",phone:"13545654567",address:"浣花西路43号",image:"/images/food/1.jpg",businessHous:"10:00-22:00"},
    {id:10,name:"红枣粥",phone:"13545654567",address:"浣花西路43号",image:"/images/food/2.jpg",businessHous:"10:00-22:00"},
    {id:1,name:"红枣粥",phone:"13545654567",address:"浣花西路43号",image:"/images/food/3.jpg",businessHous:"10:00-22:00"},
    {id:1,name:"红枣粥",phone:"13545654567",address:"浣花西路43号",image:"/images/food/4.jpg",businessHous:"10:00-22:00"}];
    this.setData({
      foodList:[...this.data.foodList,...foods],//原有的和新的数据合并
      total:this.data.total+10
    });
    //网络请求
    /** 
    wx.request({
      url: 'url',
      method:'GET',
      data:{
        _page:this.data.Page,
        _limit:this.data.pageSize
      },
      success :(res) =>{
        this.setData({
          foodList:[...this.data.foodList,...foods],
          total:this.res.total
        });
      },
      complete :() => {
        wx.hideLoading();
        this.setData({isloading : false});
        ////回调函数cb处理关闭下拉刷新窗口,如果cb在函数调用的时候传入了则执行cb回调函数
        cb && cb()
        wx.stopPullDownRefresh()
      }
    })
    */
   
    //隐藏Loading
    wx.hideLoading()
    this.setData({isloading : false});
     ////回调函数cb处理关闭下拉刷新窗口,如果cb在函数调用的时候传入了则执行cb回调函数
     cb && cb()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query:options  //接收参数
    });
    this.getFoodList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //动态设置页面title
    wx.setNavigationBarTitle({
      title: this.data.query.name, //从传入的参数中获取name 
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    //下拉重新刷新数据
    this.setData({
      foodList:[],
      page:1,
      pageSize:10,
      total:0,
    })
    //重新发起请求获取数据
    this.getFoodList(() =>{
       //关闭下拉刷新窗口
      wx.stopPullDownRefresh()
    });
   
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
     //另外需要判断所有数据加载完成后不在加载数据，条件是page*pageSize>=total
     if(this.data.Page * this.data.pageSize >= this.data.total){
        return wx.showToast({
          title: '数据加载完成！',
          icon: 'none'
        })
    }
    if (this.data.isloading) return ;
   
    this.setData({
      page:this.data.Page+1
    });
    this.getFoodList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})