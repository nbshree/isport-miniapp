<template>
	<view>
		<!-- 空位 -->
		<view class="space20"></view>

		<view class="team-info-container">
			<view class="_table-item my-table-item">
				<view class="_table-flex-auto my-flex-auto">发 起 人：张三（1398832230）</view>
			</view>
			<view class="_table-item my-table-item">
				<view class="_table-flex-auto my-flex-auto">创建时间：2002-11-11</view>
			</view>
			<view class="_table-item my-table-item">
				<view class="_table-flex-auto my-flex-auto">参赛项目：乒乓球</view>
			</view>
			<view class="_table-item my-table-item">
				<view class="_table-flex-auto my-flex-auto">赛事类型：乒乓球　个人赛</view>
			</view>
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<view class="team-container">
			<view class="_table-item _table-title">
				<view class="_table-flex-auto">序号</view>
				<view class="_table-flex-auto">性别</view>
				<view class="_table-flex-auto">年龄</view>
				<view class="_table-flex-auto">积分</view>
				<view class="_table-flex-fixed fixed-100">操作</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-auto">1</view>
				<view class="_table-flex-auto">男</view>
				<view class="_table-flex-auto">20</view>
				<view class="_table-flex-auto">1200</view>
				<view class="_table-flex-fixed fixed-100　display-button">领队</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-auto">2</view>
				<view class="_table-flex-auto">男</view>
				<view class="_table-flex-auto">36</view>
				<view class="_table-flex-auto">1200</view>
				<view class="_table-flex-fixed fixed-100"></view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-auto">3</view>
				<view class="_table-flex-auto">男</view>
				<view class="_table-flex-auto">20</view>
				<view class="_table-flex-auto">200</view>
				<view class="_table-flex-fixed fixed-100"></view>
			</view>
		</view>

		<view class="team-container">
			<view class="_table-item _table-title">
				<view class="_table-flex-auto">序号</view>
				<view class="_table-flex-auto">姓名</view>
				<view class="_table-flex-auto">性别</view>
				<view class="_table-flex-auto">年龄</view>
				<view class="_table-flex-auto">积分</view>
				<view class="_table-flex-auto">项目</view>
				<view class="_table-flex-fixed fixed-100">操作</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-auto">1</view>
				<view class="_table-flex-auto">李世民</view>
				<view class="_table-flex-auto">男</view>
				<view class="_table-flex-auto">3400</view>
				<view class="_table-flex-auto">12200</view>
				<view class="_table-flex-auto">马球</view>
				<view class="_table-flex-fixed fixed-100　display-button">领队</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-auto">2</view>
				<view class="_table-flex-auto">高球</view>
				<view class="_table-flex-auto">男</view>
				<view class="_table-flex-auto">1400</view>
				<view class="_table-flex-auto">1200</view>
				<view class="_table-flex-auto">麻将</view>
				<view class="_table-flex-fixed fixed-100"></view>
			</view>
		</view>


		<!-- 防止为底部菜单遮住 -->
		<view class="space-bottom" />
		<view class="button-bottom-float">加入团队</view>
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

	.team-info-container {
		padding: 0rpx 30rpx 30rpx 30rpx;
		background-color: #fff;
		font-size: 28rpx;
	}

	.my-table-item {
		border-bottom: 1rpx solid #dcddde;
	}

	.my-flex-auto {
		text-align: left;
	}
</style>
