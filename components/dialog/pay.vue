<template>
	<view v-show="isVisible">
		<!-- 遮罩层 -->
		<view class="dialog-mask" id="__dialog-getpoints-mask" @tap="close()"></view>
		<view class='dialog-container'>
			<view class='dialog-header'>
				<view class="dialog-close" @tap="close()">X</view>
				<view class="dialog-title">支付密码</view>
			</view>
			<view class='dialog-content'>
				<view class="pay-username">宁波智哲技术信息有限公司</view>
				<view class="pay-price">￥800元</view>
				<view class="pay-method">
					<view class="pay-method-title">支付方式</view>
					<view class="pay-method-name">零钱 ></view>
				</view>
			</view>
			<view class='dialog-actions' @tap="okClick">确认支付</view>
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
				isVisible:  this.visible,
				inputValue: ''
			}
		},
		watch: {
			visible(val, old) {
				console.log(val)
				this.isVisible = val;
			}
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
				if (!this.modalClose && e.currentTarget.id === "__dialog-getpoints-mask") return;

				this.isVisible = false;
			}

		}
	}
</script>

<style>
	@import "./common.wxss";

	.dialog-content {
		width: 100%;
	}

	.pay-username {
		padding-bottom: 20rpx;
		font-size: 26rpx;
	}

	.pay-price {
		color: #000;
		font-weight: bold;
		border-bottom: 1rpx solid #d8d9da;
		width: 100%;
		text-align: center;
		padding-bottom: 20rpx;
	}

	.pay-method {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #98999a;
		font-size: 26rpx;
		width: 100%;
		padding-top: 20rpx;
	}

	.pay-method-title {
		flex: 1;
		text-align: left;
	}

	.pay-method-name {
		flex: 1;
		text-align: right;
	}
</style>
