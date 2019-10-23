// client/pages/search/search.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word:'',
    wordData: [],
    isSelect: false
  },
  inp: function(e) {
    this.setData({
      word: e.detail.value
    })
    var url = config.service.search
    var data = { word: this.data.word}
    this.doRequest(url,data)
  },
  out: function() {
    wx.switchTab({
      url: '../index/index'
    })
  },
  blur: function() {
    this.setData({
      isSelect:false
    })
  },
  wordTap: function(e) {
    console.log(e)
    this.setData({
      word: e.target.dataset.word,
      isSelect: !this.data.isSelect
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  doRequest: function (url, data) {
    // util.showBusy('请求中...')
    var that = this
    var options = {
      url: url,
      method: 'get',
      login: true,
      data: data,
      success(result) {
        // util.showSuccess('请求成功完成')
        // console.log('request success', result)
        that.setData({
          wordData: result.data.data,
          isSelect: true
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    }
    if (this.data.takeSession) {  // 使用 qcloud.request 带登录态登录
      qcloud.request(options)
    } else {    // 使用 wx.request 则不带登录态
      wx.request(options)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})