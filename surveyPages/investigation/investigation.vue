<template>
	<view class="content">
		<!-- 内容主体 -->
		<view class="box">
			<!-- 上传图片《----- -->
			<view class="text1">
				上传照片
			</view>
			<view class="documentUp">
				<view class="uni-uploader">
					<view class="uni-uploader-head">
						<view class="uni-uploader-title">点击可预览选好的图片</view>
						<view class="uni-uploader-info">{{tempFilePaths.length}}/1</view>
					</view>
					<view class="uni-uploader-body">
						<view class="uni-uploader__files">
							<block v-for="(image,index) in tempFilePaths" :key="index">
								<view class="uni-uploader__file">
									<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage">
									</image>
								</view>
							</block>
							<view class="uni-uploader__input-box">
								<view class="uni-uploader__input" @tap="chooseImage"></view>
							</view>
						</view>
					</view>
				</view>
				<view class="add-delete" @click="remove">清除</view>
			</view>
			<!-- -----》上传图片 -->


			<!-- 照片回显《------- -->
			<!-- 可编辑的，为了防止识别后车牌不对，可以手动更改 -->
			<view class="text2">车牌号:</view>
			<input type="text" class="returnMessage" v-model="license" />
			<!-- -----》 -->

			<!-- 原因说明《----- -->
			<view class="text2">
				原因说明：
			</view>
			<textarea v-model="reason" placeholder="请输入原因" class="season" />
			<!-- ---- -->

			<!-- 提交按钮 -->
			<button type="primary" @click="submit" :disabled="isAble">提交</button>
		</view>
	</view>
</template>

<script>
	function getDate(type) {
		const date = new Date();

		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;

		return `${year}-${month}-${day}`;
	}
	export default {
		data() {
			return {
				tempFilePaths: [], //图片暂存
				license: '',
				reason: '',
				isAble: true
			}
		},
		methods: {
			submit() {
				let _this = this
				uni.request({
					url: _this.apiServer + "/api/update/investigate",
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'enctype': "multipart/form-data"
					},
					data: {
						// 需要派车单编号以及表单信息
					},
					success(res) {
						console.log(res.data)
						if (res.data.code === 200) {
							uni.showToast({
								title: '提交成功',
								icon: 'success',
								duration: 1000,
								success() {
									setTimeout(function() {
										uni.navigateBack({})
									}, 1000)
				
								}
							})
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								duration: 1000,
							})
						}
					}
				})
			},
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.tempFilePaths,
				})
			},
			// 选择图片后立马发送照片
			chooseImage: async function() {
				let _this = this;
				if (_this.tempFilePaths.length === 1) {
					let isContinue = await _this.isFullImg();
					if (!isContinue) {
						return;
					}
				}
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					success: (res) => {
						_this.tempFilePaths.push(res.tempFilePaths[0]);
						_this.isAble = false;
						console.log(_this.tempFilePaths)
						let timestamp = new Date().getTime();
						let fixTime = new Date(_this.fixDate);
						uni.uploadFile({
							url: _this.apiServer + "/api/license",
							filePath: _this.tempFilePaths[0],
							name: "licenseImg",
							formData: {
								
							},
							header: {
								'content-type': 'multipart/form-data'
							},
							success(res) {
								res.data = JSON.parse(res.data);
								if (res.data.code == 200) {
									uni.showToast({
										title: '识别成功',
										icon: 'success',
										duration: 1000,
										success() {
											_this.license = res.data.msg
										}
									})
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
			},
			remove: function() {
				this.tempFilePaths = [];
				this.isAble = true;
			},
			isFullImg: function() {
				return new Promise((res) => {
					uni.showModal({
						content: "图片上传个数已上限",
						success: (e) => {
							res(false)
						},
						fail: () => {
							res(false)
						}
					})
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
		justify-content: center;
		background-image: linear-gradient(#62a9f9 , #4389f2);
		flex-direction: column;
		width: 100%;
		height: 100%;
		position: absolute;
	}

	/* 内容主题 */
	.box {
		width: 610rpx;
		height: 1180rpx;
		background-color: #fff;
		border-radius: 15rpx;
		box-shadow: 10rpx 10rpx 10rpx -4rpx rgba(0, 0, 0, .4);
	}

	/* 文件上传《----- */
	.text1 {
		width: 100%;
		font-size: 45rpx;
		font-weight: 600;
		color: #5299f6;
		text-align: center;
	}

	.documentUp {
		box-shadow: 0rpx 10rpx 10rpx -4rpx rgba(0, 0, 0, .4);
		margin: 20rpx;
	}

	.add-delete {
		width: 80rpx;
		text-align: center;
		font-size: 30rpx;
		font-weight: 600;
		margin-left: 475rpx;
		color: #d02926;
	}

	/* -----》 */

	/* 照片回显《----- */
	.text2 {
		font-size: 45rpx;
		font-weight: 600;
		margin-bottom: 20rpx;
		color: #5299f6;
	}

	.returnMessage {
		width: 80%;
		height: 50rpx;
		border: 4rpx solid #5299f6;
		margin: 0 auto;
		border-radius: 15rpx;
		margin-bottom: 20rpx;
	}

	.returnMessage:hover {
		box-shadow: 20rpx 20rpx 20rpx -4rpx rgba(0, 0, 0, .4);
		animation: messageShow 1s;
	}

	@-webkit-keyframes messageShow {
		0% {
			box-shadow: 20rpx 20rpx 20rpx -4rpx rgba(0, 0, 0, 0);
		}

		100% {
			box-shadow: 20rpx 20rpx 20rpx -4rpx rgba(0, 0, 0, .4);
		}
	}

	@keyframes messageShow {
		0% {
			box-shadow: 20rpx 20rpx 20rpx -4rpx rgba(0, 0, 0, 0);
		}

		100% {
			box-shadow: 20rpx 20rpx 20rpx -4rpx rgba(0, 0, 0, .4);
		}
	}

	/* ----》 */

	/* 原因说明《--- */
	.season {
		width: 94%;
		height: 300rpx;
		box-shadow: 0rpx 10rpx 10rpx -4rpx rgba(0, 0, 0, .4);
		border-radius: 20rpx;
		margin: 20rpx;
	}

	.season:hover {
		box-shadow: 20rpx 20rpx 20rpx -4rpx rgba(0, 0, 0, .4);
		animation: seasonShadow 0.5s;
	}

	@-webkit-keyframes seasonShadow {
		0% {
			box-shadow: 0rpx 10rpx 10rpx -4rpx rgba(0, 0, 0, .4);
		}

		100% {
			box-shadow: 20rpx 20rpx 20rpx -4rpx rgba(0, 0, 0, .4);
		}
	}

	@keyframes seasonShadow {
		0% {
			box-shadow: 0rpx 10rpx 10rpx -4rpx rgba(0, 0, 0, .4);
		}

		100% {
			box-shadow: 20rpx 20rpx 20rpx -4rpx rgba(0, 0, 0, .4);
		}
	}

	/* ----》 */

	/* 按钮 */
	button[type=primary] {
		background-color: #468cf3;
		width: 200rpx;
		font-size: 40rpx;
	}

	.button-hover[type=primary] {
		background-color: #aedafe;
	}

	button[disabled][type=primary] {
		background-color: #cdd0d9;
	}
</style>
