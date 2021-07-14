<script>
	import compareVersion from "common/utils/util";
	import request from "common/utils/request";

	export default {
		globalData: {
			userInfo: null
		},
		methods: {
			wxLogin: function(success) {
				wx.getSetting({
					success: (setting) => {
						if (setting.authSetting['scope.userInfo']) {
							wx.login({
								success: res => {
									console.log(res)
									// 发送 res.code 到后台换取 openId, sessionKey, unionId
									res.interface = 'viewin.App.wechat.wxLogin';
									request.post(res, false, function(httpResp) {
										if (httpResp && httpResp.session_key) {
											wx.setStorageSync('_wxLogin', httpResp);
											success(httpResp);
										} else wx.removeStorageSync('_wxLogin');
									});
								}
							})
						} else wx.removeStorageSync('_wxUserInfo');
					}
				});
			},
			wxGetUserInfo: function(login) {
				wx.getUserInfo({
					lang: "zh_CN",
					success: (info) => {
						info.interface = 'viewin.App.wechat.parseWxBizData';
						info.sessionKey = login.session_key;
						request.post(info, false, function(httpResp) {
							//console.log("viewin.App.wechat.parseWxBizData")
							console.log(httpResp)
							wx.setStorageSync('_wxUserInfo', httpResp)
						}, function() {
							wx.removeStorageSync('_wxUserInfo')
						});
						/**
						// 可以将 res 发送给后台解码出 unionId
						this.globalData.userInfo = info.userInfo

						// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
						// 所以此处加入 callback 以防止这种情况
						if (this.userInfoReadyCallback) {
						  this.userInfoReadyCallback(info)
						}**/
					}
				})
			},
		},
		onLaunch: function() {
			// 展示本地存储能力
			var logs = wx.getStorageSync('logs') || [];
			logs.unshift(Date.now());
			wx.setStorageSync('logs', logs);

			wx.hideTabBar();
			//if((compareVersion(wx.getSystemInfoSync().SDKVersion, "1.9.0") > -1)) {
			//  wx.hideTabBar();
			//}

			/** 
			// 登录
			wx.login({
			  success: res => {
			    // 发送 res.code 到后台换取 openId, sessionKey, unionId
			    res.interface='viewin.App.wechat.wxLogin'
			    request.post(res, false, function(resp){
			      console.log(resp)
			      wx.getUserInfo({
			        withCredentials:true,
			        lang:'zh_CN',
			        success: res1 => {
			          console.log(res1)
			        },
			        fail: res1 => {
			          console.log(res1)
			        }
			      })
			    })
			  }
			}) **/

			// 获取用户信息
			/** 
			wx.getSetting({
			  success: (setting) => {
			    if (setting.authSetting['scope.userInfo']) {
			      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框

			      this.wxLogin(this.wxGetUserInfo)
			    } else wx.removeStorageSync('_wxUserInfo')
			  }
			})*/
			this.wxLogin(this.wxGetUserInfo);
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "/static/style/common.wxss";

	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 200rpx 0;
		box-sizing: border-box;
	}
</style>
