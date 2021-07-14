<template>
	<view>
		<!-- 头部 -->
		<view class="bg-header-image header-container">
			<view class="header-image view-image-center">
				<image :src="member.avatarUrl" />
				<view class="header-user-type">{{member.vip>0?'VIP用户':'普通用户'}}</view>
			</view>
			<view class="header-title">微信昵称：{{member.nickName}}</view>
			<view class="header-cert">
				<view class="header-button">{{member.flow_status==5?'已认证':'未认证'}}</view>
			</view>
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<!-- 积分 -->
		<view class="integral-container">
			<view class="integral-row">
				<view class="integral-column">
					<view class="integral-item" data-url="/pages/match/points" @tap="openUrl">
						<view>乒乓球积分</view>
						<view><span>200</span></view>
					</view>
					<view class="integral-item" data-url="/pages/match/points" @tap="openUrl">
						<view>羽毛球积分</view>
						<view><span>200</span></view>
					</view>
					<view class="integral-item">
						<view>排球积分</view>
						<view class="button" @tap="openPointDialog">获取积分</view>
					</view>
				</view>
			</view>
			<view class="integral-row">
				<view class="integral-column">
					<view class="integral-item">
						<view>篮球积分</view>
						<view class="button" @tap="openPointDialog">获取积分</view>
					</view>
					<view class="integral-item" data-url="/pages/match/points" @tap="openUrl">
						<view>足球积分</view>
						<view><span>200</span></view>
					</view>
					<view class="integral-item">
						<view>网球积分</view>
						<view class="button" @tap="openPointDialog">获取积分</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<!-- 菜单 -->
		<view class="menu-container">
			<view class="menu-item" data-url="/pages/my/matchRecord" @tap="openUrl">
				<view class="menu-icon menu-image">
					<image src="/static/images/menu_icon1.png" />
				</view>
				<view class="menu-title menu-text">参赛记录</view>
				<view class="menu-more menu-image">
					<image src="/static/images/menu_more.png" />
				</view>
			</view>
			<view class="menu-item" data-url="/pages/my/matchPub" @tap="openUrl">
				<view class="menu-icon menu-image">
					<image src="/static/images/menu_icon2.png" />
				</view>
				<view class="menu-title menu-text">赛事发布</view>
				<view class="menu-more menu-image">
					<image src="/static/images/menu_more.png" />
				</view>
			</view>
			<view class="menu-item" data-url="/pages/my/cert" @tap="openUrl">
				<view class="menu-icon menu-image">
					<image src="/static/images/menu_icon3.png" />
				</view>
				<view class="menu-title menu-text">认证信息</view>
				<view class="menu-flag menu-text">已认证</view>
				<view class="menu-more menu-image">
					<image src="/static/images/menu_more.png" />
				</view>
			</view>
			<view class="menu-item" data-url="/pages/my/team" @tap="openUrl">
				<view class="menu-icon menu-image">
					<image src="/static/images/menu_icon4.png" />
				</view>
				<view class="menu-title menu-text">我的团队</view>
				<view class="menu-more menu-image">
					<image src="/static/images/menu_more.png" />
				</view>
			</view>
			<view class="menu-item">
				<view class="menu-icon menu-image">
					<image src="/static/images/menu_icon5.png" />
				</view>
				<view class="menu-title menu-text">二维码</view>
				<view class="menu-more menu-image">
					<image src="/static/images/menu_more.png" />
				</view>
			</view>
		</view>

		<!-- 底部空位，防止内容被菜单遮挡 -->
		<view class="space-bottom"></view>

		<!-- 底部菜单 -->
		<custom-tabbar :selected="4"></custom-tabbar>

		<dialog-points :visible="dialog.visible" />

	</view>
</template>

<script>
	import {
		openUrl
	} from "common/utils/util.js";
	import request from "common/utils/request.js";
	import customTabbar from "components/custom-tabbar/index.vue";
	import dialogPoints from "components/dialog/getPoints.vue";

	const app = getApp();

	export default {
		components: {
			customTabbar,
			dialogPoints
		},
		data() {
			return {
				member: {},
				dialog: {
					visible: false
				}
			}
		},
		onShow: function() {
			this.member = wx.getStorageSync('_wxUserInfo');
		},
		methods: {
			openUrl,
			openPointDialog: function(e) {
				this.dialog.visible = true;
			}
		}
	}
</script>

<style>
	.header-container {
		height: 430rpx;
		width: 100%;
		background-color: #1fc287;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.header-image {
		height: 160rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}

	.header-image image {
		height: 160rpx;
		width: 160rpx;
		border-radius: 50%;
		border: 2rpx solid #fff;
	}

	.header-title {
		height: 32rpx;
		font-size: 32rpx;
		color: #fff;
		font-weight: bold;
	}

	.header-cert {
		padding-top: 30rpx;
	}

	.header-cert .header-button {
		font-size: 32rpx;
		color: #fa8a24;
		border: 2rpx solid #fa8a24;
		border-radius: 2em 2em 2em 2em;
		padding: 10rpx 40rpx 10rpx 40rpx;
	}

	.header-user-type {
		width: 240rpx;
		height: 60rpx;
		background-color: #53daa1;
		position: absolute;
		right: 0rpx;
		border-radius: 2em 0em 0em 2em;
		font-size: 32rpx;
		line-height: 60rpx;
		text-align: center;
		color: #e8f3ec;
	}

	.integral-container {
		display: block;
	}

	.integral-row {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.integral-column {
		flex: 1;
		display: flex;
		display: -webkit-flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		padding-top: 14rpx;
		padding-bottom: 14rpx;
	}

	.integral-item {
		flex: 1;
		text-align: center;
		padding-top: 14rpx;
		padding-bottom: 14rpx;
		font-size: 28rpx;
		color: #999999;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.integral-item span {
		display: block;
		color: #272829;
		padding-top: 28rpx;
	}

	.integral-item .button {
		margin-top: 28rpx;
		background-color: #03b990;
		border: 1rpx;
		border-radius: 5rpx;
		color: #fff;
		height: 50rpx;
		line-height: 50rpx;
		padding-right: 10rpx;
		padding-left: 10rpx;
	}
</style>
