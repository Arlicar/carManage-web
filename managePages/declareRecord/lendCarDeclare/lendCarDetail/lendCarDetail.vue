<template>
	<!-- 管理员借车记录详情页 -->
	<view class="content">
		<view class="main">
			<view class="bg-gray"><text class="main-text">借车人信息</text></view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">姓名</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{name}}</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">手机号码</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{phone}}</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">工号</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{no}}</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<!-- <view class="uni-flex uni-row uni-card">
				<image :src="imgUrl" style="width: 200rpx;height: 200rpx;margin-left: 200rpx;"></image>
			</view> -->
			<view class="bg-gray"><text class="main-text">借车信息</text></view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">借车时间</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{lendTime}}</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">车牌号</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{lendLicense}}</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">出借天数</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{lendDay}}天</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">借车原因</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{reason}}</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="bg-gray"><text class="main-text">审批人信息</text></view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">审批人编号</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{vetNo}}</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="bg-gray"><text class="main-text">审批流程</text></view>
			<view class=" uni-row uni-card step">
				<uni-steps :options="[{title: '发起申报'}, {title: '负责人'}]" :active="1"></uni-steps>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		onLoad: function(options) {
			console.log('onload')
			this.lendId = options.lendId;
			this.getRepairDetail();
			console.log(this.$route)
		},
		data() {
			return {
				lendId: '',
				// name: this.$store.state.userInfo.name,
				// no: this.$store.state.userInfo.no,
				name: '',
				no: '',
				phone: '',
				imgUrl: '',
				lendTime: '',
				lendLicense: '',
				reason: '',
				vetNo: '',
				lendDay: 0,
			}
		},

		methods: {
			getRepairDetail() {
				let _this = this;
				uni.request({
					url: _this.apiServer + "/api/get/getDetail/lendCar",
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'enctype': "multipart/form-data"
					},
					data: {
						lendCarId: _this.lendId,
					},
					success: res => {
						console.log(res.data.data);
						_this.lendCarId = res.data.data.lendCarId;
						_this.name = res.data.data.name;
						_this.no = res.data.data.no;
						_this.phone = res.data.data.phone;
						_this.lendTime = res.data.data.lendTime;
						_this.lendLicense = res.data.data.lendLicense;
						_this.reason = res.data.data.reason;
						_this.vetNo = res.data.data.vetNo;
						_this.lendDay = res.data.data.lendDay;
						_this.imgUrl = res.data.data.imgUrl;
					},
					fail: res => {
						console.log("发生了错误");
					},
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

	/* 背景 */
	.content {
		display: flex;
		align-items: center;
		/* justify-content: center; */
		flex-direction: column;
		width: 100%;
		height: 150%;
		position: absolute;
		background-image: linear-gradient(#62a9f9, #4389f2);
	}

	/* ---- */
	/* 内容主体 */
	.main {
		position: absolute;
		top: 100rpx;
		width: 80%;
		background-color: rgba(255, 255, 255, .2);
		padding: 0 30rpx 30rpx 30rpx;
		border-radius: 15rpx;
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
	}

	.main-text {
		border-bottom: 4rpx solid #fff;
	}

	/* 步骤栏 */
	.step {
		padding: 10rpx;
	}

	.uni-steps__row-title.data-v-1ec1e3f6 {
		color: #62a9f9 !important;
	}

	.uni-icons.data-v-a2e81f6e {
		color: #62a9f9 !important;
	}

	.uni-steps__row-circle.data-v-1ec1e3f6 {
		background-color: #62a9f9 !important;
	}

	.uni-steps__row-line.data-v-1ec1e3f6 {
		background-color: #62a9f9 !important;
	}
</style>
