<template>
	<view class="content">
		<!-- 头部区域 -->
		<view class="top">
			<image src="/static/declareTop.png" class="topImg"></image>
			<text class="topText">申报记录</text>
		</view>
		<!-- ---- -->
		<!-- 内容主体区 -->
		<view class="wrap">
			<view class="meun-wrap">
				<view class="meuns" v-for="(item,index) in meunsList" :key="index" @click="goDetailPage(item.id,item)">
					<image class="iconimg" :src="item.icon" mode=""></image>
					<text style="margin-left: 30rpx;font-weight: 600;color: #4a4a4a;">{{item.msg}}</text>
				</view>
			</view>
		</view>
		<!-- ---- -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				meunsList: [{
						icon: "/static/data.png",
						msg: "借车申报",
						id: "lendCarDeclare"
					},
					{
						icon: "/static/baoyang.png",
						msg: "保养申报",
						id: "protectDeclare"
					},
					{
						icon: "/static/car3.png",
						msg: "派车申报",
						id: "sendCarDeclare"
					},
				],
			}
		},
		methods:{
			goDetailPage(e) {
				const url = e + '/' + e
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style>
* {
		padding: 0;
		margin: 0;
	}
	/* 主体区域 */
	.content{
		display: flex;
		align-items: center;
		justify-content: center;
		background-image: linear-gradient(#4389f2,#7bc4ff);
		flex-direction: column;
		width: 100%;
		height: 100%;
		position: absolute;
	}
	/* ---- */
	/* 头部区域 */
	.top {
		position: absolute;
		top: 0;
		width: 100%;
		background-image: linear-gradient(#62a9f9,#fff);
		height: 220rpx;
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		box-shadow: 20rpx 20rpx 20rpx -4rpx rgba(0,0,0,.4);
		animation: topShow 1s;
	}
	.topImg{
		width: 340rpx;
		height: 180rpx;
	}
	.topText{
		position: absolute;
		top: 45rpx;
		right: 110rpx;
		font-size: 55rpx;
		font-weight: 600;
		color: #fff;
		text-shadow: 10rpx 5rpx 10rpx #4b91f1;
	}
	
	@-webkit-keyframes topShow{
		0%{
			top: -220rpx;
		}
		60%{
			top: 0rpx;
		}
		70%{
			top: -30rpx;
		}
		80%{
			top: 0rpx;
		}
		90%{
			top:-10rpx;
		}
		100%{
			top: 0rpx;
		}
	}
	@keyframes topShow{
		0%{
			top: -220rpx;
		}
		60%{
			top: 0rpx;
		}
		70%{
			top: -30rpx;
		}
		80%{
			top: 0rpx;
		}
		90%{
			top:-10rpx;
		}
		100%{
			top: 0rpx;
		}
	}
	/* ---- */
	/* 内容主体区 */
	.wrap {
		position: absolute;
		top: 270rpx;
		height: 100rpx;
		
	}

	.meun-wrap {
		width: 500rpx;
		height: 500rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 40rpx;
		box-shadow: 0px 2px 16px 0px rgba(17, 33, 50, 0.5);
		border-radius: 20rpx;
		margin-top: 90rpx;
		background-image: linear-gradient(#4e94f5,#77c0fe);
	}

	.meuns {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 32rpx;
		font-weight: 540;
		background-color: rgba(255, 255, 255);
		border-radius: 20rpx;
	}

	.iconimg {
		width: 70rpx;
		height: 70rpx;
		margin-bottom: 15rpx;
		margin-top: 15rpx;
		margin-left: 10rpx;
	}
	/* ---- */
</style>
