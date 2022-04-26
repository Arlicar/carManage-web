<template>
	<view class="uni-tabbar">
		<view class="uni-tabbar__item" v-for="(item,index) in tabbar" :key="index" @tap="changeTab(item)">
			<view class="icon" :class="[item.fontIcon , item.pagePath == pagePath?'tabedImg acImg' : 'tabImg']"></view>
<!-- 			<view class="uni-tabbar__label" :class="{'active': item.pagePath == pagePath}">
				{{item.text}}
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			pagePath: null
		},
		
		data() {
			return {
				page: '',
				showPage: false,
				tabbar: [{
					"pagePath": 'pages/'+ this.$store.state.userInfo.position +'/index/index',
					"fontIcon": "icon-index",
					//"text": "首页"
				}, {
					"pagePath": "pages/common/userinfo/userinfo",

					"fontIcon": "icon-wode",
					//"text": "我的"
				}]
			};
		},
		methods: {
			changeTab(item) {
				let page = item.pagePath;
				uni.switchTab({
					url: "../../../" + page,
					fail(error) {
						console.log(error)
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../common/font-icon.css");
	
	.tabImg{

		position: relative;
		top: 12rpx;
	}
	.tabedImg{

		position: relative;
		top: 12rpx;
		color: #1ba2e6;
	}
	
	 
	@-webkit-keyframes bounce {
	    0% {
	        transform: scale(1);
	    }
	    50% {
	        transform: scale(2.0);
	    }
	    100% {
	        transform: scale(1);
	    }
	}
	 
	.acImg{
		animation: bounce .5s;
	}
	.uni-tabbar {
		position: fixed;
		bottom: 0;
		z-index: 999;
		width: 100%;
		display: flex;
		justify-content: space-around;
		height: 98rpx;
		padding: 16rpx 0;
		box-sizing: border-box;
		border-top: solid 1upx #ccc;
		background-color: #fff;
		box-shadow: 0px 0px 17upx 1upx rgba(206, 206, 206, 0.32);

		.uni-tabbar__item {
			display: block;
			line-height: 24upx;
			font-size: 20upx;
			text-align: center;
		}

		.uni-tabbar__icon {
			height: 42upx;
			line-height: 42upx;
			text-align: center;
		}

		.icon {
			display: inline-block;
		}
	}
</style>
