<template>
	<!-- 罚款详情 -->
	<view class="content">
		<!-- 头部区域 -->
		<view class="top">
			<image src="/static/declareTop.png" class="topImg"></image>
			<text class="topText">违规记录详情</text>
		</view>
		<!-- 内容主体 -->
		<view class="main">

			<view class="introBody" v-for="(item,index) in productList" :key="index">
				<uni-card style="width: 130%;"><text class="intro">违规单号：{{punishId}}</text>
				</uni-card>
				<uni-card style="width: 130%;">
					<view class="uni-flex uni-row">
						<text class="intro">缴款状态：</text>
						<view v-if="item.payStatus==0" class="state" style="color: #ff7b7b;font-weight: 600;">
							<text>未缴款</text>
						</view>
						<view v-if="item.payStatus==1" class="state" style="color: #60ff7a;">
							<text>已缴款</text>
						</view>
					</view>
				</uni-card>
				<uni-card style="width: 130%;">
					<text class="intro">违规时间：{{item.accidentTime}}</text>
				</uni-card>
				<uni-card style="width: 130%;">
				<text class="intro">违规地点：{{item.accidentPoint}}</text>
				</uni-card>
				<uni-card style="width: 130%;">
				<text class="intro">处罚信息：{{item.punishMsg}}</text>
				</uni-card>
				<uni-card style="width: 130%;">
				<text class="intro">处罚金额：￥{{item.punishAmount}}</text>
				</uni-card>

			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				punishId: '',
				productList: [],
			}
		},

		onLoad: function(options) {
			this.punishId = options.punishId;
			console.log(options);
			this.getList();
		},

		methods: {
			getList() {
				let _this = this;
				uni.request({
					url: _this.apiServer + "/api/get/getDetail/punish",
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'enctype': "multipart/form-data"
					},
					data: {
						punishId: _this.punishId,
					},
					success: res => {
						console.log(res.data.data)
						_this.productList = res.data.data;
					},
					fail: res => {
						console.log("发生了错误");
					},
				})
			},
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	
	/* 背景 */
	.content {
		display: flex;
		align-items: center;
		/* justify-content: center; */
		flex-direction: column;
		width: 100%;
		height: 150%;
		position: absolute;
		background-image: linear-gradient(#62a9f9, #7bc4ff );
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
	/* 内容主体 */
	.main {
		position: absolute;
		top: 320rpx;
		width: 90%;
		background-color: rgba(255,255,255,.2);
		padding: 20rpx;
		border-radius: 15rpx;
		box-shadow: 10rpx 10rpx 10rpx -4rpx rgba(0,0,0,.4);
	}
	
	.bg-gray {
		color: #ffffff;
		font-weight: 600;
		font-size: 40rpx;
		text-align: center;
		border-radius: 15rpx;
		box-sizing: border-box;
	}
	
	.word {
		text-align: center;
		height: 70rpx;
		line-height: 70rpx;
		font-weight: 600;
		font-size: 35rpx;
		color: #999999;
	}
	
	.main-text {
		border-bottom: 4rpx solid #fff;
	}
</style>
