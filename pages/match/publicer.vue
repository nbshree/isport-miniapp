<template>
	<view>
		<!-- 选项卡 -->
		<view class="swiper-tab">
			<view v-for="(item,index) in swiperTab.list" :class="['swiper-tab-item',swiperTab.currentIndex==index?'actived':'']"
			 :data-index="index" @tap="clickTab">{{item}}</view>
		</view>

		<!-- 空位 -->
		<view class="space20 GB-F6F6FD" />

		<!-- 项目信息 -->
		<view v-if="swiperTab.currentIndex===0" class="sports-info-container">
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
			<view class="_table-item _table-title" style="margin-top:28rpx;">
				双方积分差　高分方胜双方加减分 低分方胜双方加减分
			</view>
			<view class="_table-item">
				<view class="_table-flex-auto">0 : 12</view>
				<view class="_table-flex-auto">8</view>
				<view class="_table-flex-auto">8</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-auto">0 : 12</view>
				<view class="_table-flex-auto">8</view>
				<view class="_table-flex-auto">8</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-auto">0 : 12</view>
				<view class="_table-flex-auto">8</view>
				<view class="_table-flex-auto">8</view>
			</view>
		</view>

		<!-- 报名情况 -->
		<view class="signup-container" v-if="swiperTab.currentIndex==1">
			<view class="signup-number">当前报名人数 2/30</view>

			<view class="_table-item _table-title">
				<view class="_table-flex-fixed fixed-100">序号</view>
				<view class="_table-flex-auto">姓名</view>
				<view class="_table-flex-fixed fixed-100">年龄</view>
				<view class="_table-flex-fixed fixed-100">性别</view>
				<view class="_table-flex-auto">积分</view>
				<view class="_table-flex-fixed fixed-100">操作</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">张大勇</view>
				<view class="_table-flex-fixed fixed-100">80</view>
				<view class="_table-flex-fixed fixed-100">不明</view>
				<view class="_table-flex-auto">1200</view>
				<view class="_table-flex-fixed fixed-100 display-button">剔除</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">2</view>
				<view class="_table-flex-auto">张</view>
				<view class="_table-flex-fixed fixed-100">80</view>
				<view class="_table-flex-fixed fixed-100">不明</view>
				<view class="_table-flex-auto">1</view>
				<view class="_table-flex-fixed fixed-100 display-button">剔除</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">3</view>
				<view class="_table-flex-auto">张勇</view>
				<view class="_table-flex-fixed fixed-100">80</view>
				<view class="_table-flex-fixed fixed-100">不明</view>
				<view class="_table-flex-auto">12000</view>
				<view class="_table-flex-fixed fixed-100 display-button">剔除</view>
			</view>

			<view class="button-bottom-float button-cancel-signup">保存</view>
		</view>

		<!-- 赛事进程 -->
		<view class="sports-container" v-if="swiperTab.currentIndex==2">
			<view class="_item-title">
				<view class="_item-title-icon"></view>
				<view class="_item-title-text">第一场：循环赛<span class="auto-assign">一键分配</span></view>
			</view>

			<view class="sports-info">
				<view class="sports-group-name">甲组</view>
				<view class="sports-address">3号桌</view>
				<view class="sports-referee">裁判：张三(1390000000)</view>
			</view>
			<view class="sports-time">2019-02-09 18:00</view>
			<view class="_table-item _table-title">
				<view class="_table-flex-fixed fixed-100">场次</view>
				<view class="_table-flex-auto">选手姓名(号码)</view>
				<view class="_table-flex-auto">选手姓名(号码)</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">成*(1212012312)</view>
				<view class="_table-flex-auto">郑**(12012010000)</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">成*(1212012312)</view>
				<view class="_table-flex-auto">郑**(12012010000)</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">成*(1212012312)</view>
				<view class="_table-flex-auto">郑**(12012010000)</view>
			</view>


			<view class="sports-time"></view>
			<view class="sports-info">
				<view class="sports-group-name">乙组</view>
				<view class="sports-select-datetime">
					<picker class="_picker_inline" mode="date" :value="date" start="2020-08-09" end="2020-03-09" @change="bindDateChange">
						<view class="_picker-container _picker-date-container">
							<view class="_picker-select-text">选择时间</view>
							<view class="_picker-select_icon">
								<image src="/static/images/icon_down.png" />
							</view>
						</view>
					</picker>
				</view>
				<view class="sports-match-address">
					<view class="_item-form-edit">
						<view class="_item-form-input"><input placeholder="请输入场地" /></view>
						<view class="_item-form-icon">
							<image src="/static/images/icon_edit.png" />
						</view>
					</view>
				</view>
			</view>
			<view class="space20" />
			<view class="_table-item _table-title">
				<view class="_table-flex-fixed fixed-100">场次</view>
				<view class="_table-flex-auto">选手姓名(号码)</view>
				<view class="_table-flex-auto">选手姓名(号码)</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">成*(1212012312)</view>
				<view class="_table-flex-auto">郑**(12012010000)</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">成*(1212012312)</view>
				<view class="_table-flex-auto">郑**(12012010000)</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">成*(1212012312)</view>
				<view class="_table-flex-auto"><text class="choose-person">请选择</text></view>
			</view>
			<view class="sports-info">
				<view class="sports-referee">裁判：张三(1390000000)</view>
				<view class="sports-action-add">添加</view>
				<view class="sports-action-confirm">确定对战</view>
			</view>


			<view class="sports-time"></view>
			<view class="sports-info">
				<view class="sports-group-name">丙组</view>
				<view class="sports-select-datetime">
					<picker class="_picker_inline" mode="date" :value="date" start="2020-08-09" end="2020-03-09" @change="bindDateChange">
						<view class="_picker-container _picker-date-container">
							<view class="_picker-select-text">选择时间</view>
							<view class="_picker-select_icon">
								<image src="/static/images/icon_down.png" />
							</view>
						</view>
					</picker>
				</view>
				<view class="sports-match-address">
					<view class="_item-form-edit">
						<view class="_item-form-input"><input placeholder="请输入场地" /></view>
						<view class="_item-form-icon">
							<image src="/static/images/icon_edit.png" />
						</view>
					</view>
				</view>
			</view>
			<view class="space20" />
			<view class="_table-item _table-title">
				<view class="_table-flex-fixed fixed-100">场次</view>
				<view class="_table-flex-auto">选手姓名(号码)</view>
				<view class="_table-flex-auto">选手姓名(号码)</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">成*(1212012312)</view>
				<view class="_table-flex-auto">郑**(12012010000)</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">成*(1212012312)</view>
				<view class="_table-flex-auto">郑**(12012010000)</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">成*(1212012312)</view>
				<view class="_table-flex-auto"><text class="choose-person">请选择</text></view>
			</view>
			<view class="sports-info">
				<view class="sports-referee">裁判：张三(1390000000)</view>
				<view class="sports-action-add">添加</view>
				<view class="sports-action-confirm">确定对战</view>
			</view>

			<view class="button-bottom-float button-cancel-signup">保存</view>
		</view>

		<!-- 比赛结果 -->
		<view class="sports-result-container" v-if="swiperTab.currentIndex==3">
			<view class="_item-title">
				<view class="_item-title-icon"></view>
				<view class="_item-title-text">第一场：循环赛</view>
			</view>

			<view class="sports-info">
				<view class="sports-group-name">甲组</view>
				<view class="sports-address">3号桌</view>
				<view class="sports-referee">裁判：张三(1390000000)</view>
			</view>
			<view class="sports-time">2019-02-09 18:00</view>
			<view class="_table-item _table-title">
				<view class="_table-flex-fixed fixed-100">场次</view>
				<view class="_table-flex-auto">选手姓名(号码)</view>
				<view class="_table-flex-auto">选手姓名(号码)</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">11</view>
				<view class="_table-flex-auto">13</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">2</view>
				<view class="_table-flex-auto">11</view>
				<view class="_table-flex-auto">8</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">3</view>
				<view class="_table-flex-auto">11</view>
				<view class="_table-flex-auto">9</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">合计</view>
				<view class="_table-flex-auto sports-total-win">张三胜 3:2</view>
			</view>


			<view class="sports-time"></view>
			<view class="sports-info">
				<view class="sports-group-name">乙组</view>
				<view class="sports-address">4号桌</view>
				<view class="sports-referee">裁判：张三(1390000000)</view>
			</view>
			<view class="sports-time">2019-02-09 18:00</view>
			<view class="_table-item _table-title">
				<view class="_table-flex-fixed fixed-100">场次</view>
				<view class="_table-flex-auto">选手姓名(号码)</view>
				<view class="_table-flex-auto">选手姓名(号码)</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto">－</view>
				<view class="_table-flex-auto sports-abstain">弃权</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">2</view>
				<view class="_table-flex-auto">-</view>
				<view class="_table-flex-auto sports-abstain">弃权</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">3</view>
				<view class="_table-flex-auto">-</view>
				<view class="_table-flex-auto sports-abstain">弃权</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">合计</view>
				<view class="_table-flex-auto sports-total-win">张三胜 3:0</view>
			</view>


			<view class="sports-time"></view>
			<view class="sports-info">
				<view class="sports-group-name">丙组</view>
				<view class="sports-address">7号桌</view>
				<view class="sports-referee">裁判：张三(1390000000)</view>
			</view>
			<view class="sports-time">2019-02-09 18:00</view>
			<view class="_table-item _table-title">
				<view class="_table-flex-fixed fixed-100">场次</view>
				<view class="_table-flex-auto">选手姓名(号码)</view>
				<view class="_table-flex-auto">选手姓名(号码)</view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">1</view>
				<view class="_table-flex-auto"><input placeholder="请输入" /></view>
				<view class="_table-flex-auto"><input placeholder="请输入" /></view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">2</view>
				<view class="_table-flex-auto"><input placeholder="请输入" /></view>
				<view class="_table-flex-auto"><input placeholder="请输入" /></view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">3</view>
				<view class="_table-flex-auto"><input placeholder="请输入" /></view>
				<view class="_table-flex-auto"><input placeholder="请输入" /></view>
			</view>
			<view class="_table-item">
				<view class="_table-flex-fixed fixed-100">合计</view>
				<view class="_table-flex-auto sports-total-win">张三胜 3:0</view>
			</view>

			<view class="button-bottom-float button-cancel-signup">完成</view>
		</view>

		<!-- 防止为底部菜单遮住 -->
		<view class="space-bottom" />
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
				},
			}
		},
		onLoad: function(options) {
			if (options !== undefined && options.current !== undefined) {
				this.swiperTab.currentIndex = Number.parseInt(options.current);
			}
		},
		methods: {
			clickTab: function(e) {
				this.swiperTab.currentIndex = e.target.dataset.index
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}

	.signup-container,
	.sports-container,
	.sports-result-container,
	.sports-info-container {
		padding: 30rpx 30rpx 0rpx 30rpx;
		font-size: 28rpx;
	}

	.signup-number {
		font-weight: bold;
		color: #fb9336;
		text-align: center;
		padding-bottom: 28rpx;
	}

	.fixed-100 {
		width: 100rpx;
	}

	.display-button {
		color: #fb9336;
		border: 1rpx solid #fb9336;
		border-bottom-right-radius: 28rpx;
		border-bottom-left-radius: 28rpx;
		border-top-right-radius: 28rpx;
		border-top-left-radius: 28rpx;
	}

	.auto-assign {
		margin-left: 60rpx;
		padding-right: 30rpx;
		padding-left: 30rpx;
		padding-top: 5rpx;
		padding-bottom: 5rpx;
		border-bottom-left-radius: 28rpx;
		border-bottom-right-radius: 28rpx;
		border-top-left-radius: 28rpx;
		border-top-right-radius: 28rpx;
		color: #fff;
		background-color: #03b990;
		font-weight: normal;
	}

	.sports-info {
		padding-top: 30rpx;
		display: flex;
		justify-content: left;
		align-items: center;
	}

	.sports-group-name {
		width: 120rpx;
		font-weight: bold;
	}

	.sports-address {
		color: #a1a2a3;
		width: 120rpx;
	}

	.sports-referee {
		color: #a1a2a3;
		flex: 1;
	}

	.sports-time {
		padding-top: 26rpx;
		padding-bottom: 26rpx;
		color: #a1a2a3;
		text-align: center
	}

	.sports-select-datetime {
		width: 280rpx;
	}

	.sports-match-address {
		flex: 1;
	}

	.sports-match-address ._item-form-edit {
		padding: 0rpx;
	}

	.choose-person {
		padding: 5rpx 30rpx 5rpx 30rpx;
		border: 1rpx solid #03b990;
		color: #03b990;
		border-radius: 38rpx;
	}

	.sports-action-add {
		width: 60rpx;
		padding: 5rpx 30rpx 5rpx 30rpx;
		border: 1rpx solid #fb9336;
		color: #fb9336;
		text-align: center;
		border-radius: 38rpx;
	}

	.sports-action-confirm {
		padding: 5rpx 30rpx 5rpx 30rpx;
		margin-left: 30rpx;
		background-color: #03b990;
		color: #fff;
		border-radius: 38rpx;
	}

	.sports-total-win {
		color: #fb9336;
	}

	.sports-abstain {
		color: #03b990;
	}
</style>
