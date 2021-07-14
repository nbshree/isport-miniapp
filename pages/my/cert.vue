<template>
	<view>
		<!-- 选项卡 -->
		<view class="swiper-tab">
			<view v-for="(item,index) in swiperTab.list" :class="['swiper-tab-item',swiperTab.currentIndex==index?'actived':'']"
			 :data-index="index" @tap="clickTab">{{item}}</view>
		</view>

		<form bindsubmit="formSubmit">
			<view class="cert-container" v-if="swiperTab.currentIndex===1">
				<view class="cert-company-image" data-type="COMPANY-CODE" @tap="uploadImages" :style="{'background-image':'url('+form.company_code+')'}">营业执照上传</view>
				<view class="cert-company-code">
					<view class="form-lable"><span class="form-required">*</span>社会信用统一代码:</view>
					<view class="form-item"><input name="comp_code" :value="form.comp_code" /></view>
				</view>

				<view class="note-container">
					<view class="note-image">
						<image src="/static/images/icon_note.png" />
					</view>
					<view class="note-text">
						为了保证您能正常使用（运动小程序）的功能，请外您如实填写。
					</view>
				</view>
			</view>

			<view class="cert-container" v-if="swiperTab.currentIndex===0">
				<view class="cert-company-image" data-type="CARD-FRONT" @tap="uploadImages" :style="{'background-image':'url('+form.card_front+')'}">身份证正面照上传</view>
				<view class="cert-company-image" data-type="CARD-BACK" @tap="uploadImages" :style="{'background-image':'url('+form.card_back+')'}">身份证背面照上传</view>
				<view class="cert-person-code">
					<view class="form-lable"><span class="form-required">*</span>身份证号码:</view>
					<view class="form-item"><input name="card_id" placeholder="请输入18位身份证号码" :value="form.card_id" /></view>
				</view>
				<view class="cert-person-code">
					<view class="form-lable"><span class="form-required">*</span>姓　　　名:</view>
					<view class="form-item"><input name="realname" placeholder="请输入真实姓名" :value="form.realname" /></view>
				</view>
				<view class="cert-person-code">
					<view class="form-lable"><span class="form-required">*</span>联 系 方 式:</view>
					<view class="form-item"><input name="phone_number" placeholder="请输入手机号码" :value="form.phone_number" /></view>
				</view>

				<view class="note-container">
					<view class="note-image">
						<image src="/static/images/icon_note.png" />
					</view>
					<view class="note-text">
						为了保证您能正常使用（运动小程序）的功能，请外您如实填写。
						需要上传身份证正反面或户口本等身份证明图片。
					</view>
				</view>
			</view>


			<!-- 防止为底部菜单遮住 -->
			<view class="space-bottom" />
			<button class="button-bottom-float button-to-view" formType="submit">提交审核</button>
		</form>
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
				form: {},
				swiperTab: {
					list: ["个人", "企业"],
					currentIndex: 0, //tab页索引值
				}
			}
		},
		onLoad: function(options) {
			request.post({
				interface: 'viewin.App.wechat.myCert'
			}, "数据加载中...", this.responseMyCert);
		},

		methods: {
			clickTab: function(e) {
				this.swiperTab.currentIndex = e.target.dataset.index;
			},
			uploadImages: function(e) {
				//console.log(e)
				let data = {
					interface: 'viewin.App.wechat.upload',
					type: e.currentTarget.dataset.type
				}
				request.uploadImages(data, "正在上传图片...", this.responesUploadImages)
			},
			responesUploadImages: function(resp) {
				if (resp.order_sort == 1) this.form.card_front = resp.img_url;
				else if (resp.order_sort == 2) this.form.card_back = resp.img_url;
				else if (resp.order_sort == 3) this.form.company_code = resp.img_url;
			},
			responseMyCert: function(resp) {
				console.log(resp);
				let data = {};
				data.realname = resp.member.realname;
				data.mid = resp.member.mid;
				data.phone_number = resp.member.phone_number;
				data.card_id = resp.member.card_id;

				if (resp.certList && Array.isArray(resp.certList)) {
					resp.certList.forEach(item => {
						if (item.order_sort == 1) data.card_front = item.img_url;
						else if (item.order_sort == 2) data.card_back = item.img_url;
						else if (item.order_sort == 3) data.company_code = item.img_url;
					});
				}
				this.form = data;
			},
			responseMyCertApply: function(resp) {
				wx.navigateBack(1);
			},
			formSubmit: function(e) {
				let data = Object.assign({}, e.detail.value);
				let error = null;

				data.member_type = 1;
				if (data.card_id == "") error = "请输入18位身份证号码！";
				else if (data.realname == "") error = "请输入真实姓名！";
				else if (data.phone_number == "") error = "请输入联系手机号码！";

				if (this.swiperTab.currentIndex == 1) {
					if (data.comp_code == "") error = "请输入企业社会信用统一代码！";
					data.member_type = 2;
				}

				if (error != null) {
					wx.showToast({
						icon: "none",
						title: error,
						duration: 1000
					});
					return;
				}

				data.interface = 'viewin.App.wechat.myCertApply';
				console.log(data)
				request.post(data, "数据提交中...", this.responseMyCertApply);
			}
		}
	}
</script>

<style>
	page {
		background-color: #f6f6fd;
	}

	.cert-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 26rpx;
		padding: 0rpx 28rpx 0rpx 28rpx;
		color: #666768;
	}

	.cert-company-image {
		width: 500rpx;
		height: 290rpx;
		background-color: #edeeef;
		border-radius: 20rpx;
		margin-top: 28rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #999a9b;
		background-repeat: no-repeat;
		background-position: 0 0;
		background-size: 100% 100%;
	}

	.cert-company-code,
	.cert-person-code {
		margin-top: 28rpx;
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		width: 100%;
	}

	.cert-company-code .form-lable {
		width: 220rpx;
		white-space: nowrap;
		text-align: left;
		padding-right: 20rpx;
	}

	.form-item {
		flex: 1;
	}

	.cert-company-code input {
		border-bottom: 1rpx solid #dcddde;
	}

	.cert-person-code .form-lable {
		width: 140rpx;
		white-space: nowrap;
		text-align: left;
		padding-right: 20rpx;
	}

	.cert-person-code input {
		border-bottom: 1rpx solid #dcddde;
	}

	.note-container {
		display: flex;
		flex-direction: row;
		height: 28rpx;
		margin-top: 80rpx;
	}

	.note-image {
		width: 28rpx;
		height: 100%;
		padding-right: 5rpx;
		padding-top: 5rpx;
	}

	.note-image image {
		width: 100%;
		height: 100%;
	}

	.note-text {
		flex: 1;
		font-size: 28rpx;
	}
</style>
