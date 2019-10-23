// client/pages/login/login.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonText: '登录',
    text:'',
    password: '',
    show: true,
    type: '',
    name:''
  },
  // 注册
  registered: function () {
    this.setData({
      show: false,
      buttonText: '注册',
      text: '',
      password: '',
      type: '',
      name: ''
    })
  },
  inputChange: function(e) {
    console.log(e)
    if (e.currentTarget.dataset.name === 'text') {
      this.setData({
        text: e.detail.value
      })
    } else if (e.currentTarget.dataset.name === 'name') {
      this.setData({
        name: e.detail.value
      })
    } else if (e.currentTarget.dataset.name === 'password') {
      this.setData({
        password: e.detail.value
      })
    }
  },
  submit: function() {
    if(this.data.buttonText === '登录') {
      var obj = {
        mobile: this.data.text,
        password: this.data.password,
        jsCode: wx.getStorageSync('code')
      }
      var url = config.service.loginUrl
      this.doRequest(url, obj)
    } else {
      var obj = {
        mobile: this.data.text,
        password: this.data.password,
        jsCode: wx.getStorageSync('code'),
        role: this.data.type,
        name: this.data.name
      }
      console.log(123456)
      var url = config.service.signUp
      this.doRequest(url, obj)
    }
  },
  doRequest: function (url1, data1) {
    util.showBusy('请求中...')
    var that = this
    // var obj = {

    // }
    var options = {
      url: url1,
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: data1,
      login: true,
      success(result) {
        util.showSuccess('请求成功完成')
        console.log('request success', result)
        that.setData({
          requestResult: JSON.stringify(result.data)
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
  radioChange: function(e) {
    this.setData({
      type: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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