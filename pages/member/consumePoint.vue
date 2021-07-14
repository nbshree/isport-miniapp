<template>
	<view>
		<view class="consume-point-container bg-header-image">
			<view class="point-value">200</view>
			<view class="point-title">-- 当前积分 --</view>
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<view class="point-record-container">
			<view class="_item-title">
				<view class="_item-title-icon"></view>
				<view class="_item-title-text">积分记录</view>
			</view>

			<view class="point-item">
				<view class="item-row1">
					<view class="point-name">商品名称</view>
					<view class="point-price">-100.00元</view>
				</view>
				<view class="item-row1">
					<view class="point-time">2011-03-25 18:00</view>
					<view class="point-point">+100积分</view>
				</view>
			</view>

			<view class="point-item">
				<view class="item-row1">
					<view class="point-name">商品名称</view>
					<view class="point-price">-100.00元</view>
				</view>
				<view class="item-row1">
					<view class="point-time">2011-03-25 18:00</view>
					<view class="point-point">+100积分</view>
				</view>
			</view>

			<view class="point-item">
				<view class="item-row1">
					<view class="point-name">商品名称</view>
					<view class="point-price">-100.00元</view>
				</view>
				<view class="item-row1">
					<view class="point-time">2011-03-25 18:00</view>
					<view class="point-point">+100积分</view>
				</view>
			</view>
		</view>
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

			}
		},
		methods: {

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


	.point-record-container {
		background-color: #fff;
		padding: 20rpx 28rpx 20rpx 28rpx;
	}

	.point-item {
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		font-size: 28rpx;
		color: #636465;
		border-bottom: 1rpx solid #edeef0;
	}

	.point-item .item-row1 {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: left;
		width: 100%;
		padding-bottom: 18rpx;
	}

	.point-name {
		flex: 1;
		font-weight: bold;
	}

	.point-price {
		flex: 1;
		text-align: right;
		color: #98999a;
	}

	.point-time {
		flex: 1;
		color: #9fa0a4;
		font-size: 28rpx;
		line-height: 28rpx;
	}

	.point-point {
		flex: 1;
		color: #fb8a25;
		font-size: 28rpx;
		line-height: 28rpx;
		text-align: right
	}
</style>
