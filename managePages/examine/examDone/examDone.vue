<template>
	<view class="content" :style="'height:'+totalHeight+'%'">
		<view v-for="(item,index) in homePosts" :key="index" class="card">
			<uni-card>
				<navigator
					:url="'/managePages/examine/examineDetail/examineDetail?repairId='+ item.repairId + '&type='+ item.type + '&fromPage=examDone'">
					<view class="uni-flex uni-row">
						<view style="margin-top: 10rpx;">
							<image src="/static/did.png" style="width: 50rpx;height: 50rpx;"></image>
						</view>
						<view class="uni-flex uni-column">
							<view style="margin-top: 10rpx;">
								<text>{{item.message}}</text>
							</view>
							<view class="uni-flex uni-column">
								<text>申报人：{{item.surveyName}}</text>
								<text>申报时间：
									<!-- {{item.repairTime}} -->
									{{item.repairTime | formatDate}}
								</text>
								<text>申报编号：{{item.repairId}}</text>
								<text style="color: #808080;">点击查看详情</text>
							</view>
						</view>
					</view>
				</navigator>
			</uni-card>
		</view>
	</view>
</template>

<script>
	import {
		formatDate
	} from '../../../common/date.js'
	export default {
		data() {
			return {
				homePosts: [],
				totalHeight: 0,
			}
		},

		onLoad() {
			this.getHomePosts();
		},
		methods: {
			getHomePosts() {
				let _this = this;
				uni.request({
					url: _this.apiServer + "/api/get/getAll/repair",
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'enctype': "multipart/form-data"
					},
					method: 'POST',

					data: {
						no: _this.$store.state.userInfo.no,
						position: _this.$store.state.userInfo.position,
						filter: 'isVet',
						isVet: true
					},

					success: (res) => {
						console.log(res.data.data);
						// 请求成功之后将文章列表数据赋值给homePosts
						_this.homePosts = res.data.data; //根据API数据找到对应的集合
						_this.totalHeight = res.data.data.length * 22.5
						if (_this.totalHeight < 100) {
							_this.totalHeight = 100
						}
					}
				});
			}
		},
		filters: {
			formatDate(time) {
				let date = new Date(time);
				return formatDate(date, 'yyyy年MM月dd日 hh:mm:ss');
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
		height: 110%;
		position: absolute;
		background-image: linear-gradient(#62a9f9, #4389f2);
	}

	.card {
		width: 90%;
		box-shadow: 10rpx 10rpx 10rpx -4rpx rgba(0, 0, 0, .4);
		margin: 20rpx 0;
		border-radius: 15rpx;
	}
</style>
