<template>
	<view class="content">
		<!-- 头部区域 -->
		<view class="top">
			<image src="/static/examTop.png" class="topImg"></image>
			<text class="topText">维修审批</text>
			<!-- 当前选中的申报类型 -->
		</view>

		<!-- 内容主体区 -->
		<!-- 维修审批 -->
		<view class="main">
			<view class="uni-flex uni-column forms">
				<text class="intro">维修单编号：{{list.repairId}}</text>
				<text class="intro">维修车辆车牌：{{list.repairLicense}}</text>
				<text class="intro">维修说明：{{list.repairMsg}}</text>
				<text class="intro">维修部位照片：</text>
				<image class="img" :src="list.repairImg"></image>
				<text
					class="intro">维修时间：{{new Date(parseInt(list.repairTime)).toLocaleString().replace(/:\d{1,2}$/,' ')}}</text>
				<text class="intro">勘察员工号：{{list.surveyNo}}</text>
				<text
					class="intro">勘察员时间：{{new Date(parseInt(list.surveyTime)).toLocaleString().replace(/:\d{1,2}$/,' ')}}</text>
			</view>

			<view class="uni-flex uni-column forms" v-if="fromPage=='examDone'" style="width: 30%;
    margin: 30rpx auto;">
				<text class="intro pass" v-if="list.vetResult==1">通过</text>
				<text class="intro rejeced" v-else>未通过</text>
			</view>


			<view class="uni-flex uni-row" style="margin-top: 40rpx;" v-if="fromPage=='examToDo'">
				<button @click="no" class="noButton">否决</button>
				<button @click="yes" class="yesButton">同意</button>
			</view>
		</view>


		<!-- 手写签名 -->
		<uni-popup ref="popup" type="bottom">
			<view class="writeName">
				<view class="title">请在下面签名：</view>
				<canvas class="mycanvas" canvas-id="mycanvas" @touchstart="touchstart" @touchmove="touchmove"
					@touchend="touchend" style="width: 700rpx;height: 1250rpx;"></canvas>
				<view class="footer">
					<view class="left" @click="finish">完成</view>
					<view class="right" @click="clear">清除</view>
				</view>
				<view class="closeBtn" @click="close">
					x
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	var x = 20;
	var y = 20;
	export default {
		data() {
			return {
				repairId: '',
				list: [],
				fromPage: '',
				ctx: '', //绘图图像
				points: [], //路径点集合 
				src: [], //存签名图片用的数组
				ctr: 0, //判断是选择了通过还是否决，1为通过
			}
		},

		onLoad: function(options) {
			this.fromPage = options.fromPage;
			this.repairId = options.repairId;
			console.log(options);
			this.getList();


			// 签字画笔
			this.ctx = uni.createCanvasContext("mycanvas", this); //创建绘图对象

			//设置画笔样式
			this.ctx.lineWidth = 4;
			this.ctx.lineCap = "round"
			this.ctx.lineJoin = "round"
		},

		methods: {
			// 关闭签字面板
			close() {
				this.$refs['popup'].close();
			},
			getList() {
				let _this = this;
				uni.request({
					url: _this.apiServer + "/api/get/getDetail/repair",
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'enctype': "multipart/form-data"
					},
					data: {
						repairId: _this.repairId,
					},
					success: res => {
						console.log(res.data.data);
						_this.list = res.data.data[0];
					},
					fail: res => {
						console.log("发生了错误");
					},
				})
			},

			yes() {
				let _this = this;
				_this.ctr = 1; //表示通过
				// 手写签名模块弹出
				this.$refs.popup.open('center')
			},
			no() {
				let _this = this;
				// 手写签名模块弹出
				this.$refs.popup.open('center')
			},

			// 手写签名
			//触摸开始，获取到起点
			touchstart: function(e) {
				let startX = e.changedTouches[0].x;
				let startY = e.changedTouches[0].y;
				let startPoint = {
					X: startX,
					Y: startY
				};

				/* **************************************************
					#由于uni对canvas的实现有所不同，这里需要把起点存起来
				 * **************************************************/
				this.points.push(startPoint);

				//每次触摸开始，开启新的路径
				this.ctx.beginPath();
			},

			//触摸移动，获取到路径点
			touchmove: function(e) {
				let moveX = e.changedTouches[0].x;
				let moveY = e.changedTouches[0].y;
				let movePoint = {
					X: moveX,
					Y: moveY
				};
				this.points.push(movePoint); //存点
				let len = this.points.length;
				if (len >= 2) {
					this.draw(); //绘制路径
				}

			},

			// 触摸结束，将未绘制的点清空防止对后续路径产生干扰
			touchend: function() {
				this.points = [];
			},
			draw: function() {
				let point1 = this.points[0]
				let point2 = this.points[1]
				this.points.shift()
				this.ctx.moveTo(point1.X, point1.Y)
				this.ctx.lineTo(point2.X, point2.Y)
				this.ctx.stroke()
				this.ctx.draw(true)
			},

			//清空画布
			clear: function() {
				let that = this;
				uni.getSystemInfo({
					success: function(res) {
						let canvasw = res.windowWidth;
						let canvash = res.windowHeight;
						that.ctx.clearRect(0, 0, canvasw, canvash);
						that.ctx.draw(true);
					},
				})
			},

			//完成绘画并上传
			finish: function() {
				let _this = this
				uni.canvasToTempFilePath({
					canvasId: 'mycanvas',
					success: function(res) {
						_this.src.unshift(res.tempImagePath)


						// 上传照片
						uni.uploadFile({
							url: _this.apiServer + "", //填api
							filePath: _this.src[0],
							name: "image",
							header: {
								'content-type': 'multipart/form-data'
							},
							formData: {

							},
							success(res) {
								res.data = JSON.parse(res.data);
								if (res.data.code == 200) {
									if (_this.src === 1) {

										let timestamp = new Date().getTime();

										uni.request({
											url: _this.apiServer +
												"/api/update/vet/repair",
											method: 'POST',
											header: {
												'content-type': 'application/x-www-form-urlencoded',
												'enctype': "multipart/form-data"
											},
											data: {
												repairId: _this.repairId,
												result: 1,
												time: timestamp,
												position: _this.$store.state.userInfo
													.position,
												no: _this.$store.state.userInfo.no,
												resultMsg: '',
											},
											success: res => {
												if (res.data.code == 200) {
													uni.showToast({
														title: '该申报已同意',
														icon: 'success',
														duration: 1000,
													});
													setTimeout(function() {
														uni.navigateBack({})
													}, 1000);
												} else {
													uni.showToast({
														title: '提交失败',
														icon: 'none',
														duration: 1000,
													});
												}

											},
											fail: res => {
												console.log("发生了错误");
											},
										})
									} else {

										uni.request({
											url: _this.apiServer +
												"/api/update/vet/repair",
											method: 'POST',
											header: {
												'content-type': 'application/x-www-form-urlencoded',
												'enctype': "multipart/form-data"
											},
											data: {
												repairId: _this.repairId,
												result: 0,
												time: timestamp,
												position: _this.$store.state.userInfo
													.position,
												no: _this.$store.state.userInfo.no,
												resultMsg: '',
											},
											success: res => {
												uni.showToast({
													title: '该审批已拒绝',
													icon: 'success',
													duration: 1000,
												});
												setTimeout(function() {
													uni.navigateBack({})
												}, 1000);
											},
											fail: res => {
												console.log("发生了错误");
											},
										})
									}
								} else {
									uni.showToast({
										title: res.data.msg,
										icon: 'none',
										duration: 1000,
									})
								}
							},
							fail(res) {
								console.log('fail' + res.errMsg)
								uni.showToast({
									title: "接口访问出错",
									icon: 'none',
									duration: 1000,
								})
							}
						})
					}
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
		justify-content: center;
		background-image: linear-gradient(#4389f2, #7bc4ff);
		flex-direction: column;
		width: 100%;
		height: 100%;
		position: absolute;
	}

	/* 头部区域 */
	.top {
		position: absolute;
		top: 0;
		width: 100%;
		background-image: linear-gradient(#62a9f9, #ffffff);
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

	@-webkit-keyframes topShow {
		0% {
			top: -220rpx;
		}

		60% {
			top: 0rpx;
		}

		70% {
			top: -30rpx;
		}

		80% {
			top: 0rpx;
		}

		90% {
			top: -10rpx;
		}

		100% {
			top: 0rpx;
		}
	}

	@keyframes topShow {
		0% {
			top: -220rpx;
		}

		60% {
			top: 0rpx;
		}

		70% {
			top: -30rpx;
		}

		80% {
			top: 0rpx;
		}

		90% {
			top: -10rpx;
		}

		100% {
			top: 0rpx;
		}
	}

	/* ---- */
	/* 内容主体区 */
	.main {
		position: absolute;
		top: 230rpx;
		background-color: rgba(255,255,255,.2);
		border-bottom: 15rpx;
	}

	.forms {
		margin-top: 40rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		background-color: #fff;
		border-radius: 15rpx;
		box-shadow: 10rpx 10rpx 10rpx -4rpx rgba(0, 0, 0, .4);
	}

	.intro {
		font-weight: 600;
		font-size: 40rpx;
		margin-inline: 40rpx;
		color: #545353;

	}

	.pass {
		color: #83c3f6;
		margin: 0 auto;
	}

	.rejeced {
		color: #e79399;
		margin: 0 auto;
	}

	.img {
		width: 620rpx;
		height: 420rpx;
		border-radius: 20rpx;
		margin: 10rpx auto;
	}

	/* ---- */
	/* 按钮 */
	.yesButton {
		background-color: #83c3f6;
		border-radius: 15rpx;
		width: 40%;
		color: #fff;
		font-size: 40rpx;
		font-weight: 600;
		box-shadow: 10rpx 10rpx 10rpx -4rpx rgba(0, 0, 0, .4);
	}

	.noButton {
		background-color: #e79399;
		border-radius: 15rpx;
		width: 40%;
		color: #fff;
		font-size: 40rpx;
		font-weight: 600;
		box-shadow: 10rpx 10rpx 10rpx -4rpx rgba(0, 0, 0, .4);
	}

	.button-hover {
		opacity: 60%;
	}
	
	/* 手写签名样式 */
	.writeName{
		background-color: #FFFFFF;
		border-radius: 15rpx;
		box-shadow: 10rpx 10rpx 10rpx -4rpx rgba(0,0,0,.4);
	}
	.writeName .title{
		font-size: 40rpx;
		font-weight: 600;
		text-align: center;
		color: #579EF7;
		text-shadow: 0 0 30rpx #488DF2;
	}
	.writeName .footer{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.left,.right{
		font-size: 35rpx;
		margin-bottom: 10rpx;
		font-weight: 600;
		color: #5aa0f7;
	}
	.closeBtn{
		position: absolute;
		top: -15rpx;
		right: -15rpx;
		font-size: 50rpx;
		border-radius: 50%;
		width: 60rpx;
		height: 60rpx;
		padding: 0;
		background-color: #ffffff;
		line-height: 51rpx;
		text-align: center;
		font-weight: 600;
		color: #599ff7;
		box-shadow: 10rpx 10rpx 10rpx -4rpx rgba(0,0,0,.4);
	}
</style>
