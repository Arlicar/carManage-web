<template>
	<!-- 管理员保养记录详情页 -->
	<view class="content">
		<view class="main">
			<view class="bg-gray"><text class="main-text">申报人信息</text></view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">姓名</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{name}}</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">工号</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{no}}</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="bg-gray"><text class="main-text">申报信息</text></view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">保养时间</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{protectTime}}</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">车牌号</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{protectLicense}}</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">保养详情</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{detail}}</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="bg-gray"><text class="main-text">审批人信息</text></view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">审批人编号</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">{{vetNo}}</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="bg-gray"><text class="main-text">审批流程</text></view>
			<view class=" uni-row uni-card step">
				<uni-steps :options="[{title: '发起申报'}, {title:'管理员'},{title: '负责人'},]" :active="2"></uni-steps>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		onLoad: function(options) {
			console.log('onload')
			this.protectId = options.protectId;
			this.getRepairDetail();
		},
		data() {
			return {
				protectId: '',
				name: this.$store.state.userInfo.name,
				no: this.$store.state.userInfo.no,
				protectTime: '',
				protectLicense: '',
				detail: '',
				vetNo: '',
			}
		},

		methods: {
			getRepairDetail() {
				let _this = this;
				uni.request({
					url: _this.apiServer + "/api/get/getDetail/protectCar",
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'enctype': "multipart/form-data"
					},
					data: {
						protectId: _this.protectId,
					},
					success: res => {
						console.log(res.data.data);
						_this.protectId = res.data.data.protectId;
						_this.protectTime = res.data.data.protectTime;
						_this.protectLicense = res.data.data.protectLicense;
						_this.detail = res.data.data.detail;
						_this.vetNo = res.data.data.vetNo;
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
		background-image: linear-gradient(#62a9f9, #7bc4ff );
	}

	/* ---- */
	/* 内容主体 */
	.main {
		position: absolute;
		top: 100rpx;
		width: 80%;
		background-color: rgba(255,255,255,.2);
		border-radius: 15rpx;
		padding: 30rpx;
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
