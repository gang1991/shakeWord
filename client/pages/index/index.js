//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        userInfo:'',
        requestResult: '',
        index: 0,
        videoArr:[
          { id: 1, value: 'http://pz987tt4d.bkt.clouddn.com/1570867508136434.mp4', heartNum: 123, bool: true},
          { id: 2, value: 'http://pz987tt4d.bkt.clouddn.com/1570867419815774.mp4', heartNum: 123, bool: false},
          { id: 3, value: 'http://pz987tt4d.bkt.clouddn.com/1570867487606845.mp4', heartNum: 123, bool: false}
      //     { id: 4, value: 'http://pz987tt4d.bkt.clouddn.com/1570867430655098.mp4', heartNum: 123, bool: false},
      //     { id: 5, value: 'http://pz987tt4d.bkt.clouddn.com/1570867435515532.mp4', heartNum: 123, bool: false},
      // { id: 6, value: 'http://pz987tt4d.bkt.clouddn.com/1570867447146630.mp4', heartNum: 123, bool: false},
      //     { id: 7, value: 'http://pz987tt4d.bkt.clouddn.com/1570867454171993.mp4', heartNum: 123, bool: false},
      //     { id: 8, value: 'http://pz987tt4d.bkt.clouddn.com/1570867458822265.mp4', heartNum: 123, bool: false},
      //     { id: 9, value: 'http://pz987tt4d.bkt.clouddn.com/1570867473436493.mp4', heartNum: 123, bool: false},
      //     { id: 10, value: 'http://pz987tt4d.bkt.clouddn.com/1570867424768600.mp4', heartNum: 123, bool: false},
      //     { id: 11, value: 'http://pz987tt4d.bkt.clouddn.com/1570867487620628.mp4', bool: false},
      //     { id: 12, value: 'http://pz987tt4d.bkt.clouddn.com/1570867500102991.mp4', heartNum: 123, bool: false},
      //     { id: 13, value: 'http://pz987tt4d.bkt.clouddn.com/1570867414957628.mp4', heartNum: 123, bool: false},
      //     { id: 14, value: 'http://pz987tt4d.bkt.clouddn.com/1570867668662855.mp4', heartNum: 123, bool: false},
      //     { id: 15, value: 'http://pz987tt4d.bkt.clouddn.com/1570867676361642.mp4', heartNum: 123, bool: false},
      //     { id: 16, value: 'http://pz987tt4d.bkt.clouddn.com/1570867688883828.mp4', heartNum: 123, bool: false},
      //     { id: 17, value: 'http://pz987tt4d.bkt.clouddn.com/1570867699673064.mp4', heartNum: 123, bool: false},
      //     { id: 18, value: 'http://pz987tt4d.bkt.clouddn.com/1570867706500578.mp4', heartNum: 123, bool: false}
        ]
        // videoArr:[
        //   'http://pz987tt4d.bkt.clouddn.com/1570867414957628.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867419815774.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867424768600.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867430655098.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867435515532.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867447146630.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867454171993.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867458822265.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867473436493.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867487606845.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867487620628.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867500102991.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867508136434.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867668662855.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867676361642.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867688883828.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867699673064.mp4',
        //   'http://pz987tt4d.bkt.clouddn.com/1570867706500578.mp4'
        // ]
    },
  videoPlay: function() {
    console.log()
  },
  onTabItemTap: function (options) {
    console.log(1234567)
    if (wx.getStorageSync('videoSrc')) {
      var obj = { id: this.data.videoArr.length+1, value: wx.getStorageSync('videoSrc'), heartNum: 123, bool: false }
      var newVideo = this.data.videoArr
      newVideo.push(obj)
      this.setData({
        videoArr: newVideo
      })
    }
    console.log(this.data.videoArr)
  },
  swiperChange: function(e) {
    var num = Number(e.detail.current)
    this.videoNext = wx.createVideoContext('video' + (num + 1))
    this.videoPre = wx.createVideoContext('video' + num)
    // this.videoContext.pause()
    var newVideoArr = this.data.videoArr
    for (var i = 0; i < newVideoArr.length; i++) {
      newVideoArr[i]. bool = false
      if (e.detail.current == i) {
        newVideoArr[i].bool = true
      }
    }
    this.videoPre.pause()
    this.videoNext.play()
    this.setData({
      videoArr: newVideoArr
    })
    // console.log( this.videoNext )
  },
  videoPlay1: function(e) {
    console.log(e)
  },
  // handletouchmove: function (event) {
  //   // console.log(event)
  //   if (this.data.flag !== 0) {
  //     return
  //   }
  //   let currentX = event.touches[0].pageX;
  //   let currentY = event.touches[0].pageY;
  //   let tx = currentX - this.data.lastX;
  //   let ty = currentY - this.data.lastY;
  //   let video = "";
  //   //左右方向滑动
  //   if (Math.abs(tx) < Math.abs(ty)) {
  //     if (ty < 0) {
  //       this.setData({
  //         index: this.data.index + 1
  //       })
  //       if(this.data.index >= this.data.videoArr.length) {
  //         this.setData({
  //           index: 0
  //         })
  //       }
  //       video = this.data.videoArr[this.data.index];

  //     }
  //     else if (ty > 0) {
  //       this.setData({
  //         index: this.data.index - 1
  //       })
  //       if (this.data.index < 0) {
  //         this.setData({
  //           index: this.data.videoArr.length - 1
  //         })
  //       }
  //       video = this.data.videoArr[this.data.index];
  //     }

  //   }

  //   //将当前坐标进行保存以进行下一次计算
  //   this.data.lastX = currentX;
  //   this.data.lastY = currentY;
  //   this.setData({
  //     video: video,
  //   });
  // },

  // handletouchstart: function (event) {
  //   // console.log(event)
  //   this.data.lastX = event.touches[0].pageX;
  //   this.data.lastY = event.touches[0].pageY;
  // },
  // handletouchend: function (event) {
  //   this.data.flag = 0
  //   this.setData({
  //     text: "没有滑动"
  //   });
  // },
  search: function(event) {
    wx.redirectTo({
      url: '../search/search'
    })
  },
    // 用户登录示例
    bindGetUserInfo: function () {
        if (this.data.logged) return

        util.showBusy('正在登录')

        const session = qcloud.Session.get()

        if (session) {
            // 第二次登录
            // 或者本地已经有登录态
            // 可使用本函数更新登录态
            qcloud.loginWithCode({
                success: res => {
                    this.setData({ userInfo: res, logged: true })
                    console.log(this.data.userInfo)
                    util.showSuccess('登录成功')
                },
                fail: err => {
                    console.error(err)
                    util.showModel('登录错误', err.message)
                }
            })
        } else {
            // 首次登录
            qcloud.login({
                success: res => {
                    this.setData({ userInfo: res, logged: true })
                    util.showSuccess('登录成功')
                  console.log(this.data.userInfo)
                },
                fail: err => {
                    console.error(err)
                    util.showModel('登录错误', err.message)
                }
            })
        }
    },

    // 切换是否带有登录态
    switchRequestMode: function (e) {
        this.setData({
            takeSession: e.detail.value
        })
        this.doRequest()
    },

    doRequest: function () {
        util.showBusy('请求中...')
        var that = this
        var options = {
            url: config.service.requestUrl,
            login: true,
            success (result) {
                util.showSuccess('请求成功完成')
                console.log('request success', result)
                that.setData({
                    requestResult: JSON.stringify(result.data)
                })
            },
            fail (error) {
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

    // 上传图片接口
    doUpload: function () {
        var that = this

        // 选择图片
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: function(res){
                util.showBusy('正在上传')
                var filePath = res.tempFilePaths[0]

                // 上传图片
                wx.uploadFile({
                    url: config.service.uploadUrl,
                    filePath: filePath,
                    name: 'file',

                    success: function(res){
                        util.showSuccess('上传图片成功')
                        console.log(res)
                        res = JSON.parse(res.data)
                        console.log(res)
                        that.setData({
                            imgUrl: res.data.imgUrl
                        })
                    },

                    fail: function(e) {
                        util.showModel('上传图片失败')
                    }
                })

            },
            fail: function(e) {
                console.error(e)
            }
        })
    },

    // 预览图片
    previewImg: function () {
        wx.previewImage({
            current: this.data.imgUrl,
            urls: [this.data.imgUrl]
        })
    },

    // 切换信道的按钮
    switchChange: function (e) {
        var checked = e.detail.value

        if (checked) {
            this.openTunnel()
        } else {
            this.closeTunnel()
        }
    },

    openTunnel: function () {
        util.showBusy('信道连接中...')
        // 创建信道，需要给定后台服务地址
        var tunnel = this.tunnel = new qcloud.Tunnel(config.service.tunnelUrl)

        // 监听信道内置消息，包括 connect/close/reconnecting/reconnect/error
        tunnel.on('connect', () => {
            util.showSuccess('信道已连接')
            console.log('WebSocket 信道已连接')
            this.setData({ tunnelStatus: 'connected' })
        })

        tunnel.on('close', () => {
            util.showSuccess('信道已断开')
            console.log('WebSocket 信道已断开')
            this.setData({ tunnelStatus: 'closed' })
        })

        tunnel.on('reconnecting', () => {
            console.log('WebSocket 信道正在重连...')
            util.showBusy('正在重连')
        })

        tunnel.on('reconnect', () => {
            console.log('WebSocket 信道重连成功')
            util.showSuccess('重连成功')
        })

        tunnel.on('error', error => {
            util.showModel('信道发生错误', error)
            console.error('信道发生错误：', error)
        })

        // 监听自定义消息（服务器进行推送）
        tunnel.on('speak', speak => {
            util.showModel('信道消息', speak)
            console.log('收到说话消息：', speak)
        })

        // 打开信道
        tunnel.open()

        this.setData({ tunnelStatus: 'connecting' })
    },

    /**
     * 点击「发送消息」按钮，测试使用信道发送消息
     */
    sendMessage() {
        if (!this.data.tunnelStatus || !this.data.tunnelStatus === 'connected') return
        // 使用 tunnel.isActive() 来检测当前信道是否处于可用状态
        if (this.tunnel && this.tunnel.isActive()) {
            // 使用信道给服务器推送「speak」消息
            this.tunnel.emit('speak', {
                'word': 'I say something at ' + new Date(),
            });
        }
    },

    /**
     * 点击「关闭信道」按钮，关闭已经打开的信道
     */
    closeTunnel() {
        if (this.tunnel) {
            this.tunnel.close();
        }
        util.showBusy('信道连接中...')
        this.setData({ tunnelStatus: 'closed' })
    }
})
