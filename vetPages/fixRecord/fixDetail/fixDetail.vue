<template>
	<!-- vet-维修详情页 -->
	<!-- js代码没写完 -->
	<view class="content">
		<view class="main">
				<view class="bg-gray"><text class="main-text">申报人信息</text></view>
				<view class="uni-flex uni-row uni-card">
					<text class="word" style="-webkit-flex: 1;flex: 1;">姓名</text>
					<text class="word" style="-webkit-flex: 1;flex: 1;">曲云蔚</text>  <!-- 通过api接口从数据库调取数据自动生成 -->
				</view>
				<view class="uni-flex uni-row uni-card">
					<text class="word" style="-webkit-flex: 1;flex: 1;">工号</text>
					<text class="word" style="-webkit-flex: 1;flex: 1;">ad484561</text> <!-- 通过api接口从数据库调取数据自动生成 -->
				</view>
				
				<view class="bg-gray"><text class="main-text">申报信息</text></view>
				<view class="uni-flex uni-row uni-card">
					<text class="word" style="-webkit-flex: 1;flex: 1;">申报时间</text>
					<text class="word" style="-webkit-flex: 1;flex: 1;">2021-10-30</text> <!-- 通过api接口从数据库调取数据自动生成 -->
				</view>
				<view class="uni-flex uni-row uni-card">
					<text class="word" style="-webkit-flex: 1;flex: 1;">车牌号</text>
					<text class="word" style="-webkit-flex: 1;flex: 1;">浙C46106</text> <!-- 通过api接口从数据库调取数据自动生成 -->
				</view>
				<view class="uni-flex uni-row uni-card">
					<text class="word" style="-webkit-flex: 1;flex: 1;">维修原因</text>
					<text class="word" style="-webkit-flex: 1;flex: 1;">汽车爆胎</text> <!-- 通过api接口从数据库调取数据自动生成 -->
				</view>
				<view class="bg-gray"><text class="main-text">图片</text></view>
				<image style="-webkit-flex: 1;flex: 1;" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F201%2Fw640h361%2F20190314%2FIb3h-hufnxfn2172374.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638612761&t=c731bea7c98f7f108406b8de06861bb0" class="img"></image>
				<view class="bg-gray"><text class="main-text">审批人信息</text></view>
				<view class="uni-flex uni-row uni-card">
					<text class="word" style="-webkit-flex: 1;flex: 1;">审批人</text>
					<text class="word" style="-webkit-flex: 1;flex: 1;">言丝雨</text> <!-- 通过api接口从数据库调取数据自动生成 -->
				</view>
				<view class="bg-gray"><text class="main-text">审批流程</text></view>
				<view class=" uni-row uni-card step">
					<uni-steps :options="[{title: '发起申报'}, {title:'管理员'},{title: '负责人'},]" :active="2"></uni-steps>
				</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				array2:['--请选择--','李四','张三','王五'],
				index2:0,
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
		background-image: linear-gradient(#62a9f9 , #7bc4ff);
	}
	
	/* ---- */
	/* 内容主体 */
	.main {
		position: absolute;
		top: 30rpx;
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
		font-weight: 600;
		font-size: 35rpx;
		color: #999999;
	}
	
	.main-text {
		border-bottom: 4rpx solid #fff;
	}
		
	.img{
		height: 250rpx;
		border-radius: 15rpx;
		border: 4rpx solid #fff;
		width: 590rpx;
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
