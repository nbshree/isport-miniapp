<template>
	<view v-show="visible">
		<!-- 遮罩层 -->
		<view class="dialog-mask" id="__dialog-getpoints-mask" @tap="close"></view>
		<view class='dialog-container'>
			<view class='dialog-header'>
				<view class="dialog-close" @tap="close">X</view>
				<view class="dialog-title"></view>
			</view>
			<view class='dialog-content'>
				<view class="content-title">球类</view>
				<view class="dialog-input">
					<view>请输入</view>
					<view><input /></view>
				</view>
			</view>
			<view class='dialog-actions' @tap="okClick">立即提交</view>
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			visible: {
				type: Boolean,
				default: true
			},
			confirm: {
				type: Boolean,
				default: (val) => {
					return true;
				}
			},
			modalClose: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				inputValue: ''
			};
		},
		methods: {
			okClick: function(e) {
				let res = false;
				if (typeof(this.confirm) === "function")
					res = this.confirm(this.inputValue);
				else
					res = true;

				if (res === true) this.close(e);
			},
			close: function(e) {
				// console.log(e)
				if (!this.modalClose && e.currentTarget.id === "__dialog-getpoints-mask") return;

				this.visible = false;
			}
		}
	}
</script>

<style>
	@import "./common.wxss";

	.content-title {
		padding-bottom: 30rpx;
	}

	.dialog-input {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #98999a;
		text-align: right;
	}

	.dialog-input view {
		flex: 1;
	}

	.dialog-input input {
		border: 1rpx solid #98999a;
		border-radius: 5rpx;
		width: 300rpx;
		height: 40rpx;
		text-align: left;
	}
</style>
