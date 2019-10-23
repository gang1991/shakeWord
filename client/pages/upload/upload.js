// pages/upload/upload.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    hide: false,
    isUpLoad: true,
    isVideo: true,
    isProgress: false,
    durationNum: 300,
    percentNum:100,
    startTime:'',
    width:0,
    endTime: '',
    src: '',
    videoSrc: '',
    setTimeoutId: '',
    isTeacher: true,
    isStudentVideo: true,
  },
  showVideo: function() {
    this.setData({
      isVideo: false
    })
  },
  student_video: function() {
    this.setData({
      isStudentVideo:false
    })
    this.doRequest()
  },
  doRequest: function (url, data) {
    util.showBusy('请求中...')
    var that = this
    // var obj = {

    // }
    var options = {
      url: url,
      data:data,
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      login: true,
      success(result) {
        if (result.data.code=== 20003) {
          wx.navigateTo({
            url: '../login/login',
          })
        }
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
  startRecord() {
    this.ctx.startRecord({
      timeoutCallback: (res) => {
        clearInterval(this.data.setTimeoutId)
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath,
          isVideo: false,
          
        })
      },
      success: () => {
        var startTime = new Date().getTime()
        this.setData({
          show: false,
          hide: false,
          isProgress: true,
          startTime: startTime,
          durationNum: 300,
          percentNum: 100,
        })
        var that = this
        // function setWidth() {
          this.data.setTimeoutId = setInterval(function () {
            var widthNum = parseInt(that.data.width) + 1
            console.log(widthNum)
            that.setData({
              width: widthNum + '%'
            })
            // setWidth()
          }, 300)
        }
        // setWidth()
      // }
    })
  },
  stopRecord() {
    this.setData({
      show: true,
      hide: true
    })
    this.ctx.stopRecord({
      success: (res) => {
        var endTime = new Date().getTime()
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath,
          endTime: endTime
        })
        clearInterval(this.data.setTimeoutId)
        var time = Math.ceil((this.data.endTime - this.data.startTime)/1000/30*100)
        // console.log('time', time)
        this.setData({
          durationNum: 0,
          percentNum: time
        })
      }
    })
  },
  save: function(e) {
    this.setData({
      isUpLoad: false,
      isVideo:true
    })
    // wx.setStorageSync('videoSrc', this.data.videoSrc)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext()
    var url = config.service.loginWithCode
    var obj = {
      jsCode: wx.getStorageSync('code')
    }
    this.doRequest(url,obj)
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
    this.setData({
      show: true,
      hide: false,
      isUpLoad: true,
      isVideo: true,
      isProgress: false,
      durationNum: 300,
      percentNum: 100,
      startTime: '',
      width: 0,
      endTime: '',
      src: '',
      videoSrc: '',
      setTimeoutId: '',
      isTeacher: true,
      isStudentVideo: true,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
      this.setData({
        isUpLoad:true,
        isVideo: false
      })
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