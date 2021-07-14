<template>
	<view>
		<!-- 空位 -->
		<view class="space20"></view>

		<view class="team-container">
			<view class="_table-item _table-title">
				<view class="_table-flex-fixed fixed-100">序号</view>
				<view class="_table-flex-auto">团队名称</view>
				<view class="_table-flex-auto">发起人</view>
				<view class="_table-flex-fixed fixed-100">人数</view>
				<view class="_table-flex-fixed fixed-100">操作</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">张德林</view>
				<view class="_table-flex-auto">王小二</view>
				<view class="_table-flex-fixed fixed-100">20</view>
				<view class="_table-flex-fixed fixed-100 display-button" data-url="/pages/my/teamJoin" @tap="openUrl">邀请</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">张德林</view>
				<view class="_table-flex-auto">王小二</view>
				<view class="_table-flex-fixed fixed-100">20</view>
				<view class="_table-flex-fixed fixed-100 display-button" data-url="/pages/my/teamJoin" @tap="openUrl">查看</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">张德林</view>
				<view class="_table-flex-auto">王小二</view>
				<view class="_table-flex-fixed fixed-100">20</view>
				<view class="_table-flex-fixed fixed-100 display-button" data-url="/pages/my/teamJoin" @tap="openUrl">查看</view>
			</view>
		</view>


		<!-- 防止为底部菜单遮住 -->
		<view class="space-bottom" />
		<view class="button-bottom-float" data-url="/pages/my/teamCreate" @tap="openUrl">创建团队</view>
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
			openUrl,
		}
	}
</script>

<style>
	page {
		background-color: #f6f6fd;
	}

	.team-container {
		padding: 30rpx;
		background-color: #fff;
		font-size: 28rpx;
	}

	.fixed-100 {
		width: 100rpx;
	}

	.display-button {
		color: #1cb68f;
		border: 1rpx solid #1cb68f;
		border-bottom-right-radius: 28rpx;
		border-bottom-left-radius: 28rpx;
		border-top-right-radius: 28rpx;
		border-top-left-radius: 28rpx;
	}
</style>
