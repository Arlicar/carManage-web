<template>
	<!-- sendCar -->
	<view class="content" :style="'height:'+totalHeight+'%'">
		<view v-for="(item,index) in homePosts" :key="index" class="card">
			<uni-card>
				<navigator :url="'/vetPages/examine/examineDetail/sendDetail?assignId='+ item.assignId+'&fromPage=examToDo'" >
				
				<view class="uni-flex uni-row">
					<view style="margin-top: 10rpx;">
						<image src="/static/did.png" style="width: 50rpx;height: 50rpx;"></image>
					</view>
					<view class="uni-flex uni-column">
						<view style="margin-top: 10rpx;">
							<text>{{item.assignLicense}}</text>
						</view>
						<view class="uni-flex uni-column">
							<text>申报人：{{item.name}}</text>
							<text>派车时间：{{new Date(parseInt(item.assignTime)).toLocaleString().replace(/:\d{1,2}$/,' ')}}</text>
							<text>派车编号：{{item.assignId}}</text>
							<text style="color: #808080;">点击查看详情</text>
						</view>
					</view>
				</view>
				
			</navigator></uni-card>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				homePosts: [],
				// total:0
				totalHeight:0
			}
		},

		onLoad() {
			this.getHomePosts();
		},
		methods: {
			getHomePosts() {
				let _this = this;
				uni.request({
					url: _this.apiServer + "/api/get/getAll/assign",
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'enctype': "multipart/form-data"
					},
					method: 'POST',
					data:{
						filter:'isVet',    
						isVet:true,
						no:_this.$store.state.userInfo.no,
						position:_this.$store.state.userInfo.position,
					},
					success: (res) => {
						console.log(res.data.data);
						_this.homePosts = res.data.data;
						_this.totalHeight = res.data.data.length*25.8
						if(_this.totalHeight<100){
							_this.totalHeight = 100
						}
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
	.content {
		display: flex;
		align-items: center;
		/* justify-content: center; */
		flex-direction: column;
		width: 100%;
		position: absolute;
		background-image: linear-gradient(#62a9f9,#7bc4ff);
		height: 100%;
	}
	.card{
		width: 90%;
		box-shadow: 10rpx 10rpx 10rpx -4rpx rgba(0,0,0,.4);
		margin: 20rpx 0;
		border-radius: 15rpx;
	}
</style>
