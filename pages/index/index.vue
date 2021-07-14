<template>
	<view>
		<view class="banner">
			测试号” 要和 “微信开放社区” 同时登陆才有数据。
			https://developers.weixin.qq.com/community/develop/mixflow
			https://developers.weixin.qq.com/sandbox
		</view>
		<view class="notice">
			通知公告区
		</view>
		<view class="container">
			<view class="userinfo">
				<button v-if="!hasUserInfo && canIUse" open-type="getUserInfo" @getuserinfo="getUserInfo"> 获取头像昵称 </button>
				<block v-else>
					<image @tap="bindViewTap" class="userinfo-avatar" :src="userInfo.avatarUrl" mode="cover"></image>
					<text class="userinfo-nickname">{{userInfo.nickName}}</text>
				</block>
			</view>
			<view class="usermotto">
				<text class="user-motto">{{motto}}</text>
			</view>
		</view>

		<custom-tabbar :selected="3"></custom-tabbar>
	</view>
</template>

<script>
	import {
		openUrl
	} from "common/utils/util.js";
	import request from "common/utils/request.js";
	import customTabbar from "components/custom-tabbar/index.vue";

	const app = getApp();

	export default {
		components: {
			customTabbar
		},
		data() {
			return {
				motto: 'Hello World',
				userInfo: {},
				hasUserInfo: false,
				canIUse: wx.canIUse('button.open-type.getUserInfo'),
			}
		},
		onLoad: function() {
			if (app.globalData.userInfo) {
				this.userInfo = app.globalData.userInfo;
				this.hasUserInfo = true;
			} else if (this.canIUse) {
				// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
				// 所以此处加入 callback 以防止这种情况
				app.userInfoReadyCallback = res => {
					this.userInfo = res.userInfo;
					this.hasUserInfo = true;
				}
			} else {
				// 在没有 open-type=getUserInfo 版本的兼容处理
				wx.getUserInfo({
					success: res => {
						app.globalData.userInfo = res.userInfo;

						this.userInfo = res.userInfo;
						this.hasUserInfo = true;
					}
				})
			}
		},
		onShow: function() {
			console.log(this.getTabBar)
		},
		methods: {
			//事件处理函数
			bindViewTap: function() {
				wx.navigateTo({
					url: '../logs/logs'
				})
			},
			getUserInfo: function(e) {
				console.log(e)
				app.globalData.userInfo = e.detail.userInfo;
				this.userInfo = e.detail.userInfo;
				this.hasUserInfo = true;
			}
		}
	}
</script>

<style>
	.userinfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 200px;
		border: 1px solid #000;
	}

	.userinfo-avatar {
		width: 128rpx;
		height: 128rpx;
		margin: 20rpx;
		border-radius: 50%;
	}

	.userinfo-nickname {
		color: #aaa;
	}

	.usermotto {
		margin-top: 200px;
	}

	/************************/
	.banner {
		height: 320rpx;
		border: 1rpx solid #00ff00;
	}

	.notice {
		height: 70rpx;
		border: 1rpx solid #ff0000;
	}
</style>
