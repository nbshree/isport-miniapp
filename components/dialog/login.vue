<template>
	<view>
		<view v-show="visible">
			<!-- 遮罩层 -->
			<view class="dialog-mask" id="__dialog-getpoints-mask" @tap="close"></view>
			<view class='dialog-container'>
				<view class='dialog-header'>
					<view class="dialog-close" @tap="close()">X</view>
					<view class="dialog-title"></view>
				</view>
				<view class='dialog-content'>
					<view class="content-title">{{content}}</view>
				</view>
				<button class='dialog-actions' v-if="flow_status==1" style="padding:0rpx" open-type="getUserInfo" lang="zh_CN"
				 @getuserinfo="getUserInfo"> {{action}} </button>
				<view class='dialog-actions' v-else :data-url="path" @tap="okClick">{{action}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	import {
		openUrl
	} from "common/utils/util.js";

	export default {
		props: {
			visible: {
				type: Boolean,
				default: true
			},
			confirm: {
				type: Boolean,
				default: (val) => {
					return true;
				}
			},
			modalClose: {
				type: Boolean,
				default: true
			},
			content: {
				type: String,
				default: '您还没有登陆！'
			},
			action: {
				type: String,
				default: '立即登入'
			},
			flow_status: {
				type: Number,
				default: 1
			},
			path: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				isVisible: this.visible,
				inputValue: ''
			}
		},
		watch: {
			visible(val, old) {
				console.log(val)
				this.isVisible = val;
			}
		},
		methods: {
			okClick: function(e) {
				//console.log(e)
				let url = e.currentTarget.dataset.url
				if (url && url != '') openUrl(e)
				this.close(e);
			},
			close: function(e) {
				//console.log(e)
				if (!this.modalClose && e.currentTarget.id === "__dialog-getpoints-mask") return;

				this.isVisible = false;
			},
			getUserInfo: function(e) {
				//let wxLogin = wx.getStorageSync('_wxLogin')
				//console.log(e)
				app.wxLogin(app.wxGetUserInfo);
				this.close(e);
			}
		}
	}
</script>

<style>
	@import "./common.wxss";

	.content-title {
		padding-bottom: 30rpx;
	}

	.dialog-input {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #98999a;
		text-align: right;
	}

	.dialog-input view {
		flex: 1;
	}

	.dialog-input input {
		border: 1rpx solid #98999a;
		border-radius: 5rpx;
		width: 300rpx;
		height: 40rpx;
		text-align: left;
	}
</style>
