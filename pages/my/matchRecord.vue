<template>
	<view>
		<!-- 选项卡 -->
		<view class="swiper-tab">
			<view v-for="(item,index) in swiperTab.list" :class="['swiper-tab-item' ,swiperTab.currentIndex==index?'actived':'']"
			 :data-index="index" @tap="clickTab">{{item}}</view>
		</view>

		<!-- 赛事 -->
		<block v-for="(item,index) in swiperTab.list">
			<view class="mathch-container" v-if="swiperTab.currentIndex===index">
				<view class="mathch-list-container" :data-url="'/pages/match/sports?current='+(index+1)" @tap="openUrl">
					<view class="mathch-item">
						<view class="mathch-item-image">
							<image src="/static/images/test/banner.png" />
							<view class="mathch-flag">小组循环中</view>
						</view>
						<view class="mathch-item-left">
							<view class="mathch-item-title">2019年圣诞马拉松比赛体育训练馆我很长长我很长长我很长长我很长长我</view>
							<view class="mathch-item-address view-image-center">
								<image src="/static/images/point_gray.png" />
								<view class="point-text C999999">浙江省宁波高新区</view>
							</view>
							<view class="mathch-item-expire-time C999999">
								报名截止时间： <span class="C656565">3020-11-01</span>
							</view>
							<view class="mathch-item-mathch-time C999999">
								比赛时间： <span class="C656565">3020-11-01</span>
							</view>
							<view class="mathch-item-peoples C999999">
								报名人数： <span class="C656565">30/500</span>
							</view>
						</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import {
		openUrl
	} from "common/utils/util.js";
	import request from "common/utils/request.js";

	const app = getApp();

	export default {
		data() {
			return {
				swiperTab: {
					list: ["待开赛", "进行中", "已结束"],
					currentIndex: 0, //tab页索引值
				}
			}
		},
		methods: {
			openUrl,
			clickTab: function(e) {
				this.swiperTab.currentIndex = e.target.dataset.index;
			}
		}
	}
</script>

<style>
	.mathch-container {
		width: 100%;
	}

	.mathch-list-container {
		margin: 30rpx 30rpx 0rpx 30rpx;
		padding-bottom: 28rpx;
		border-bottom: 1rpx solid #edeeef;
	}

	.mathch-item {
		width: 100%;
		height: 220rpx;
		display: flex;
		flex-direction: row;
	}

	.mathch-item-image {
		position: relative;
		width: 240rpx;
		height: 100%;
	}

	.mathch-item-image image {
		width: 100%;
		height: 100%;
	}

	.mathch-item-image .mathch-flag {
		position: absolute;
		top: 0rpx;
		background-color: #fc8824;
		height: 44rpx;
		font-size: 28rpx;
		line-height: 44rpx;
		color: #fff;
		border-bottom-right-radius: 8rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
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

	.mathch-item-actions {
		height: 52;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-top: 28rpx;
	}
</style>
