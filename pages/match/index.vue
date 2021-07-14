<template>
	<view>
		<view class="search-container">
			<view class="point-image view-image-center">
				<image src="/static/images/point_white.png" />
			</view>
			<view class="point-text">宁波</view>
			<view class="point-more view-image-center">
				<image src="/static/images/point_down.png" />
			</view>
			<view class="search-input">
				<view class="search-input-input"><input placeholder-class="search-input-phcolor" placeholder="搜索您感兴趣的赛事" /></view>
				<view class="search-input-button view-image-center">
					<image src="/static/images/search_white.png" />
				</view>
			</view>
		</view>

		<!-- 广告位 -->
		<view class="banner" v-if="swiper.data.length">
			<swiper class="swiper_banner" :indicator-dots="swiper.indicatordots" :autoplay="swiper.autoplay" :interval="swiper.interval"
			 :vertical="swiper.vertical" :circular="swiper.circular" :indicator-color="swiper.indicatorcolor"
			 :indicator-active-color="swiper.indicatoractivecolor" :easing-function="swiper.easingfunction" :current="swiper.current">
				<block v-for="(item,index) in swiper.data" v-key="index">
					<swiper-item v-if="!item.error">
						<image :src="item.image" :data-index="index" @load="bannerImageEvent" @error="bannerImageEvent" />
					</swiper-item>
				</block>
			</swiper>
		</view>

		<!-- 选项卡 -->
		<view class="swiper-tab">
			<view v-for="(item,index) in swiperTab.list" v-key="index" :class="['swiper-tab-item', swiperTab.currentIndex==index?'actived':'']"
			 :data-index="index" @tap="clickTab">{{item}}</view>
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<!-- 各球类赛事 -->
		<!-- <block v-for="(item,index) in swiperTab.list" v-key="index">v-if="swiperTab.currentIndex==index" -->
		<block>
			<view class="mathch-container">
				<view class="mathch-list-container" data-url="/pages/match/detail" @tap="openUrl">
					<view class="mathch-item" v-for="(item,index) in swiperTabData[swiperTab.currentIndex]">
						<view class="mathch-item-image">
							<image :src="item.img" />
						</view>
						<view class="mathch-item-left">
							<view class="mathch-item-title">{{item.title}}</view>
							<view class="mathch-item-address view-image-center">
								<image src="/static/images/point_gray.png" />
								<view class="point-text C999999">{{item.address}}</view>
							</view>
							<view class="mathch-item-expire-time C999999">
								报名截止时间： <span class="C656565">{{item.time}}</span>
							</view>
							<view class="mathch-item-mathch-time C999999">
								比赛时间： <span class="C656565">{{item.time2}}</span>
							</view>
							<view class="mathch-item-peoples C999999">
								报名人数： <span class="C656565">{{item.num}}</span>
							</view>
						</view>
					</view>
				</view>
			</view>
		</block>

		<!-- 底部空位，防止内容被菜单遮挡 -->
		<view class="space-bottom"></view>

		<!-- 底部菜单 -->
		<custom-tabbar :selected="3"></custom-tabbar>
	</view>
</template>

<script>
	import {
		openUrl
	} from "common/utils/util.js";
	import customTabbar from "components/custom-tabbar/index.vue";

	export default {
		components: {
			customTabbar
		},
		data() {
			return {
				swiperTab: {
					list: ["兵乓球", "羽毛球", "排球", "篮球", "足球", "网球"],
					currentIndex: 0, //tab页索引值
				},
				swiperTabData: [
					[{
						id: "1",
						img: '/static/images/test/banner.png',
						title: '2019兵乓球',
						address: '浙江省宁波高新区',
						time: '3020-11-01',
						time2: '3020-11-01',
						num: '30/500'
					}, {
						id: "2",
						img: '/static/images/test/banner.png',
						title: '2020兵乓球',
						address: '浙江省宁波高新区',
						time: '3020-11-01',
						time2: '3020-11-01',
						num: '30/500'
					}],
					[{
						id: "1",
						img: '/static/images/test/banner.png',
						title: '2019羽毛球',
						address: '浙江省宁波高新区',
						time: '3020-11-01',
						time2: '3020-11-01',
						num: '30/500'
					}, {
						id: "2",
						img: '/static/images/test/banner.png',
						title: '2020羽毛球',
						address: '浙江省宁波高新区',
						time: '3020-11-01',
						time2: '3020-11-01',
						num: '30/500'
					}]
				],
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
							image: '/static/images/test/banner2.png'
						},
						{
							image: '/static/images/test/banner.png'
						},
						{
							image: '/static/images/test/banner3.png'
						}
					],
				}
			}
		},
		methods: {
			openUrl,
			//广告图片加载完成回调，解决图片不能加载时的空白问题
			bannerImageEvent: function(e) {
				if (e.type == 'error') {
					this.swiper.data.splice(e.target.dataset.index, 1);
				} else if (e.type == 'load') {
					if (this.swiper.autoplay) return;
					this.swiper.autoplay = true;
				}
			},
			clickTab: function(e) {
				this.swiperTab.currentIndex = e.target.dataset.index;

				//切换球类

			},


		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}

	.search-container {
		height: 60rpx;
		background-color: #1fc287;
		display: flex;
		flex-direction: row;
		padding-top: 14rpx;
		padding-bottom: 14rpx;
		justify-content: center;
		align-items: center;
	}

	.search-container .point-image {
		width: 28rpx;
		text-align: right;
		padding-left: 22rpx;
	}

	.search-container .point-image image {
		width: 28rpx;
		height: 28rpx;
	}

	.search-container .point-text {
		font-size: 28rpx;
		color: #ffffff;
	}

	.search-container .point-more {
		width: 28rpx;
		padding-right: 33rpx;
		padding-left: 5rpx;
	}

	.search-container .point-more image {
		width: 28rpx;
		height: 28rpx;
	}

	.search-container .search-input {
		flex: 1;
		margin-right: 58rpx;
		border-radius: 2em 2em 2em 2em;
		background-color: #66dbae;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 60rpx;
	}

	.search-input .search-input-input {
		flex: 1;
	}

	.search-input .search-input-input input {
		flex: 1;
		width: 100%;
		padding-left: 30rpx;
		font-size: 28rpx;
		height: 100%;
		color: #fff;
	}

	.search-input-phcolor {
		color: #fff;
		font-size: 28rpx;
	}

	.search-input .search-input-button {
		padding-left: 20rpx;
		width: 60rpx;
	}

	.search-input .search-input-button image {
		width: 28rpx;
		height: 28rpx;
	}

	.swiper-tab .swiper-tab-item {
		font-size: 28rpx;
		font-weight: normal;
	}

	.mathch-container {
		width: 100%;
	}

	.mathch-list-container {
		margin: 30rpx 30rpx 0rpx 30rpx;
		padding-bottom: 30rpx;
		border-bottom: 1rpx solid #edeeef;
	}

	.mathch-item {
		width: 100%;
		height: 220rpx;
		display: flex;
		flex-direction: row;
		margin-bottom: 20rpx;
	}

	.mathch-item-image {
		width: 240rpx;
		height: 100%;
	}

	.mathch-item-image image {
		width: 100%;
		height: 100%;
	}

	.mathch-item-left {
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		padding-left: 20rpx;
	}

	.mathch-item-title {
		height: 70rpx;
		line-height: 34rpx;
		font-size: 24rpx;
		color: #282828;
		overflow: hidden;
		font-weight: bold;
	}

	.mathch-item-address {
		height: 64rpx;
		color: #999999;
		line-height: 64rpx;
		justify-items: center;
		justify-content: left;
	}

	.mathch-item-address image {
		float: left;
		padding-top: 20rpx;
		width: 27rpx;
		height: 27rpx;
	}

	.point-text {
		padding-left: 5rpx;
		font-size: 22rpx;
		line-height: 64rpx;
		float: left;
	}

	.mathch-item-mathch-time,
	.mathch-item-expire-time {
		height: 32rpx;
		font-size: 22rpx;
		line-height: 22rpx;
		padding-bottom: 10rpx;
	}

	.mathch-item-peoples {
		height: 22rpx;
		font-size: 22rpx;
		line-height: 22rpx;
	}
</style>
