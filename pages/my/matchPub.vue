<template>
	<view>
		<!-- 选项卡 -->
		<view class="swiper-tab">
			<view v-for="(item,index) in swiperTab.list"  :class="['swiper-tab-item',swiperTab.currentIndex==index?'actived':'']"
			 :data-index="index" @tap="clickTab">{{item}}</view>
		</view>

		<!-- 赛事 -->
		<block v-for="(item,index) in swiperTab.list">
			<view class="mathch-container" v-if="swiperTab.currentIndex===index">
				<view class="mathch-list-container">
					<view class="mathch-item" data-url="/pages/match/publicer" @tap="openUrl">
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
					<view class="mathch-item-actions">
						<block v-if="index===0">
							<view class="action-edit" data-url="/pages/match/create/index" @tap="openUrl">编辑</view>
							<view class="action-delete">删除</view>
						</block>
						<view class="action-edit" v-if="index===1" data-url="/pages/match/publicer?current=1" @tap="openUrl">报名审核</view>
						<view class="action-edit" v-if="index===2" data-url="/pages/match/publicer?current=2" @tap="openUrl">对战分配</view>
						<view class="action-edit" v-if="index===3" data-url="/pages/match/publicer?current=3" @tap="openUrl">录入结果</view>
						<view class="action-edit" v-if="index===4" data-url="/pages/match/sports?current=3" @tap="openUrl">查看</view>
					</view>
				</view>
			</view>
		</block>

		<!-- 防止为底部菜单遮住 -->
		<view class="space-bottom" />
		<view class="button-bottom-float" data-url="/pages/match/create/index" @tap="openUrl">创建赛事</view>
	</view>
</template>

<script>
	import {
		openUrl
	} from "common/utils/util.js";
	import request from "common/utils/request.js";

	export default {
		data() {
			return {
				swiperTab: {
					list: ["草稿", "待审核", "待开始", "进行中", "已结束"],
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
