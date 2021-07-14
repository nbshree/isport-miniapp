<template>
	<view>
		<!-- 广告位 -->
		<view class="banner" v-if="swiper.data.length">
			<swiper class="swiper_banner" :indicator-dots="swiper.indicatordots" :autoplay="swiper.autoplay" :interval="swiper.interval"
			 :vertical="swiper.vertical" :circular="swiper.circular" :indicator-color="swiper.indicatorcolor"
			 :indicator-active-color="swiper.indicatoractivecolor" :easing-function="swiper.easingfunction" :current="swiper.current">
				<block v-for="(item,index) in swiper.data">
					<swiper-item v-if="!item.error">
						<image :src="item.image" :data-index="index" @load="bannerImageEvent" @error="bannerImageEvent" />
					</swiper-item>
				</block>
			</swiper>
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<!-- 商品 -->
		<view class="shop-container">
			<view class="shop-list-container">
				<view class="shop-list-item">
					<view class="shop-list-image">
						<image src="/static/images/test/banner.png" />
					</view>
					<view class="shop-list-left">
						<view class="shop-list-title">2019年圣诞马拉松比赛体育训练馆我很长长我很长长我很长长我很长长我我很长长我很长长我很长长我很长长我我很长长我很长长我很长长我很长长我</view>
						<view class="shop-list-price">￥3200.00</view>
						<view class="shop-list-buy" @tap="openPayDialog">立即购买</view>
					</view>
				</view>
			</view>

			<view class="shop-list-container">
				<view class="shop-list-item">
					<view class="shop-list-image">
						<image src="/static/images/test/banner.png" />
					</view>
					<view class="shop-list-left">
						<view class="shop-list-title">2019年圣诞马拉松比赛体育训练馆我很长长我很长长我很长长我很长长我我很长长我很长长我很长长我很长长我我很长长我很长长我很长长我很长长我</view>
						<view class="shop-list-price">￥3200.00</view>
						<view class="shop-list-buy" @tap="openPayDialog">立即购买</view>
					</view>
				</view>
			</view>

			<view class="shop-list-container">
				<view class="shop-list-item">
					<view class="shop-list-image">
						<image src="/static/images/test/banner.png" />
					</view>
					<view class="shop-list-left">
						<view class="shop-list-title">2019年圣诞马拉松比赛体育训练馆我很长长我很长长我很长长我很长长我我很长长我很长长我很长长我很长长我我很长长我很长长我很长长我很长长我</view>
						<view class="shop-list-price">￥3200.00</view>
						<view class="shop-list-buy" @tap="openPayDialog">立即购买</view>
					</view>
				</view>
			</view>

		</view>

		<!-- 底部空位，防止内容被菜单遮挡 -->
		<view class="space-bottom"></view>

		<!-- 底部菜单 -->
		<custom-tabbar :selected="1"></custom-tabbar>

		<dialog-pay :visible="dialog.visible" />
	</view>
</template>

<script>
	import {
		openUrl
	} from "common/utils/util.js";
	import request from "common/utils/request.js";
	import customTabbar from "components/custom-tabbar/index.vue";
	import dialogPay from "components/dialog/pay.vue";

	const app = getApp();

	export default {
		components: {
			customTabbar,
			dialogPay
		},
		data() {
			return {
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
					data: [ //滑动块的数据
						{
							image: '/static/images/test/banner3.png'
						},
						{
							image: '/static/images/test/banner2.png'
						},
						{
							image: '/static/images/test/banner.png'
						}
					],
				},
				dialog: {
					visible: false
				}
			}
		},
		methods: {
			openUrl, //广告图片加载完成回调，解决图片不能加载时的空白问题
			bannerImageEvent: function(e) {
				if (e.type == 'error') {
					this.swiper.data.splice(e.target.dataset.index, 1);

				} else if (e.type == 'load') {
					if (this.swiper.autoplay) return;
					this.swiper.autoplay = true;
				}
			},
			openPayDialog: function(e) {
				console.log(e)
				this.dialog.visible = true;
			}
		}
	}
</script>

<style>
	.shop-container {
		width: 100%;
	}

	.shop-list-container {
		margin: 30rpx 30rpx 0rpx 30rpx;
		border-bottom: 1rpx solid #edeeef;
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
</style>
