// client/pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    multiArray: [['今天', '明天'], ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'], ['00', '30']],
    // objectMultiArray: [
    //   [
    //     {
    //       id: 0,
    //       name: '今天'
    //     },
    //     {
    //       id: 1,
    //       name: '明天'
    //     }
    //   ], [
    //     {
    //       id: 0,
    //       name: '扁性动物'
    //     },
    //     {
    //       id: 1,
    //       name: '线形动物'
    //     },
    //     {
    //       id: 2,
    //       name: '环节动物'
    //     },
    //     {
    //       id: 3,
    //       name: '软体动物'
    //     },
    //     {
    //       id: 3,
    //       name: '节肢动物'
    //     }
    //   ], [
    //     {
    //       id: 0,
    //       name: '猪肉绦虫'
    //     },
    //     {
    //       id: 1,
    //       name: '吸血虫'
    //     }
    //   ]
    // ],
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01'
  },
  pickerTap:function(){
    
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      default:
        switch (data.multiIndex[0]){
          default:
            data.multiArray[1]=['9','10','11','12','13','14','15','16','17','18','19','20'];
            data.multiArray[2]=['00','30'];
        }
      // case 0:
      //   switch (data.multiIndex[0]) {
      //     case 0:
      //       data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
      //       data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
      //       break;
      //     case 1:
      //       data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
      //       data.multiArray[2] = ['鲫鱼', '带鱼'];
      //       break;
      //   }
      //   data.multiIndex[1] = 0;
      //   data.multiIndex[2] = 0;
      //   break;
      // case 1:
      //   switch (data.multiIndex[0]) {
      //     case 0:
      //       switch (data.multiIndex[1]) {
      //         case 0:
      //           data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
      //           break;
      //         case 1:
      //           data.multiArray[2] = ['蛔虫'];
      //           break;
      //         case 2:
      //           data.multiArray[2] = ['蚂蚁', '蚂蟥'];
      //           break;
      //         case 3:
      //           data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
      //           break;
      //         case 4:
      //           data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
      //           break;
      //       }
      //       break;
      //     case 1:
      //       switch (data.multiIndex[1]) {
      //         case 0:
      //           data.multiArray[2] = ['鲫鱼', '带鱼'];
      //           break;
      //         case 1:
      //           data.multiArray[2] = ['青蛙', '娃娃鱼'];
      //           break;
      //         case 2:
      //           data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
      //           break;
      //       }
      //       break;
      //   }
      //   data.multiIndex[2] = 0;
      //   break;
    }
    console.log(data.multiIndex);
    this.setData(data);
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