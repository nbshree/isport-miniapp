<template>
	<view>
		<!--头部-->
		<view class="header-container">
			<view class="member-container">
				<view class="member-row-1">
					<view class="member-image">
						<image :src="member.avatarUrl" />
					</view>
					<view class="member-content">
						<view class="member-points">消费积分　<text>1230</text></view>
						<view class="member-realname">姓名：{{member.realname}}</view>
						<view class="member-tel">{{member.phone_number}}</view>
						<view class="member-wechat">微信名：{{member.nickName}}</view>
					</view>
				</view>
				<view class="member-row-2">会员有效期：2020-03-15至2021-03-14</view>
			</view>
		</view>

		<!-- 套餐 -->
		<view class="scheme-container">
			<view class="scheme-list">
				<view class="scheme-list-item">
					<view class="scheme-name">套餐一</view>
					<view class="scheme-price">￥3200.00</view>
					<view class="scheme-days">365天</view>
				</view>
				<view class="scheme-list-item scheme-list-item-active">
					<view class="scheme-name">套餐二</view>
					<view class="scheme-price">￥3200.00</view>
					<view class="scheme-days">365天</view>
				</view>
				<view class="scheme-list-item">
					<view class="scheme-name">套餐三</view>
					<view class="scheme-price">￥3200.00</view>
					<view class="scheme-days">365天</view>
				</view>
			</view>
			<view class="scheme-buy">
				<view class="scheme-buy-button">立即开通/续费</view>
			</view>
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<view class="banner-container">
			<image src="/static/images/test/banner3.png" />
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<!-- 菜单 -->
		<view class="menu-container" data-url="/pages/member/billRecord" @tap="openUrl">
			<view class="menu-item">
				<view class="menu-icon menu-image">
					<image src="/static/images/menu_icon10.png" />
				</view>
				<view class="menu-title menu-text">消费记录</view>
				<view class="menu-more menu-image">
					<image src="/static/images/menu_more.png" />
				</view>
			</view>
			<view class="menu-item" data-url="/pages/member/consumePoint" @tap="openUrl">
				<view class="menu-icon menu-image">
					<image src="/static/images/menu_icon11.png" />
				</view>
				<view class="menu-title menu-text">消费积分</view>
				<view class="menu-more menu-image">
					<image src="/static/images/menu_more.png" />
				</view>
			</view>
			<view class="menu-item">
				<view class="menu-icon menu-image">
					<image src="/static/images/menu_icon5.png" />
				</view>
				<view class="menu-title menu-text">会员二维码</view>
				<view class="menu-more menu-image">
					<image src="/static/images/menu_more.png" />
				</view>
			</view>
		</view>


		<!-- 底部空位，防止内容被菜单遮挡 -->
		<view class="space-bottom"></view>

		<!-- 底部菜单 -->
		<custom-tabbar selected="2"></custom-tabbar>
	</view>
</template>

<script>
	import {
		openUrl
	} from "common/utils/util.js";
	import request from "common/utils/request.js";
	import customTabbar from "components/custom-tabbar/index.vue";
	// import dialogPay from "components/dialog/pay.vue";
	// import dialogLogin from "components/dialog/login.vue";

	export default {
		components:{customTabbar},
		data() {
			return {
				member: {}
			}
		},
		onLoad: function(options) {
			console.log(this.member)
			this.member = wx.getStorageSync('_wxUserInfo');

		},
		methods: {
			openUrl,

		}
	}
</script>

<style>
	.header-container {
		top: 0;
		background-color: #1fc287;
		padding: 20rpx 30rpx 0rpx 30rpx;
	}

	.member-container {
		height: 280rpx;
		background-color: #fff;
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArIAAAEYCAYAAACgFhWVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUyQzczQkI5NUFDODExRUFCODgzRjQ5NzZFMkNDNzA1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUyQzczQkJBNUFDODExRUFCODgzRjQ5NzZFMkNDNzA1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTJDNzNCQjc1QUM4MTFFQUI4ODNGNDk3NkUyQ0M3MDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTJDNzNCQjg1QUM4MTFFQUI4ODNGNDk3NkUyQ0M3MDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4qAlNiAAA6AklEQVR42uyd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");
		background-size: 100% 100%;
		border-top-left-radius: 32rpx;
		border-top-right-radius: 32rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.member-row-1 {
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.member-row-2 {
		height: 54rpx;
		font-size: 24rpx;
		line-height: 24rpx;
		color: #989898;
	}

	.member-image {
		width: 130rpx;
		margin-left: 30rpx;
		margin-right: 20rpx;
	}

	.member-image image {
		width: 130rpx;
		height: 130rpx;
		border: 2rpx solid #fff;
		border-radius: 50%;
	}

	.member-content {
		flex: 1;
		height: 130rpx;
		position: relative;
	}

	.member-realname {
		color: #fff;
		font-size: 30rpx;
		line-height: 30rpx;
		font-weight: bold;
		padding-bottom: 20rpx;
	}

	.member-tel {
		color: #fff;
		font-size: 20rpx;
		line-height: 20rpx;
		font-weight: bold;
		padding-bottom: 20rpx;
	}

	.member-wechat {
		color: #fff;
		font-size: 20rpx;
		line-height: 20rpx;
		width: 100%;
	}

	.member-points {
		width: 240rpx;
		height: 52rpx;
		position: absolute;
		right: 0rpx;
		background-color: #4b585e;
		border-radius: 2em 0em 0em 2em;
		font-size: 28rpx;
		line-height: 52rpx;
		color: #fff;
		text-align: center;
	}

	.member-points text {
		color: #fb8724;
	}


	.scheme-container {
		padding-top: 28rpx;
		padding-bottom: 28rpx;
	}

	.scheme-list {
		height: 180rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-right: 30rpx;
		padding-left: 30rpx;
		padding-bottom: 30rpx;
	}

	.scheme-list-item {
		height: 100%;
		width: 190rpx;
		border: 1rpx solid #dcddde;
		border-radius: 15rpx;
		box-shadow: 0px 2px 5px 5px #feffff;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.scheme-list-item-active {
		border: 1rpx solid #1fc287;
		box-shadow: 0px 1px 2px 2px #e8faf6;
	}

	.scheme-name,
	.scheme-price,
	.scheme-days {
		font-size: 28rpx;
		font-weight: bold;
	}

	.scheme-name {
		color: #1fc287;
	}

	.scheme-price {
		color: #fb8367
	}

	.scheme-days {
		color: #949596
	}

	.scheme-buy {
		height: 48rpx;
		text-align: center;
		display: flex;
		justify-content: center;
	}

	.scheme-buy-button {
		height: 100%;
		width: 220rpx;
		font-size: 24rpx;
		line-height: 48rpx;
		color: #fff;
		background-color: #1fc287;
		border-radius: 8rpx;
	}

	.banner-container {
		height: 158rpx;
		padding-left: 30rpx;
		padding-right: 30rpx;
		background-color: #f6f6f6;
	}

	.banner-container image {
		height: 100%;
		width: 100%;
		border-radius: 10rpx;
	}
</style>
