<template>
	<view>
		<view class="bill-container">
			<view class="bill-item">
				<view class="item-row1">
					<view class="bill-name">商品名称</view>
					<view class="bill-price">-100.00元</view>
				</view>
				<view class="bill-time">2010-30-01 17:00</view>
			</view>

			<view class="bill-item">
				<view class="item-row1">
					<view class="bill-name">商品名称</view>
					<view class="bill-price">-100.00元</view>
				</view>
				<view class="bill-time">2010-30-01 17:00</view>
			</view>

			<view class="bill-item">
				<view class="item-row1">
					<view class="bill-name">商品名称</view>
					<view class="bill-price">-100.00元</view>
				</view>
				<view class="bill-time">2010-30-01 17:00</view>
			</view>

			<view class="bill-item">
				<view class="item-row1">
					<view class="bill-name">商品名称</view>
					<view class="bill-price">-100.00元</view>
				</view>
				<view class="bill-time">2010-30-01 17:00</view>
			</view>

			<view class="bill-item">
				<view class="item-row1">
					<view class="bill-name">商品名称</view>
					<view class="bill-price">-100.00元</view>
				</view>
				<view class="bill-time">2010-30-01 17:00</view>
			</view>

			<view class="bill-item">
				<view class="item-row1">
					<view class="bill-name">商品名称</view>
					<view class="bill-price">-100.00元</view>
				</view>
				<view class="bill-time">2010-30-01 17:00</view>
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

	.bill-container {
		padding-left: 30rpx;
		padding-right: 30rpx;
		display: block;
	}

	.bill-item {
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		font-size: 28rpx;
		border-bottom: 1rpx solid #edeef0;
	}

	.bill-item .item-row1 {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: left;
		width: 100%;
		padding-bottom: 18rpx;
	}

	.bill-name {
		flex: 1;
		font-weight: bold;
	}

	.bill-price {
		flex: 1;
		text-align: right;
		color: #fb8a25;
	}

	.bill-time {
		color: #9fa0a4;
	}
</style>
