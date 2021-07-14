<template>
	<view>
		<!-- 广告位 -->
		<view class="banner" v-if="swiper.data.length>0">
			<swiper class="swiper_banner" :indicator-dots="swiper.indicatordots" :autoplay="swiper.autoplay" :interval="swiper.interval"
			 :vertical="swiper.vertical" :circular="swiper.circular" :indicator-color="swiper.indicatorcolor"
			 :indicator-active-color="swiper.indicatoractivecolor" :easing-function="swiper.easingfunction" :current="swiper.current">
				<block v-for="(item,index) in swiper.data">
					<swiper-item v-if="!item.error">
						<image :src="item.img_url" :data-index="index" @load="bannerImageEvent" @error="bannerImageEvent" />
					</swiper-item>
				</block>
			</swiper>
		</view>

		<!-- 赛信息位 -->
		<view class="notice" :data-url="'/pages/article/index?id='+ notice.id " @tap="openUrl" v-if=" notice && notice.id>0 ">
			<view class="notice-icon">
				<image src="/static/images/notice_icon.png" />
			</view>
			<view class="notice-text">{{ notice.title }}</view>
			<view class="notice-go">
				<image src="/static/images/notice_go.png" />
			</view>
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<!-- 选项卡 -->
		<view class="swiper-tab">
			<view :class="['swiper-tab-item',currentTab==0?'actived':'']" data-current="0" @tap="clickTab">推荐商品</view>
			<view :class="['swiper-tab-item',currentTab==1?'actived':'']" data-current="1" @tap="clickTab">推荐赛事</view>
		</view>

		<view class="swiper-item">
			<view class="swiper-item-shop" v-if="currentTab==0">
				<view class="shop-list-item" v-for="(item,index) in testData.swiper1">
					<view class="shop-list-image">
						<image :src="item.img" />
					</view>
					<view class="shop-list-left">
						<view class="shop-list-title">{{item.title}}</view>
						<view class="shop-list-price">￥{{item.price}}</view>
						<view class="shop-list-buy" :data-id="item.id" @tap="openPayDialog">立即购买</view>
					</view>
				</view>
			</view>

			<view class="swiper-item-match" v-if="currentTab==1">
				<view class="match-list-item" v-for="(item,index) in testData.swiper2">
					<view class="match-list-image">
						<image :src="item.img" />
					</view>
					<view class="match-list-left">
						<view class="match-list-title">{{item.title}}</view>
						<view class="match-list-address">
							<image src="/static/images/point_gray.png" /><span>{{item.address}}</span>
						</view>
						<view class="match-list-time">距离报名结束 <span>{{item.time}}</span></view>
						<view class="match-list-button" :data-url="'/pages/match/detail?id='+item.id" @tap="openUrl">立即报名</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部空位，防止内容被菜单遮挡 -->
		<view class="space-bottom"></view>

		<!-- 底部菜单 -->
		<custom-tabbar :selected="0"></custom-tabbar>

		<!-- <dialog-pay :visible="dialog.visiblePay" ref="mypay"></dialog-pay> -->

		<dialog-login :visible="dialog.visibleLogin"></dialog-login>

	</view>
</template>

<script>
	import {
		openUrl
	} from "common/utils/util.js";
	import request from "common/utils/request.js";
	import customTabbar from "components/custom-tabbar/index.vue";
	import dialogPay from "components/dialog/pay.vue";
	import dialogLogin from "components/dialog/login.vue";

	const app = getApp();

	const testData = {
		swiper1: [{
			id: "1",
			img: '/static/images/test/banner.png',
			title: '马拉松比赛用品',
			price: 2320
		}, {
			id: "2",
			img: '/static/images/test/banner.png',
			title: '马拉松比赛用品',
			price: 5420
		}],
		swiper2: [{
			id: "1",
			img: '/static/images/test/banner.png',
			title: '2019年圣诞马拉松比赛体育训练馆',
			address: '浙江省宁波高新区',
			time: '32天14小时'
		}, {
			id: "2",
			img: '/static/images/test/banner.png',
			title: '2020年圣诞马拉松比赛体育训练馆',
			address: '浙江省宁波高新区',
			time: '32天14小时'
		}]
	}

	export default {
		components: {
			customTabbar,
			dialogPay,
			dialogLogin
		},
		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */
		onPullDownRefresh: function() {
			wx.stopPullDownRefresh();
			app.wxLogin(app.wxGetUserInfo);
			request.post({
				interface: 'viewin.App.wechat.home'
			}, "数据加载中...", this.responseHome);
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			request.post({
				interface: 'viewin.App.wechat.home'
			}, "数据加载中...", this.responseHome);
		},
		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow() {
			wx.getSetting({
				success: (setting) => {
					if (!setting.authSetting['scope.userInfo'])
						wx.removeStorageSync('_wxUserInfo');
				}
			});
		},
		data() {
			return {
				testData: testData,
				currentTab: 0, //tab页索引值
				swiper: {
					indicatordots: true, //是否显示面板指示点
					autoplay: false, //是否自动切换
					interval: 3000, //自动切换时间间隔
					vertical: false, //滑动方向是否为纵向
					circular: false, //是否采用衔接滑动
					indicatorcolor: "#baf1ee", //指示点颜色
					indicatoractivecolor: "#48d9d2", //当前选中的指示点颜色
					easingfunction: "easeInOutCubic", //指定 swiper 切换缓动动画类型
					current: 0, //当前所在滑块的 index
					data: [] //滑动块的数据
				},
				notice: {},
				dialog: {
					visiblePay: false,
					visibleLogin: false
				}


			};
		},
		methods: {
			openUrl,
			//tabTag切换事件
			clickTab: function(e) {
				let current = e.target.dataset.current;
				this.currentTab = current;
			},
			//广告图片加载完成回调，解决图片不能加载时的空白问题
			bannerImageEvent: function(e) {
				if (e.type == 'error') {
					this.swiper.data.splice(e.target.dataset.index, 1);
				} else if (e.type == 'load') {
					if (this.swiper.autoplay) return;
					this.swiper.autoplay = true;
				}
			},
			//打开支付对话框
			openPayDialog: function(e) {
				// this.dialog.visiblePay = true;
				uni.showModal({
					// title:"购买确认 ",
					content: "确认购买该款商品吗？",
					success() {

					}
				})
			},
			responseHome: function(data) {
				//console.log(data)
				this.swiper.data = data.bannerList;

				if (Array.isArray(data.noticeList) && data.noticeList.length > 0) {
					this.notice = data.noticeList[0];
				}
			}
		}
	};
</script>

<style>
	@import "/static/style/common.wxss";

	page {
		background-color: #fff;
	}

	.notice {
		height: 68rpx;
		width: 100%;
		background: orange url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAABECAIAAABRZyc8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFGQjMxQTkxNUFDQTExRUE4MTZCQjI3QTdGNDVCNjY4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFGQjMxQTkyNUFDQTExRUE4MTZCQjI3QTdGNDVCNjY4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUZCMzFBOEY1QUNBMTFFQTgxNkJCMjdBN0Y0NUI2NjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUZCMzFBOTA1QUNBMTFFQTgxNkJCMjdBN0Y0NUI2NjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4FxKIKAAABk0lEQVR42uzW2YrCUBBF0ZQ/72eXkoCgqKnKiLLWSw+cRJq+ITvyGsNiOX056Q75+C4WXdW5sHtVvvwUrf38p2R5nG9/G2vHmy/z0x8QtdnzcsNZfv/PRWEzznL2CEThPvddHLTJwlHP4kFdt8nWuY29bpK9M5yNc75odvwjU3kWio/DCbPSY9h4gorPyDQsLusvxOKy9eaqj1e9gHYZXwYAgJ8lZQAAKQMAIGUAAKQMACBlAACkDACAlAEAkDIAgJQBAJAyAABSBgCQMgAAUgYAQMoAAEgZAEDKAABIGQAAKQMAIGUAACkDACBlAACkDAAgZQAApAwAgJQBAJAyAICUAQCQMgAAUgYAQMoAAFIGAEDKAABIGQBAygAASBkAACkDACBlAAApAwAgZQAApAwAIGUAAKQMAICUAQCQMgCAlAEAkDIAAFIGAEDKAABSBgBAygAASBkAQMoAAEgZAAApAwAgZQAAKQMAIGUAAKQMAICUAQCkDACAlAEAkDIAgJQBAJAyAABSBgBAygAA/+omwABBhD0IdDvK3AAAAABJRU5ErkJggg==");
		background-repeat: no-repeat;
		background-position: 0 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.notice .notice-icon {
		width: 68rpx;
		height: 100%;
		line-height: 68rpx;
		text-align: right;
		padding-right: 10rpx;
	}

	.notice .notice-icon image {
		width: 30rpx;
		height: 30rpx;
	}

	.notice .notice-text {
		flex: 1;
		font-size: 28rpx;
		color: #fff;
		overflow-x: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 68rpx;
	}

	.notice .notice-go {
		width: 40rpx;
		height: 100%;
		padding-right: 30rpx;
		text-align: right;
		line-height: 68rpx;
	}

	.notice .notice-go image {
		width: 30rpx;
		height: 30rpx;
	}


	swiper {
		text-align: center;
		background-color: #ffffff;
	}

	.swiper-item {
		margin: 30rpx 30rpx 0rpx 30rpx;
	}

	.swiper-item-shop {
		width: 100%;
	}

	.shop-list-item {
		width: 100%;
		height: 220rpx;
		display: flex;
		flex-direction: row;
		margin-bottom: 30rpx;
	}

	.shop-list-image {
		width: 240rpx;
		height: 100%;
	}

	.shop-list-image image {
		width: 100%;
		height: 100%;
	}

	.shop-list-left {
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		padding-left: 20rpx;
	}

	.shop-list-title {
		flex: 1;
		line-height: 36rpx;
		font-size: 26rpx;
		color: #282828;
		overflow: hidden;
	}

	.shop-list-price {
		height: 68rpx;
		font-size: 26rpx;
		line-height: 68rpx;
		color: #ff8800;
	}

	.shop-list-buy {
		height: 48rpx;
		width: 150rpx;
		font-size: 26rpx;
		line-height: 48rpx;
		text-align: center;
		background-color: #03b990;
		border-radius: 5rpx;
		color: white;
	}

	.match-list-item {
		width: 100%;
		height: 204rpx;
		display: flex;
		flex-direction: row;
		margin-bottom: 30rpx;
	}

	.match-list-image {
		width: 224rpx;
		height: 100%;
	}

	.match-list-image image {
		width: 100%;
		height: 100%;
	}

	.match-list-left {
		flex: 1;
		padding-left: 20rpx;
		font-size: 24rpx;
	}

	.match-list-title {
		flex: 1;
		overflow: hidden;
		font-size: 28rpx;
		height: 74rpx;
		text-overflow: ellipsis;
	}

	.match-list-address {
		flex: 0;
		height: 40rpx;
		line-height: 40rpx;
		color: #999999;
	}

	.match-list-address image {
		width: 24rpx;
		height: 24rpx;
		padding-right: 5rpx;
	}

	.match-list-time {
		flex: 0;
		height: 40rpx;
		line-height: 40rpx;
		color: #656565;
	}

	.match-list-time span {
		color: #ff8800;
	}

	.match-list-button {
		height: 50rpx;
		width: 150rpx;
		font-size: 26rpx;
		line-height: 50rpx;
		text-align: center;
		background-color: #03b990;
		border-radius: 5rpx;
		color: white;
	}
</style>
