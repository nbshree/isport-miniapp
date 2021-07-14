<template>
	<view class="container log-list">
		<block v-for="(log,index) in logs">
			<text class="log-item">{{index + 1}}. {{log}}</text>
		</block>
	</view>
</template>

<script>
	import util from "common/utils/util.js";
	import request from "common/utils/request.js";

	export default {
		data() {
			return {

				logs: []
			}
		},
		onLoad: function() {
			this.logs = (wx.getStorageSync('logs') || []).map(log => {
				return util.formatTime(new Date(log))
			});
		},
		methods: {

		}
	}
</script>

<style>
	.log-list {
		display: flex;
		flex-direction: column;
		padding: 40rpx;
	}

	.log-item {
		margin: 10rpx;
	}
</style>
