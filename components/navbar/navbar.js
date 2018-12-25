

Component({

  properties: {
    theme: {
      type: String,
      value: 'light',
    },
    title: {
      type: String,
      value: 'Wechat'
    },
    backEnable: {
      type: Boolean,
      value: false
    },
    homeEnable: {
      type: Boolean,
      value: false
    },
    backProxy: {
      type: Boolean,
      value: false,
    },
    backgroundColor: {
      type: String,
      value: '#fff'
    },
  },

  attached(){
    const that = this
    wx.getSystemInfo({
      success: e => {
        that.setData({
          statusBarHeight : e.statusBarHeight,
          navigationBarHeight : e.platform =='android' ? e.statusBarHeight + 50 : e.statusBarHeight + 45
        })
      }
    })
  },


  methods: {
    backHome: function() {
      wx.reLaunch({
        url: '../index/index',
      })
    },

    back: function() {
      if (this.data.backProxy) {
        this.triggerEvent('onNavigateBack')
      } else {
        wx.navigateBack({
          delta: 1
        })
      }

    }
  }
})