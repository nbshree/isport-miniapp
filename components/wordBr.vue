<template>
	<view class="word-br">
		<text>{{text}}</text>
	</view>
</template>

<script>
	export default {
		name:"word-br",
		props: {
			text: {
				type: String,
				default: ""
			}
		},
		data() {
			return {

			}
		},
		methods: {}
	}
</script>

<style>
</style>
