<template>
	<!-- vet-违规详情页 -->
	<!-- js代码没写完 -->
	<view class="content">
		<view class="main">
			<view class="bg-gray"><text class="main-text">违规人信息</text></view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">姓名</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">吴亦肖</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">工号</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">ad195122</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>

			<view class="bg-gray"><text class="main-text">违规信息</text></view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">违规时间</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">2021-10-31</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">车牌号</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">浙C84625</text> <!-- 通过api接口从数据库调取数据自动生成 -->
			</view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">违规原因</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">汽车违停</text> <!-- 通过api接口从数据库调取数据自动生成 -->

			</view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">违规地点</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">杭州下沙宝龙广场</text>
			</view>
			<view class="uni-flex uni-row uni-card">
				<text class="word" style="-webkit-flex: 1;flex: 1;">罚款金额</text>
				<text class="word" style="-webkit-flex: 1;flex: 1;">￥100</text>
			</view>
		<view class="uni-flex uni-row uni-card">
			<text class="word" style="-webkit-flex: 1;flex: 1;">支付状态</text>
			<text class="word" style="-webkit-flex: 1;flex: 1;">未支付</text>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array2: ['--请选择--', '李四', '张三', '王五'],
				index2: 0,
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
		background-image: linear-gradient(#62a9f9, #7bc4ff);
	}

	/* ---- */
	/* 内容主体 */
	.main {
		position: absolute;
		top: 130rpx;
		width: 80%;
		background-color: rgba(255, 255, 255, .2);
		border-radius: 15rpx;
		padding: 30rpx;
		box-shadow: 10rpx 10rpx 10rpx -4rpx rgba(0, 0, 0, .4);
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

	.img {
		height: 250rpx;
		border-radius: 15rpx;
		border: 4rpx solid #fff;
		width: 590rpx;
	}
</style>
