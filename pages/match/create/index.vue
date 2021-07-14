<template>
	<view>
		<view class="photo-container">
			<view class="_item-title">
				<view class="_item-title-icon"></view>
				<view class="_item-title-text">图片</view>
			</view>

			<view class="photo-content">
				<view>
					<image src="/static/images/icon_photo.png" class="_upload_photo" />
				</view>
				<view>赛事图片上传</view>
			</view>
		</view>

		<!-- 空位 -->
		<view class="space20"></view>

		<form bindsubmit="formSubmit">
			<view class="brief-container">
				<view class="_item-title">
					<view class="_item-title-icon"></view>
					<view class="_item-title-text">赛事简介</view>
				</view>
				<!-- 赛事名称 -->
				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required">*</span>赛事名称:</view>
					<view class="_item-form-input"><input :value="formdata.match_name" data-key-name="match_name" @blur="bindVar" /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<!--　报名时间 -->
				<view class="_item-form-edit _item-form-none-line">
					<view class="_item-form-title"><span class="form-required">*</span>报名时间:</view>
					<view class="_item-form-input">
						<picker class="_picker_inline" name="signup_start_time" data-key-name="signup_start_time" mode="date" :value="formdata.signup_start_time"
						 @change="bindVar">
							<view class="_picker-container _picker-date-container">
								<view class="_picker-select-text">{{formdata.signup_start_time?formdata.signup_start_time:'开始时间'}}</view>
								<view class="_picker-select_icon">
									<image src="/static/images/icon_down.png" />
								</view>
							</view>
						</picker>
						~
						<picker class="_picker_inline" name="signup_end_time" data-key-name="signup_end_time" mode="date" :value="formdata.signup_end_time"
						 @change="bindVar">
							<view class="_picker-container _picker-date-container">
								<view class="_picker-select-text">{{formdata.signup_end_time?formdata.signup_end_time:'结束时间'}}</view>
								<view class="_picker-select_icon">
									<image src="/static/images/icon_down.png" />
								</view>
							</view>
						</picker>
					</view>
				</view>
				<!-- 比赛地点 -->
				<view class="_item-form-edit _item-form-none-line">
					<view class="_item-form-title _item-form-title-top"><span class="form-required">*</span>比赛地点:</view>
					<view class="_item-form-input">
						<picker mode="region" name="region" :data-key-name="['province','city','region']" data-value-name="picker_region"
						 @change="bindRegionChange" value="">
							<view class="_picker-container">
								<view class="_picker-select-text">{{formdata.picker_region?formdata.picker_region:'请选择比赛区域'}}</view>
								<view class="_picker-select_icon">
									<image src="/static/images/icon_down.png" />
								</view>
							</view>
						</picker>
						<view class="_item-form-edit">
							<view class="_item-form-input"><input data-key-name="address" @blur="bindVar" :value="formdata.address" /></view>
							<view class="_item-form-icon">
								<image src="/static/images/icon_edit.png" />
							</view>
						</view>
					</view>
				</view>
				<!-- 指导单位 -->
				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required"> </span>指导单位:</view>
					<view class="_item-form-input"><input data-key-name="detail.zddw" @blur="bindVar" :value="formdata.detail.zddw" /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<!-- 主办单位 -->
				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required"> </span>主办单位:</view>
					<view class="_item-form-input"><input data-key-name="detail.zbdw" @blur="bindVar" :value="formdata.detail.zbdw" /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<!-- 承办单位 -->
				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required"> </span>承办单位:</view>
					<view class="_item-form-input"><input data-key-name="detail.cbdw" @blur="bindVar" :value="formdata.detail.cbdw" /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<!-- 协办单位 -->
				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required"></span>协办单位:</view>
					<view class="_item-form-input"><input data-key-name="detail.xbdw" @blur="bindVar" :value="formdata.detail.xbdw" /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<!-- 赞助单位 -->
				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required"></span>赞助单位:</view>
					<view class="_item-form-input"><input data-key-name="detail.zzdw" @blur="bindVar" :value="formdata.detail.zzdw" /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<!-- 特别鸣谢 -->
				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required"></span>特别鸣谢:</view>
					<view class="_item-form-input"><input data-key-name="detail.dbmx" @blur="bindVar" :value="formdata.detail.dbmx" /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<!-- 赛事描述 -->
				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required"></span>赛事描述:</view>
					<view class="_item-form-input"><input data-key-name="detail.ssms" @blur="bindVar" :value="formdata.detail.ssms" /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<!-- 赛事章程 -->
				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required"></span>赛事章程:</view>
					<view class="_item-form-input"><input data-key-name="detail.sszc" @blur="bindVar" :value="formdata.detail.sszc" /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<view class="_item-form-edit _item-form-none-line">
					<view class="_item-form-title"><span class="form-required">*</span>运动类型:</view>
					<view class="_item-form-input">
						<picker class="_picker_inline" :value="formdata.type_id" :range="typeIds" range-key="name" @change="bindTypeIdChange">
							<view class="_picker-container">
								<view class="_picker-select-text">{{formdata.type_name?formdata.type_name:"请选择"}}</view>
								<view class="_picker-select_icon">
									<image src="/static/images/icon_down.png" />
								</view>
							</view>
						</picker>
						<span>　　</span>
						<radio class="_radio" :value="multiple.name" :checked="multiple.checked" data-name="multiple" @tap="clickRadio">多人多项目</radio>
					</view>
				</view>
				<view class="_item-form-edit" v-if="multiple.checked">
					<view class="_item-form-title"><span class="form-required">*</span>团队数量:</view>
					<view class="_item-form-input"><input /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<view class="_item-form-edit" v-if="multiple.checked">
					<view class="_item-form-title"><span class="form-required">*</span>每队人数:</view>
					<view class="_item-form-input"><input /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required">*</span>项目数量:</view>
					<view class="_item-form-input"><input data-key-name="items_num" @blur="bindItemsNum" :value="formdata.items_num" /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<view class="_item-form-closed"></view>
			</view>

			<block v-for="(item,index) in formdata.items">
				<!-- 空位 -->
				<view class="space20"></view>

				<view class="competition-container" v-if="!multiple.checked">
					<view class="_item-title">
						<view class="_item-title-icon"></view>
						<view class="_item-title-text">项目{{index+1}}</view>
					</view>

					<!-- 选项卡 -->
					<view class="swiper-tab">
						<view v-for="(item,index) in swiperTab.list" :class="['swiper-tab-item', swiperTab.currentIndex==index?'actived':'']"
						 :data-index="index" @tap="clickTab">{{item}}</view>
					</view>

					<view class="_item-form-edit">
						<view class="_item-form-title"><span class="form-required">*</span>项目名称:</view>
						<view class="_item-form-input"><input :data-key-name="'items.'+index+'.item_name'" @blur="bindVar" :value="item.item_name" /></view>
						<view class="_item-form-icon">
							<image src="/static/images/icon_edit.png" />
						</view>
					</view>
					<view class="_item-form-edit" v-if="swiperTab.currentIndex==0">
						<view class="_item-form-title"><span class="form-required">*</span>报名人数:</view>
						<view class="_item-form-input"><input :data-key-name="'items.'+index+'.signup_num'" @blur="bindVar" :value="item.signup_num" /></view>
						<view class="_item-form-icon">
							<image src="/static/images/icon_edit.png" />
						</view>
					</view>
					<view class="_item-form-edit" v-if="swiperTab.currentIndex==1">
						<view class="_item-form-title"><span class="form-required">*</span>团队数量:</view>
						<view class="_item-form-input"><input :data-key-name="'items.'+index+'.team_num'" @blur="bindVar" value="item.team_num" /></view>
						<view class="_item-form-icon">
							<image src="/static/images/icon_edit.png" />
						</view>
					</view>
					<view class="_item-form-edit" v-if="swiperTab.currentIndex==1">
						<view class="_item-form-title"><span class="form-required">*</span>每队人数:</view>
						<view class="_item-form-input"><input :data-key-name="'items.'+index+'.team_member_num'" @blur="bindVar" :value="item.team_member_num" /></view>
						<view class="_item-form-icon">
							<image src="/static/images/icon_edit.png" />
						</view>
					</view>
					<!-- 报名要求 -->
					<view class="_item-form-edit _item-form-none-line">
						<view class="_item-form-title"><span class="form-required">*</span>报名要求:</view>
						<view class="_item-form-input">
							<view class="_item-form-sub">
								<radio class="_radio _item-form-sub-title" :data-key-name="'items.'+index+'.gender_check'" @tap="bindRadioVar"
								 :data-value="item.gender_check==1" :checked="item.gender_check==1">性别</radio>
								<radio-group class="_picker_inline _item-form-sub-content" :data-key-name="'items.'+index+'.gender'" @change="bindVar">
									<radio class="_radio" value="1" :checked="item.gender==1">男</radio>
									<radio class="_radio" value="2" :checked="item.gender==2">女</radio>
								</radio-group>
							</view>
							<view class="age _item-form-sub">
								<radio class="_radio _item-form-sub-title" :data-key-name="'items.'+index+'.age_check'" :data-value="item.age_check==1"
								 :checked="item.age_check==1" @tap="bindRadioVar">年龄</radio>
								<view class="_item-form-sub-content">
									<input class="_picker_inline" :data-key-name="'items.'+index+'.age_start'" @change="bindVar" :value="item.age_start" />
									<span> ~ </span>
									<input class="_picker_inline" :data-key-name="'items.'+index+'.age_end'" @change="bindVar" :value="item.age_end" />
								</view>
							</view>
							<view class="age _item-form-sub">
								<radio class="_radio _item-form-sub-title" :data-key-name="'items.'+index+'.score_check'" :data-value="item.score_check==1"
								 :checked="item.score_check==1" @tap="bindRadioVar">积分</radio>
								<view class="_item-form-sub-content">
									<input class="_picker_inline" :data-key-name="'items.'+index+'.score_start'" @change="bindVar" :value="item.score_start" />
									<span> ~ </span>
									<input class="_picker_inline" :data-key-name="'items.'+index+'.score_end'" @change="bindVar" :value="item.score_end" />
								</view>
							</view>
						</view>
					</view>
					<!-- 赛事时间 -->
					<view class="_item-form-edit _item-form-none-line">
						<view class="_item-form-title"><span class="form-required">*</span>赛事时间:</view>
						<view class="_item-form-input form-item-algin">
							<picker class="_picker_inline" name="match_start_time" :data-key-name="'items.'+index+'.match_start_time'" mode="date"
							 :value="item.match_start_time" @change="bindVar">
								<view class="_picker-container _picker-date-container">
									<view class="_picker-select-text">{{item.match_start_time?item.match_start_time:"开始时间"}}</view>
									<view class="_picker-select_icon">
										<image src="/static/images/icon_down.png" />
									</view>
								</view>
							</picker>
							~
							<picker class="_picker_inline" name="match_end_time" :data-key-name="'items.'+index+'.match_end_time'" mode="date"
							 :value="item.match_end_time" @change="bindVar">
								<view class="_picker-container _picker-date-container">
									<view class="_picker-select-text">{{item.match_end_time?item.match_end_time:"结束时间"}}</view>
									<view class="_picker-select_icon">
										<image src="/static/images/icon_down.png" />
									</view>
								</view>
							</picker>
						</view>
					</view>
					<view class="_item-form-edit _item-form-none-line">
						<view class="_item-form-title"><span class="form-required">*</span>比赛模式:</view>
						<view class="_item-form-input" style="position:relative;height:160rpx;">
							<radio-group class="match-mode" :data-key-name="'items.'+index+'.mode'" @change="bindVar">
								<radio class="_radio" value="4" :checked="item.rules==4">小组循环赛+淘汰赛</radio>
								<radio class="_radio" value="2" :checked="item.rules==2">单循环　　　　　　</radio>
								<radio class="_radio" value="1" :checked="item.rules==1">单淘汰　　　　　　</radio>
							</radio-group>
						</view>
					</view>
					<view class="_item-form-edit _item-form-none-line">
						<view class="_item-form-title"><span class="form-required">*</span>比赛总数:</view>
						<view class="_item-form-input form-item-algin">
							<view class="_picker_inline macth-number">
								<input class="_input" placeholder="组数" :data-key-name="'items.'+index+'.group_num'" @change="bindVar" :value="item.group_num" />
								<span>　　</span>
								<input class="_input" placeholder="出现人数" :data-key-name="'items.'+index+'.shortlisted'" @change="bindVar"
								 :value="item.shortlisted" />
							</view>
						</view>
					</view>
					<view class="_item-form-edit _item-form-none-line">
						<view class="_item-form-title"><span class="form-required">*</span>比赛规则:</view>
						<view class="_item-form-input">
							<radio-group :data-key-name="'items.'+index+'.mode'" @change="bindVar">
								<radio class="_radio" value="1" :checked="item.mode==1">三局二胜</radio>
								<radio class="_radio" value="2" :checked="item.mode==2">五局三胜</radio>
							</radio-group>
						</view>
					</view>
					<view class="_item-form-edit _item-form-none-line">
						<view class="_item-form-title"><span class="form-required">*</span>比赛排名:</view>
						<view class="_item-form-input form-item-algin">
							<input class="_input" style="width:240rpx" placeholder="0-8" />
						</view>
					</view>
					<view class="_item-form-edit _item-form-none-line">
						<view class="_item-form-title"><span class="form-required">*</span>报名缴费:</view>
						<view class="_item-form-input">
							<radio-group>
								<radio class="_radio" :value="item.name" :checked="item.checked">免费</radio>
								<radio class="_radio" :value="item.name" :checked="item.checked">
									<input class="_input" style="width:260rpx;height:80rpx;line-height:80rpx;" />
								</radio>
							</radio-group>
						</view>
					</view>
					<view class="_item-form-edit _item-form-none-line" v-if="swiperTab.currentIndex==0">
						<view class="_item-form-title"><span class="form-required">*</span>积分变动:</view>
						<view class="_item-form-input">
							<radio-group>
								<radio class="_radio" :value="item.name" :checked="item.checked">停用</radio>
								<radio class="_radio" :value="item.name" :checked="item.checked">启用</radio>
							</radio-group>
						</view>
					</view>
					<view class="_item-form-edit _item-form-none-line">
						<view class="_item-form-title"><span class="form-required">*</span>报名审核:</view>
						<view class="_item-form-input">
							<radio-group>
								<radio class="_radio" :value="item.name" :checked="item.checked">停用</radio>
								<radio class="_radio" :value="item.name" :checked="item.checked">启用</radio>
							</radio-group>
						</view>
					</view>
					<view class="_item-form-closed"></view>
				</view>
			</block>

			<view class="multiple-container" v-if="multiple.checked">
				<view class="_item-title">
					<view class="_item-title-icon"></view>
					<view class="_item-title-text">项目类型</view>
				</view>

				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required">*</span>项目名称:</view>
					<view class="_item-form-input"><input /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required">*</span>项目人数:</view>
					<view class="_item-form-input"><input /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<view class="_item-form-edit _item-form-none-line">
					<view class="_item-form-input form-multiple-radio">
						<radio-group>
							<radio class="_radio" :value="item.name" :checked="item.checked">男</radio>
							<radio class="_radio" :value="item.name" :checked="item.checked">女</radio>
							<radio class="_radio" :value="item.name" :checked="item.checked">单打</radio>
							<radio class="_radio" :value="item.name" :checked="item.checked">多打</radio>
						</radio-group>
					</view>
				</view>

				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required">*</span>项目名称:</view>
					<view class="_item-form-input"><input /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required">*</span>项目人数:</view>
					<view class="_item-form-input"><input /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<view class="_item-form-edit _item-form-none-line">
					<view class="_item-form-input form-multiple-radio">
						<radio-group>
							<radio class="_radio" :value="item.name" :checked="item.checked">男</radio>
							<radio class="_radio" :value="item.name" :checked="item.checked">女</radio>
							<radio class="_radio" :value="item.name" :checked="item.checked">单打</radio>
							<radio class="_radio" :value="item.name" :checked="item.checked">多打</radio>
						</radio-group>
					</view>
				</view>

				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required">*</span>项目名称:</view>
					<view class="_item-form-input"><input /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<view class="_item-form-edit">
					<view class="_item-form-title"><span class="form-required">*</span>项目人数:</view>
					<view class="_item-form-input"><input /></view>
					<view class="_item-form-icon">
						<image src="/static/images/icon_edit.png" />
					</view>
				</view>
				<view class="_item-form-edit _item-form-none-line">
					<view class="_item-form-input form-multiple-radio">
						<radio-group>
							<radio class="_radio" :value="item.name" :checked="item.checked">男</radio>
							<radio class="_radio" :value="item.name" :checked="item.checked">女</radio>
							<radio class="_radio" :value="item.name" :checked="item.checked">单打</radio>
							<radio class="_radio" :value="item.name" :checked="item.checked">多打</radio>
						</radio-group>
					</view>
				</view>

				<view class="_item-form-edit _item-form-none-line">
					<view class="_item-form-title"><span class="form-required">*</span>报名缴费:</view>
					<view class="_item-form-input">
						<radio-group>
							<radio class="_radio" :value="item.name" :checked="item.checked">免费</radio>
							<radio class="_radio" :value="item.name" :checked="item.checked">
								<input class="_input" style="width:260rpx;height:80rpx;line-height:80rpx;" />
							</radio>
						</radio-group>
					</view>
				</view>
			</view>

			<view class="button-container">
				<button class="action-submit button-to-view" data-status="1" :formType="submit">提交申请</button>
				<button class="action-save button-to-view" data-status="2" :formType="submit">保存</button>
			</view>
		</form>
	</view>
</template>

<script>
	import {
		openUrl
	} from "common/utils/util.js";
	import request from "common/utils/request.js";
	import StringUtils from "common/utils/StringUtils.js";
	import {
		SportsTypeId
	} from "common/utils/LoginStatus.js";

	export default {
		data() {
			return {
				swiperTab: {
					list: ["单打", "团队"],
					currentIndex: 0, //tab页索引值
				},
				multiple: {
					checked: false,
					name: "multiple"
				},
				formdata: {},
				typeIds: SportsTypeId.data
			}
		},
		methods: {
			clickTab: function(e) {
				this.swiperTab.currentIndex = e.target.dataset.index;

			},
			clickRadio: function(e) {
				let name = e.target.dataset.name;
				this.data[name].checked = !this.data[name].checked;

			},
			bindVar: function(e) {
				console.log(e)
				let formdata = StringUtils.bindToVar(this.formdata, e.currentTarget.dataset.keyName, e.detail.value);
				this.formdata = formdata;
			},
			bindItemsNum: function(e) {
				let formdata = StringUtils.bindToVar(this.formdata, e.currentTarget.dataset.keyName, e.detail.value)
				formdata['items_num'] = Number.parseInt(formdata['items_num']);
				if (!formdata.items) formdata.items = new Array(formdata['items_num']);
				else if (formdata.items.length > formdata['items_num'])
					formdata.items.splice(formdata['items_num'], formdata.items.length - formdata['items_num']);
				else if (formdata.items.length < formdata['items_num']) {
					for (var i = 0; i < formdata['items_num'] - formdata.items.length; i++)
						formdata.items.push(Object.assign({}));
				}
				this.formdata = formdata;
			},
			bindRadioVar: function(e) {
				let checked = !e.currentTarget.dataset.value;
				let formdata = StringUtils.bindToVar(this.formdata, e.currentTarget.dataset.keyName, checked ? 1 : 0);
				this.formdata = formdata;
			},
			bindTypeIdChange: function(e) {
				let sportsTypeId = SportsTypeId.getByIndex(e.detail.value);
				this.formdata.type_id = sportsTypeId.id;
				this.formdata.type_name = sportsTypeId.name;

			},
			bindRegionChange: function(e) {
				let picker_region = '';
				let keys = e.currentTarget.dataset.keyName;
				for (var i = 0; i < keys.length; i++) {
					this.formdata[keys[i]] = e.detail.value[i];
					if (i == 0) picker_region = e.detail.value[i];
					else if (i > 0 && e.detail.value[i] != e.detail.value[i - 1]) picker_region += e.detail.value[i];
				}

				let valueName = e.currentTarget.dataset.valueName;
				this.formdata[valueName] = picker_region;

			},
			formSubmit: function(e) {
				console.log(this.formdata);
				let error = null;
				if (StringUtils.isBlank(this.formdata.match_name)) error = "赛事名称不能为空！";
				else if (StringUtils.isBlank(this.formdata.signup_start_time)) error = "请选择报名开始时间！";
				else if (StringUtils.isBlank(this.formdata.signup_end_time)) error = "请选择报名结束时间！";
				else if (StringUtils.isBlank(this.formdata.picker_region)) error = "比赛地点不能为空！";
				else if (StringUtils.isBlank(this.formdata.type_id)) error = "请选择运动类型！";

				if (error != null) {
					wx.showToast({
						icon: 'none',
						title: error,
						duration: 2000
					});
					return;
				}

				let data = Object.assign({}, this.formdata);
				data.interface = 'viewin.App.wechat.matchApply';
				data.status = e.target.dataset.status;
				request.post(data, "数据提交中...", this.responseMatchApply);
			},
			responseMatchApply: function(resp) {
				console.log(resp);;
			}
		}
	}
</script>

<style>
	page {
		background-color: #f6f6fd;
	}

	.photo-container {
		padding: 30rpx 30rpx 0rpx 30rpx;
		background-color: #fff;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.photo-container ._item-title {
		width: 100%;
	}

	.photo-container .photo-content {
		width: 300rpx;
		height: 240rpx;
		border-radius: 30rpx;
		background-color: #edeeef;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		font-size: 28rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #98999a;
	}

	.brief-container,
	.competition-container,
	.multiple-container {
		padding: 30rpx 30rpx 0rpx 30rpx;
		background-color: #fff;
	}

	.button-container {
		padding-top: 76rpx;
		padding-bottom: 76rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
	}

	.action-submit,
	.action-save {
		width: 300rpx;
		height: 98rpx;
		text-align: center;
		background-color: #1db991;
		color: #fff;
		font-size: 32rpx;
		line-height: 98rpx;
	}


	.age input {
		width: 160rpx;
		border: 1rpx solid #dcddde;
		border-radius: 10rpx;
	}

	.match-mode {
		height: 240rpx;
		left: -32rpx;
		position: absolute;
		float: left;
	}

	.macth-number input {
		width: 180rpx;
	}

	.form-item-algin {
		padding-left: 28rpx;
	}

	.form-item-algin ._picker-date-container {
		width: 220rpx;
	}

	.form-multiple-radio {
		display: flex;
		justify-content: center;
	}
</style>
