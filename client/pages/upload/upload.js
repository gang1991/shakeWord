// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    hide: false,
    isUpLoad: true,
    isVideo: true,
    src: '',
    videoSrc: ''
  },
  showVideo: function() {
    this.setData({
      isVideo: false
    })
  },
  startRecord() {
    this.setData({
      show: false,
      hide: false
    })
    this.ctx.startRecord({
      timeoutCallback: (res) => {
        this.setData({
          show: true,
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
        console.log(this.data.videoSrc)
      },
      success: () => {
        console.log('startRecord')
      }
    })
  },
  stopRecord() {
    this.setData({
      show: true,
      hide: true
    })
    this.ctx.stopRecord({
      success: (res) => {
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
        console.log(this.data.videoSrc)
      }
    })
  },
  save: function(e) {
    wx.setStorageSync('videoSrc', this.data.videoSrc)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext()
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