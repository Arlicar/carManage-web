<template>
	<view class="content">
	<!-- 头部区域 -->
	<view class="top">
		<image src="/static/examTop.png" class="topImg"></image>
		<text class="topText">维修审批</text>
	</view>
	<!-- 内容主体区 -->
	<view class="wrap">
			<view class="meun-wrap" >
				<view class="meuns" v-for="(item,index) in meunsList" :key="index" @click="goDetailPage(item.id)">
					<image :src="item.icon" mode=""></image>
					<text style="font-weight: 600;color: #4a4a4a;">{{item.msg}}</text>
				</view>
			</view>
	</view>
	<text class="text1">{{examDoneCount}}</text>
	<text class="text2">{{examToDoCount}}</text>
	</view>
</template>

<script>
	export default {
			onLoad(){
				this.getCount()
			},
			data() {
				return {
					meunsList:[
						{
							icon:"/static/done.png",
							msg:"已处理",
							id:"examDone"
						},
						{
							icon:"/static/todo.png",
							msg:"待处理",
							id:"examToDo"
						},
					],
					examToDoCount:0,
					examDoneCount:0
				}
			},
			methods: {
				goDetailPage(e){
					const url = e + '/' + e
					uni.navigateTo({
						url: url,
						fail(error){
							console.log(error)
						}
					})  
				},
				// 获取数据
				getCount(){
					let _this = this
					uni.request({
						url: _this.apiServer + "/api/get/count",
						header: {
							'content-type': 'application/x-www-form-urlencoded',
							'enctype': "multipart/form-data"
						},
						method: 'POST',
						data: {
							no:_this.$store.state.userInfo.no,
							position:_this.$store.state.userInfo.position
						},
						success: (res) => {
							console.log(res.data.data);
							_this.examDoneCount = res.data.data.vet
							_this.examToDoCount = res.data.data.notVet
							console.log(_this.examDoneCount,_this.examToDoCount )
						}
					});
				}
			}
		}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	/* 背景 */
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
		background-image: linear-gradient(#62a9f9, #fff);
		height: 220rpx;
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		box-shadow: 20rpx 20rpx 20rpx -4rpx rgba(0, 0, 0, .4);
		animation: topShow 1s;
	}
	
	.topImg {
		width: 340rpx;
		height: 180rpx;
	}
	
	.topText {
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
		height: 290rpx;
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
	image{
			width: 80rpx;
			height: 80rpx;
			margin-bottom: 15rpx;
	}
	.text1{
		position: absolute;
		top: 425rpx;
		right: 175rpx;
		width: 40rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		font-size: 65rpx;
		font-weight: 600;
		color: #579ef7;
	}
	.text2{
		position: absolute;
		top: 625rpx;
		right: 175rpx;
		width: 40rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		font-size: 65rpx;
		font-weight: 600;
		color: #579ef7;
	}
</style>

