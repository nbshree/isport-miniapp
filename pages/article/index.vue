<template>
	<view class="article-container">
		<view class="article-title">
			{{notice.title}}
		</view>
		<view class="article-info">
			<view class="article-time">{{notice.pub_time}}</view>
			<view class="article-author">{{notice.author}}</view>
		</view>
		<view class="article-content">
			<word-br v-for="(item,index) in notice.w_content" :text="item"></word-br>
		</view>
	</view>
</template>

<script>
	import {
		word,openUrl
	} from "common/utils/util.js";
	import request from "common/utils/request.js";
	import wordBr from "components/wordBr.vue";

	export default {
		components: {
			wordBr
		},
		data() {
			return {
				notice: {}
			}
		},
		onLoad: function(options) {
			request.post({
					interface: 'viewin.App.wechat.getNotice',
					id: options.id
				},
				true, this.responseGetNotice
			);
		},

		methods: {
			openUrl,
			responseGetNotice: function(data) {
				data.w_content = word.parse(data.content);
				this.notice = data;
			}
		}
	}
</script>

<style>
	page {
		background-color: #f6f6fd;
	}

	.article-container {
		padding-left: 35rpx;
		padding-right: 35rpx;
		padding-top: 30rpx;
	}

	.article-title {
		font-size: 34rpx;
		font-weight: bold;
		text-align: center;
	}

	.article-info {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: left;
		font-size: 22rpx;
		color: #97989a;
		padding-top: 30rpx;
	}

	.article-info .article-time {
		flex: 1;
		text-align: left;
	}

	.article-info .article-author {
		flex: 1;
		text-align: right;
	}

	.article-content {
		width: 100%;
		padding-top: 30rpx;
		font-size: 28rpx;
		color: #272927;
		line-height: 52rpx;
	}
</style>
