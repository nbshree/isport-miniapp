<template>
	<view>
		<!-- 选项卡 -->
		<view class="swiper-tab">
			<view v-for="(item,index) in swiperTab.list" :class="['swiper-tab-item' ,swiperTab.currentIndex==index?'actived':'']"
			 :data-index="index" @tap="clickTab">{{item}}</view>
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<!-- 项目信息 -->
		<view v-if="swiperTab.currentIndex===0" class="sports-info-container sports-tab-content">
			<view class="_item-info">
				<view class="_item-info-title">赛事时间</view>
				<view class="_item-info-content">2030-01-35 08:00 ~ 3020-01-34 17:00 共2亿天</view>
			</view>
			<view class="_item-info">
				<view class="_item-info-title">比赛地点</view>
				<view class="_item-info-content">浙江省宁波市东钱湖开发区环东钱湖</view>
			</view>
			<view class="_item-info">
				<view class="_item-info-title">比赛赛制</view>
				<view class="_item-info-content">单人比赛（循环赛＋淘汰赛 3局2胜）20人 分4组 每组5人 小组晋级1人（根据最终实际报名人数改变）</view>
			</view>
			<view class="_item-info">
				<view class="_item-info-title">报名人数</view>
				<view class="_item-info-content">20</view>
			</view>
			<view class="_item-info">
				<view class="_item-info-title">报名费</view>
				<view class="_item-info-content">免费 (100元)</view>
			</view>
			<view class="_item-info">
				<view class="_item-info-title">报名要求</view>
				<view class="_item-info-content">无</view>
			</view>
			<view class="_item-info">
				<view class="_item-info-title">积分奖励规则</view>
				<view class="_item-info-content">每场比赛根据当时双方的积分差，确定胜负方的积分加减。</view>
			</view>
			<view class="_item-info point-note">
				双方积分差　高分方胜双方加减分 低分方胜双方加减分
			</view>
			<view class="point-record-item">
				<view>0 : 12</view>
				<view>8</view>
				<view>8</view>
			</view>
			<view class="point-record-item">
				<view>0 : 12</view>
				<view>8</view>
				<view>8</view>
			</view>
			<view class="point-record-item">
				<view>0 : 12</view>
				<view>8</view>
				<view>8</view>
			</view>
		</view>

		<!-- 报名情况 -->
		<view v-if="swiperTab.currentIndex===1" class="sports-signup-container sports-tab-content">
			<view class="sports-signup-sum">当前报名人数：3/20</view>
			<view class="point-record-item signup-record-item-title">
				<view>序号</view>
				<view>姓名</view>
				<view>积分</view>
			</view>
			<view class="point-record-item">
				<view>1</view>
				<view>张**</view>
				<view>1200</view>
			</view>
			<view class="point-record-item">
				<view>2</view>
				<view>王**</view>
				<view>1100</view>
			</view>
			<view class="point-record-item">
				<view>3</view>
				<view>李**</view>
				<view>980</view>
			</view>
		</view>

		<!-- 完事进程 -->
		<view v-if="swiperTab.currentIndex===2" class="sports-course-container sports-tab-content">
			<view class="_item-title">
				<view class="_item-title-icon"></view>
				<view class="_item-title-text">第一场：循环赛</view>
			</view>
			<view class="_item-info-content course-record-item-info">2030-01-35 08:00 3号桌 甲组</view>
			<view class="course-item signup-record-item-title">
				<view class="course-item-small">场次</view>
				<view class="course-item-lg">选手姓名(号码)</view>
				<view class="course-item-lg">选手姓名(号码)</view>
			</view>
			<view class="course-item">
				<view class="course-item-small">1</view>
				<view class="course-item-lg">张**(189****9909)</view>
				<view class="course-item-lg">李**(189****9909)</view>
			</view>
			<view class="course-item">
				<view class="course-item-small">2</view>
				<view class="course-item-lg">王**(189****9909)</view>
				<view class="course-item-lg">黄**(189****9909)</view>
			</view>
			<view class="course-item">
				<view class="course-item-small">3</view>
				<view class="course-item-lg">李**(189****9909)</view>
				<view class="course-item-lg">丁*(189****9909)</view>
			</view>
			<view class="course-item-result">
				<span class="flag-yellow">结果：</span>
				李**(189****9909) 丁*(189****9909)
				<span class="flag-yellow">胜</span>
			</view>

			<view class="_item-info-content course-record-item-info">2030-01-35 09:00 3号桌 甲组</view>
			<view class="course-item signup-record-item-title">
				<view class="course-item-small">场次</view>
				<view class="course-item-lg">选手姓名(号码)</view>
				<view class="course-item-lg">选手姓名(号码)</view>
			</view>
			<view class="course-item">
				<view class="course-item-small">1</view>
				<view class="course-item-lg">张**(189****9909)</view>
				<view class="course-item-lg">李**(189****9909)</view>
			</view>
			<view class="course-item">
				<view class="course-item-small">2</view>
				<view class="course-item-lg">王**(189****9909)</view>
				<view class="course-item-lg">黄**(189****9909)</view>
			</view>
			<view class="course-item">
				<view class="course-item-small">3</view>
				<view class="course-item-lg">李**(189****9909)</view>
				<view class="course-item-lg">丁*(189****9909)</view>
			</view>
			<view class="course-item-result">
				<span class="flag-yellow">结果：</span>
				李**(189****9909) 丁*(189****9909)
				<span class="flag-yellow">胜</span>
			</view>


			<view class="_item-title">
				<view class="_item-title-icon"></view>
				<view class="_item-title-text">第二场：16进8</view>
			</view>

			<view class="_item-title">
				<view class="_item-title-icon"></view>
				<view class="_item-title-text">第三场：8进4（待开始）</view>
			</view>

			<view class="_item-title">
				<view class="_item-title-icon"></view>
				<view class="_item-title-text">第四场：4进2（待开始）</view>
			</view>

			<view class="_item-title">
				<view class="_item-title-icon"></view>
				<view class="_item-title-text">第五场：决赛（待开始）</view>
			</view>
		</view>

		<!-- 比赛结果 -->
		<view v-if="swiperTab.currentIndex===3" class="sports-result-container sports-tab-content">
			<view class="course-item signup-record-item-title">
				<view class="result-item-small">名次</view>
				<view class="course-item-lg">选手姓名(号码)</view>
			</view>
			<view class="course-item">
				<view class="result-item-small">1</view>
				<view class="course-item-lg">张**(189****9909)</view>
			</view>
			<view class="course-item">
				<view class="result-item-small">2</view>
				<view class="course-item-lg">王**(189****9909)</view>
			</view>
			<view class="course-item">
				<view class="result-item-small">3</view>
				<view class="course-item-lg">李**(189****9909)</view>
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
				swiperTab: {
					list: ["项目信息", "报名情况", "赛事进程", "比赛结果"],
					currentIndex: 0, //tab页索引值
				}
			}
		},
		onLoad: function(options) {
			console.log(options)
			if (options !== undefined && options.current !== undefined) {
				this.swiperTab.currentIndex = Number.parseInt(options.current);
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

	.sports-tab-content {
		background-color: #fff;
		padding-right: 28rpx;
		padding-left: 28rpx;
	}

	._item-title {
		padding-top: 30rpx;
	}

	.sports-info-container {
		padding-bottom: 30rpx;
	}

	.sports-info-container .point-note {
		height: 78rpx;
		background-color: #b3ebde;
		text-align: center;
		color: #1cb68f;
		margin-top: 30rpx;
	}

	.point-record-item {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		justify-items: center;
		height: 78rpx;
		font-size: 28rpx;
		line-height: 78rpx;
		border-bottom: 1rpx solid #b3ebde;
		text-align: center;
	}

	.point-record-item view {
		flex: 1;
	}


	.sports-signup-container {
		padding-bottom: 30rpx;
	}

	.sports-signup-sum {
		text-align: center;
		font-size: 28rpx;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		color: #fc8b2b;
	}

	.signup-record-item-title {
		height: 78rpx;
		background-color: #beebd3;
		color: #1cb68f;
	}


	.sports-course-container {
		padding-bottom: 30rpx;
		font-size: 28rpx;
	}

	.course-item {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		justify-items: center;
		height: 78rpx;
		font-size: 28rpx;
		line-height: 78rpx;
		border-bottom: 1rpx solid #b3ebde;
		text-align: center;
	}

	.course-item .course-item-lg {
		flex: 1;
	}

	.course-item-small {
		width: 120rpx;
	}

	.course-record-item-info {
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}

	.course-item-result {
		padding-top: 5rpx;
	}

	.flag-yellow {
		color: #fa8c25;
	}


	.result-item-small {
		width: 260rpx;
	}
</style>
