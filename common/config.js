const _CONFIG = {
	API_URL: 'https://nbszjk.com/app.php',
	needLogin: false, //是否需要登录
	// 底部tabBar
	tabBar: [{
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
	]

}

module.exports = {
	_CONFIG
}
