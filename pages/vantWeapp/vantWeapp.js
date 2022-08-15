// pages/vantWeapp/vantWeapp.js
import { login } from "../../utils/api";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  logintest(){
    login({loginid:"251609",age:12}).then(res=>{
      console.log(res);
    })
  },

  logintest1(){
    wx.request({
      method: "POST",
      url: "http://localhost:8088/logintest",
      data: {loginid:"251609"},
      header: {
          //'content-type': 'application/x-www-form-urlencoded'
          'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
          //resolve(res.data) // 将请求成功后得到的数据返回出去 用then方法接收到数据
          console.log(res);
      },
      fail(err) {
        console.log("err",err);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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