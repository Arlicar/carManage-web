<template>
	<view class="base_body">
		<map  :markers="markers" id="map" style="width: 100%; height: 100%;" show-compass=true :latitude="latitude" :longitude="longitude" @labeltap="labeltap">
			<cover-view slot="callout">
				<block v-for="(item,index) in markers" :key="index">
					<cover-view class="customCallout" :marker-id="item.id">
						<cover-view class="content">
							{{item.title}}
							
						</cover-view>
					</cover-view>
				</block>
			</cover-view>
		</map>

	</view>
</template>

<script>
	export default {
		props: {
		},
		data() {
			return {
				map: '',
				latitude: 30.890, // 地图默认显示的维度
				longitude: 120.39752, // 地图默认显示的纬度
				markers: [{
					id: 1,                  //出车号
					latitude: 30.890,       //当前车辆的经纬度
					longitude: 120.39752,   
					title: "出车号：1",		 //前端显示出车号id
					joinCluster: true,       //加入点聚合
					label:{
						content:'浙A74843',  //车牌号
						joinCluster:true,	 //加入点聚合
						color: '#ffffff',
						fontSize: 12,
						padding: 5,
						textAlign: 'center',
						bgColor: '#62a9f9',
						},
				}, {
					id: 2,
					latitude: 30.891,
					longitude: 120.39752,
					title: "点击提示2",
					joinCluster: true,
					label:{
						content:'浙C16541',
						joinCluster:true,
						color: '#ffffff',
						fontSize: 12,
						padding: 5,
						textAlign: 'center',
						bgColor: '#62a9f9',
						},
				}, {
					id: 3,
					latitude: 30.892,
					longitude: 120.39752,
					title: "点击提示3",
					joinCluster: true,
				}, {
					id: 7,
					latitude: 30.893,
					longitude: 120.39752,
					title: "点击提示4",
					joinCluster: true,
				}, ],
			}
		},
		onLoad() {

		},
		onReady() {},
		methods: {
			labeltap(e){
				console.log(e.markerId)
				uni.navigateTo({
					url:'../../../vetPages/carReport/drive/drive?driveId'+e.markerId
				})
			},
		}
	}
</script>

<style>
	.base_body {
		width: 100%;
		height: 100%;
		bottom: 0;
		z-index: 999;
		
	}

	.customCallout {
		box-sizing: border-box;
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 30px;
		width: 150px;
		height: 40px;
		display: inline-flex;
		padding: 5px 20px;
		justify-content: center;
		align-items: center;
	}

	.content {
		flex: 0 1 auto;
		margin: 0 10px;
		font-size: 14px;
	}
</style>