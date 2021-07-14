<template>
	<view>
		<view class="consume-point-container bg-header-image">
			<view class="point-value">200</view>
			<view class="point-title">-- 当前积分 --</view>
		</view>

		<!-- 选项卡 -->
		<view class="swiper-tab">
			<view v-for="(item,index) in swiperTab.list" :class="['swiper-tab-item', swiperTab.currentIndex==index?'actived':'']"
			 :data-index="index" @tap="clickTab">{{item}}</view>
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<view class="sports-points-container" v-if="swiperTab.currentIndex===0">
			<view class="sports-points-item">
				<view class="item-content">
					<view class="item-left">网球　<span class="point-win-text">胜利</span></view>
					<view class="item-right point-win-value">+100</view>
				</view>
				<view class="item-time">2030-10-80 12:99 </view>
			</view>
			<view class="sports-points-item">
				<view class="item-content">
					<view class="item-left">仙道　<span class="point-lost-text">失败</span></view>
					<view class="item-right point-lost-value">-100</view>
				</view>
				<view class="item-time">2030-10-80 12:99 </view>
			</view>
		</view>

		<view class="sports-points-container" v-if="swiperTab.currentIndex===1">
			<view class="sports-points-item">
				<view class="item-content">
					<view class="item-left">网球　<span class="point-win-text">胜利</span></view>
					<view class="item-right point-win-value">+100</view>
				</view>
				<view class="item-time">2030-10-80 12:99 </view>
			</view>
		</view>

		<view class="sports-points-container" v-if="swiperTab.currentIndex===2">
			<view class="sports-points-item">
				<view class="item-content">
					<view class="item-left">仙道　<span class="point-lost-text">失败</span></view>
					<view class="item-right point-lost-value">-100</view>
				</view>
				<view class="item-time">2030-10-80 12:99 </view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from "common/utils/request.js";
	
	export default {
		data() {
			return {
				swiperTab: {
					list: ["全部", "获取", "扣除"],
					currentIndex: 0, //tab页索引值
				}
			}
		},
		methods: {
			clickTab: function(e) {
				this.swiperTab.currentIndex = e.target.dataset.index;
			}
		}
	}
</script>

<style>
	page {
		background-color: #f6f6fd;
	}

	.consume-point-container {
		height: 220rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #fff;
		background-size: 100%;
	}

	.consume-point-container .point-value {
		font-size: 48rpx;
		font-weight: bold;
	}

	.consume-point-container .point-title {
		font-size: 28rpx;
	}


	.sports-points-container {
		padding-left: 30rpx;
		padding-right: 30rpx;
		padding-bottom: 30rpx;
		background-color: #fff;
	}

	.sports-points-item {
		font-size: 28rpx;
		color: #9e9fa0;
		border-bottom: 1rpx solid #f0f0f0;
	}

	.sports-points-item .item-content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding-top: 30rpx;
	}

	.sports-points-item .item-left {
		flex: 1;
	}

	.sports-points-item .item-time {
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		font-size: 26rpx;
	}

	.sports-points-item .point-win-text,
	.sports-points-item .point-lost-text {
		color: #000;
		font-weight: bold;
	}

	.sports-points-item .point-win-value {
		color: #fa8924;
	}
</style>
