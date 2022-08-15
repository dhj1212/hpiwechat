// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperlist:[
      {id:1,image:"../../images/banner01.jpg",link:""},
      {id:2,image:"../../images/banner02.jpg",link:""},
      {id:3,image:"../../images/banner03.jpg",link:""}
    ],
    gridList:[]
  },
  getGridList(){
    this.setData({gridList:[
      {id:1,name:"美食",icon:"../../images/gg/1.png",url:"/pages/food/food?id=1&&name=美食"},
      {id:2,name:"VantWeapp",icon:"../../images/gg/2.png",url:"/pages/vantWeapp/vantWeapp"},
      {id:3,name:"功能3",icon:"/images/gg/3.png",url:"/pages/food/food?id=3&&name=功能3"},
      {id:4,name:"功能4",icon:"/images/gg/4.png",url:"/pages/food/food?id=4&&name=功能4"},
      {id:5,name:"功能5",icon:"/images/gg/5.png",url:""},
      {id:6,name:"功能6",icon:"/images/gg/7.png",url:""},
      {id:7,name:"功能7",icon:"/images/gg/6.png",url:""},
      {id:8,name:"功能8",icon:"/images/gg/8.png",url:""},
      {id:9,name:"功能9",icon:"/images/gg/9.png",url:""},
    ]})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getGridList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})