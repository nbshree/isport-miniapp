<template>
	<view>
		<!-- 空位 -->
		<view class="space20"></view>

		<!-- 项目详情 -->
		<view class="detail-container">
			<view class="detail-image">
				<image src="/static/images/test/banner2.png" />
			</view>
			<view class="detail-left">
				<view class="detail-title">{{mInfo.name}}</view>
				<view class="action-edit detail-enter-num">报名中(20/50人)</view>
			</view>
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<!-- 赛制 -->
		<view class="scheme-container">
			<view class="_item-title">
				<view class="_item-title-icon"></view>
				<view class="_item-title-text">赛制项目</view>
			</view>
			<view class="scheme-list-item" v-for="(item,index) in schemeList">
				<view class="item-name">项目名称</view>
				<view class="item-num">{{item.num}}</view>
				<view class="item-points">{{item.points}}</view>

				<view v-if="item.status!=2" :class="['item-status',item.statusClass]" :data-url="item.url" @tap="openUrl">{{item.statusTxt}}</view>
				<view v-if="item.status==2" :class="['item-status',item.statusClass]">{{item.statusTxt}}</view>
			</view>
			<!-- 	<view class="scheme-list-item">
				<view class="item-name">项目名称</view>
				<view class="item-num">（20/20)</view>
				<view class="item-points">100~200分</view>
				<view class="item-status status-green" data-url="/pages/match/signup/index?current=0" @tap="openUrl">报名</view>
			</view>
			<view class="scheme-list-item">
				<view class="item-name">项目名称</view>
				<view class="item-num">（20/20)</view>
				<view class="item-points">100~200分</view>
				<view class="item-status status-orange" data-url="/pages/match/signup/index?current=1" @tap="openUrl">已报名</view>
			</view> -->
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<!-- 简介 -->
		<view class="introduction-container">
			<view class="_item-title">
				<view class="_item-title-icon"></view>
				<view class="_item-title-text">赛制简介</view>
			</view>
			<view class="detail-item" />
			<view class="detail-item">
				<view class="detail-item-title">赛事名称</view>
				<view class="detail-item-content">{{mInfo.name}}</view>
			</view>
			<view class="detail-item">
				<view class="detail-item-title">赛事时间</view>
				<view class="detail-item-content">{{mInfo.name2}}</view>
			</view>
			<view class="detail-item">
				<view class="detail-item-title">比赛地点</view>
				<view class="detail-item-content">{{mInfo.name3}}</view>
			</view>
			<view class="detail-item">
				<view class="detail-item-title">报名时间</view>
				<view class="detail-item-content">{{mInfo.name4}}</view>
			</view>
			<view class="detail-item">
				<view class="detail-item-title">主办单位</view>
				<view class="detail-item-content">{{mInfo.name5}}</view>
			</view>
			<view class="detail-item">
				<view class="detail-item-title">承办单位</view>
				<view class="detail-item-content">{{mInfo.name6}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		openUrl
	} from "common/utils/util.js";

	export default {
		data() {
			return {
				matchId: "",

				// 赛制项目
				schemeList: [{
					num: '(20/20)',
					points: '100~200分',
					id: '1111',
					status: '2',
					statusTxt: '已满',
					statusClass: 'status-gray',
					url: ''
				}, {
					num: '(10/20)',
					points: '100~200分',
					id: '1112',
					status: '1',
					statusTxt: '已报名',
					statusClass: 'status-orange',
					url: '/pages/match/signup?current=1&id=1112'
				}, {
					num: '(15/20)',
					points: '100~200分',
					id: '1114',
					status: '0',
					statusTxt: '报名',
					statusClass: 'status-green',
					url: '/pages/match/signup?current=0&id=1114'
				}],

				// 赛事简介内容
				mInfo: {
					name: '浙江省宁波市东钱湖开发区3000千米长跑比赛',
					name2: '2030-01-35 08:00 ~ 3020-01-34 17:00 共2亿天',
					name3: '浙江省宁波市东钱湖开发区环东钱湖',
					name4: '2030-01-35 08:00 ~ 3020-01-34 17:00',
					name5: '银河系人类大联盟未来发展委员会',
					name6: '地球联邦滑虾帝国',
				}
			}
		},
		onLoad(option) {
			this.matchId = option.id;
		},
		methods: {
			openUrl,
		}
	}
</script>

<style>
	.detail-container {
		height: 180rpx;
		padding: 20rpx 28rpx 20rpx 28rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.detail-container .detail-image {
		width: 240rpx;
		height: 100%;
	}

	.detail-container .detail-image image {
		width: 100%;
		height: 100%;
	}

	.detail-left {
		flex: 1;
		padding-left: 18rpx;
	}

	.detail-left .detail-title {
		height: 92rpx;
		font-size: 28rpx;
		line-height: 46rpx;
		overflow: hidden;
	}

	.detail-left .detail-enter-num {
		height: 52rpx;
		margin: 23rpx 0rpx 13rpx 0rpx;
		background-color: #fc8824;
		width: 270rpx;
		font-size: 28rpx;
	}




	.scheme-container {
		padding: 20rpx 28rpx 20rpx 28rpx;
	}

	.scheme-list-item {
		height: 44rpx;
		padding: 10rpx 0rpx 10rpx 0rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.scheme-list-item view {
		height: 44rpx;
		font-size: 25rpx;
		line-height: 44rpx;
		color: #808182;
	}

	.scheme-list-item .item-name {
		flex: 1;
	}

	.scheme-list-item .item-num {
		flex: 1;
	}

	.scheme-list-item .item-points {
		flex: 1;
	}

	.scheme-list-item .item-status {
		width: 114rpx;
		border-radius: 25rpx;
		text-align: center;
	}

	.scheme-list-item .status-gray {
		border: 2rpx solid #bbbcbd;
		color: #bbbcbd;
	}

	.scheme-list-item .status-green {
		border: 2rpx solid #1eb88f;
		color: #1eb88f;
	}

	.scheme-list-item .status-orange {
		border: 2rpx solid #fb8a24;
		color: #fb8a24;
	}



	.introduction-container {
		padding: 20rpx 28rpx 20rpx 28rpx;
	}

	.introduction-container .detail-item {
		padding-bottom: 28rpx;
	}

	.detail-item-title {
		font-size: 28rpx;
		color: #677879;
		line-height: 48rpx;
	}

	.detail-item-content {
		font-size: 28rpx;
		color: #a1a2a3;
	}
</style>
