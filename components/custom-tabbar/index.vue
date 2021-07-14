<template>
	<view>
		<view class="tabbar_box" :style="{'background-color':backgroundColor}">
			<block v-for="(item,index) in list" :key="index">
				<navigator v-if="item.isSpecial == true" class="tabbar_nav" hover-class="none" :data-path="item.pagePath" :url="item.pagePath"
				 :data-index="index" :style="{'color':selected==index ? selectedColor : color}" @tap="switchTab">
					<view class='special-wrapper' :style="{'background-color':backgroundColor}">
						<image class="tabbar_icon" :src="item.iconPath"></image>
					</view>
					<image class='special-text-wrapper'></image>
					<text>{{item.text}}</text>
				</navigator>

				<navigator v-else class="tabbar_nav" hover-class="none" :data-path="item.pagePath" :data-index="index" :url="item.pagePath"
				 :style="{color:selected==index ? selectedColor : color}" @tap="switchTab">
					<image class="tabbar_icon" :src="selected==index ? item.selectedIconPath : item.iconPath"></image>
					<text>{{item.text}}</text>
				</navigator>
			</block>
		</view>

		<dialog-login :visible="dialog.visibleLogin" :content="dialog.content" :action="dialog.action" :flow_status="dialog.flow_status"
		 :path="dialog.path"></dialog-login>
	</view>
</template>

<script>
	import {
		_CONFIG
	} from "common/config.js";
	import {
		LoginStatus
	} from "common/utils/LoginStatus.js";
	import dialogLogin from "../dialog/login.vue";

	export default {
		name: 'custom-tabbar',
		props: {
			selected: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				dialog: {
					visibleLogin: false,
					content: "手机认证会员才能查看",
					action: "马上认证",
					path: '',
					flow_status: 1
				},
				// selected: 0,
				backgroundColor: "#f9fafa",
				color: "#c8cbd2",
				selectedColor: "#03b990",
				list: _CONFIG.tabBar
				/* "list": [{
						"pagePath": "/pages/home/index",
						"iconPath": "/static/images/icon_home.png",
						"selectedIconPath": "/static/images/icon_home_HL.png",
						"text": "首页"
					},
					{
						"pagePath": "/pages/shop/index",
						"iconPath": "/static/images/icon_shop.png",
						"selectedIconPath": "/static/images/icon_shop_HL.png",
						"text": "商城"
					},
					{
						isSpecial: true,
						"pagePath": "/pages/member/index",
						"iconPath": "/static/images/icon_member_HL.png",
						"selectedIconPath": "/static/images/icon_member_HL.png",
						"text": "会员中心"
					},
					{
						"pagePath": "/pages/match/index",
						"iconPath": "/static/images/icon_match.png",
						"selectedIconPath": "/static/images/icon_match_HL.png",
						"text": "赛事"
					},
					{
						"pagePath": "/pages/my/index",
						"iconPath": "/static/images/icon_my.png",
						"selectedIconPath": "/static/images/icon_my_HL.png",
						"text": "我的"
					}
				] */
			}
		},
		// attached() {
		// 	this.selected = this.$props.selected;
		// },
		onLoad() {
			//console.log(this)
		},
		methods: {
			switchTab(e) {
				const data = e.currentTarget.dataset;
				const url = data.path;
				const index = data.index;

				let res = true;
				// 这一节在做权限的判断
				if (_CONFIG.needLogin) {
					if (index == 1) res = LoginStatus(3)
					else if (index == 2) res = LoginStatus(3)
					else if (index == 3) res = LoginStatus(2)
					else if (index == 4) res = LoginStatus(5)
				}
				if (res === true) {
					wx.switchTab({
						url: url
					});
				} else {
					uni.showModal({
						title: "",
						content: res.content,
						success: () => {

						}
					})
					this.dialog.visibleLogin = true;
					this.dialog.content = res.content;
					this.dialog.action = res.action;
					this.dialog.flow_status = res.flow_status;
					this.dialog.path = res.path;
				}
			}
		}
	}
</script>

<style>
	.tabbar_box {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 9999;
		width: 100%;
		height: 98rpx;
		background: #ffffff;
		box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
		padding-bottom: 10px;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tabbar_nav {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 20rpx;
		height: 100%;
		position: relative;
	}

	.tabbar_icon,
	.special-text-wrapper {
		width: 40rpx;
		height: 40rpx;
	}

	.special-wrapper {
		position: absolute;
		top: -38rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		border-top: 2rpx solid #f2f2f3;
		/** box-shadow: 0 0 2rpx rgba(0, 0, 0, 0.1); **/
		/** background-color: #fff; **/
		text-align: center;
		box-sizing: border-box;
		/**padding: 6rpx;**/
	}

	.special-wrapper .tabbar_icon {
		width: 100rpx;
		height: 100rpx;
	}

	.tabbar_nav text {
		padding-top: 8rpx;
	}
</style>
