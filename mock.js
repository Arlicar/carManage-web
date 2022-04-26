const Mock = require('better-mock/dist/mock.mp.js')

Mock.mock('http://localhost:8080/api/login', 'POST', () => {
	let Result = {
		code: 200,
		data: {
			token: 'dasdsadasdsdsada',
			employee: {
				position: 'manage', //vet
				name: '张东奇',
				no: 'ad591367'
			},
		},
	}
	return Result
})


Mock.mock('http://localhost:8080/api/get/getProtectTip', 'POST', () => {
	let res = {
		msg: '数据不为空，返回成功',
		data: [{
				license: '浙C25468',
				lastProtectTime: '1633072704000',
			},
			{
				license: '浙A89456',
				lastProtectTime: '1635735628000',
			},
			{
				license: '浙B02546',
				lastProtectTime: '1635063468000',
			},
			{
				license: '浙D78542',
				lastProtectTime: '1636167628000',
			},
			{
				license: '浙C46821',
				lastProtectTime: '1633072704000',
			},
			{
				license: '浙B88643',
				lastProtectTime: '1633072704000',
			},
			{
				license: '浙A12596',
				lastProtectTime: '1633072704000',
			},
			{
				license: '浙D56987',
				lastProtectTime: '1633072704000',
			},
			


		],
	}
	return res
})


Mock.mock('http://localhost:8080/api/get/getAll/protectDeclare', 'POST', () => {
	
let result = {
		data: [{
				protectMsg: '更换轮胎',
				protectId: '303265',
				protectLicense: '浙C33602',
				protectTime: '2020-10-2',
				name:'陈宝根',
			},
			{
					protectMsg: '清洗车体',
					protectId: '156414',
					protectLicense: '浙A55864',
					protectTime: '2020-9-30',
					name:'陈欣然',
			},
			{
					protectMsg: '修复车漆',
					protectId: '156965',
					protectLicense: '浙B46841',
					protectTime: '2020-9-15',
					name:'孙华翰',
			},
			{
					protectMsg: '清洗车体',
					protectId: '187941',
					protectLicense: '浙D41564',
					protectTime: '2020-9-5',
					name:'烟学真',
			},
		],
	};
	return result
})

Mock.mock('http://localhost:8080/api/get/employee', 'POST', () => {
	
let result = {
		data: [{
				name:'蒙竹悦'
			},
				
			{
				name:'本沛凝'
			}
		],
	};
	return result
})

Mock.mock('http://localhost:8080/api/add/report/protect', 'POST', (option) => {
	console.log(option)
	let res = {
		code: 200,
		data: {
			protectId: '11111'
		}
	}
	return res
})

Mock.mock('http://localhost:8080/api/get/getDetail/protectCar','POST', (option) => {
	console.log(option)
	let res = {
		code: 200,
		data: {
			protectTime: '2020-10-2',
			protectLicense: '浙C33602',
			detail:'更换轮胎',
			vetNo:'vt489464'
		}
	}
	return res
})

Mock.mock('http://localhost:8080/api/add/report/assign', 'POST', (option) => {
	console.log(option)
	let res = {
		code: 200,
		data: {
			assginId: '11111'
		}
	}
	return res
})


Mock.mock('http://localhost:8080/api/get/getAll/employee', 'POST', (option) => {
	console.log(option)
	let res = {
		data: [{
				name: 'dsadsad',
				no: '121211212',
			},
			{
				name: 'dasdsadaa',
				no: '4545646547',
			}
		],
	}
	return res
})




Mock.mock('http://localhost:8080/api/get/getAll/examDone', 'POST', (option) => {
	console.log(option)
	let res = {
		data: [{
				name: '小兵1',
				time: '时间戳1',
				message: '信息1',
				examineId: '123',
				type: '保养申报'
			},
			{
				name: '小兵2',
				time: '时间戳2',
				message: '信息2',
				examineId: '456',
				type: '维修申报'
			}
		],
	}
	return res
})


Mock.mock('http://localhost:8080/api/get/getAll/examToDo', 'POST', (option) => {
	console.log(option)
	let res = {
		data: [{
				name: '小兵1',
				time: '时间戳1',
				message: '信息1',
				examineId: '123',
				type: '保养申报'
			},
			{
				name: '小兵2',
				time: '时间戳2',
				message: '信息2',
				examineId: '456',
				type: '维修申报'
			}
		],
	}
	return res
})


Mock.mock('http://localhost:8080/api/get/bossNo', 'POST', (option) => {
	console.log(option)
	let res = {
		data: {
			bossNo: '31234324',
		},
	}
	return res
})



Mock.mock('http://localhost:8080/api/get/getAll/protect', 'POST', (option) => {
	console.log(option)
	let res = {
		data: [{
				name: '111',
				protectLiense: 'protectlicense',
				protectTime: 'time',
				protectMsg: 'dasdaa',
				protectId: '123456'
			},
			{
				name: '222',
				protectLiense: 'protectlicense2',
				protectTime: 'time2',
				protectMsg: 'dasdasd',
				protectId: '654321'
			},
			{
				name: '222',
				protectLiense: 'protectlicense2',
				protectTime: 'time2',
				protectMsg: 'dasdasd',
				protectId: '654321'
			},
			{
				name: '222',
				protectLiense: 'protectlicense2',
				protectTime: 'time2',
				protectMsg: 'dasdasd',
				protectId: '654321'
			},
			{
				name: '222',
				protectLiense: 'protectlicense2',
				protectTime: 'time2',
				protectMsg: 'dasdasd',
				protectId: '654321'
			},
			{
				name: '222',
				protectLiense: 'protectlicense2',
				protectTime: 'time2',
				protectMsg: 'dasdasd',
				protectId: '654321'
			},
			{
				name: '222',
				protectLiense: 'protectlicense2',
				protectTime: 'time2',
				protectMsg: 'dasdasd',
				protectId: '654321'
			},
			{
				name: '222',
				protectLiense: 'protectlicense2',
				protectTime: 'time2',
				protectMsg: 'dasdasd',
				protectId: '654321'
			},
			{
				name: '222',
				protectLiense: 'protectlicense2',
				protectTime: 'time2',
				protectMsg: 'dasdasd',
				protectId: '654321'
			}
		]
	}
	return res
})

Mock.mock('http://localhost:8080/api/get/getAll/repair', 'POST', (option) => {
	console.log(option)
	let res = {
		data: [{
				repairMsg: '汽车爆胎',
				repairTime: '1636003068000',
				repairLicense: '浙A95164',
				name: '曲云蔚',
				repairId: '175469',
				examineId: '48946',
				time:'2021-10-30'
				
			},
			{
				repairMsg: '车窗破碎',
				repairTime: '1633328268000',
				repairLicense: '浙B57993',
				name: '郸子民',
				repairId: '481397',
				examineId: '77946',
				time:'2021-10-19'
			},
			{
				repairMsg: '雨刷失灵',
				repairTime: '1634206668000',
				repairLicense: '浙C66592',
				name: '闻人晴波',
				repairId: '126498',
				examineId:'99564',
				time:'2021-10-10'
			},
			{
				repairMsg: '后视镜破碎',
				repairTime: '1635059868000',
				repairLicense: '浙D48163',
				name: '双涵润',
				repairId: '483269',
				examineId: '486131',
				time:'2021-10-1'
			},
			
		],
	}
	return res
})

Mock.mock('http://localhost:8080/api/update/location', 'POST', (option) => {
	console.log(option)
})

Mock.mock('http://localhost:8080/api/post/location', 'POST', (option) => {
	console.log(option)
})


Mock.mock('http://localhost:8080/api/get/getDetail/examine', 'POST', (option) => {
	console.log(option)
	let res = {
		data: {
			protectId: '123133',
			protectMsg: '23213213',
			result: 1
		}
	}
	return res
})



Mock.mock('http://localhost:8080/api/add/pickVehicle', 'POST', (option) => {
	console.log(option)
let res={
	code:200,
	data:{},
}
return res
})

Mock.mock('http://localhost:8080/api/add/report/fix', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:{}
	}
	return res
})

Mock.mock('http://localhost:8080/api/get/getDetail/vehicleInfo', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:[
			{
				status:0,
				begin:'2020-10-20',
				type: 0,
				peopleNum: 4,
				emission: 2,
				manageNo: 'ad753261',
				price: 2000000,
				lastProtectTime: '1635934781000'
			}
		]
	}
	return res
})


Mock.mock('http://localhost:8080/api/get/getAll/punish', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:[{
			punishId:'15846',
			accidentMsg:'违停',
			accidentPoint:'location',
			manageNo:'4324324',
			payStatus:1,
			punishAmount: 200
		},
		{
			punishId:'68498',
			accidentMsg:'闯红灯',
			accidentPoint:'location2',
			manageNo:'32132323',
			payStatus:0,
			punishAmount: 200
		},
		{
			punishId:'32525',
			accidentMsg:'违停',
			accidentPoint:'location2',
			manageNo:'32132323',
			payStatus:1,
			punishAmount: 200
		},
		{
			punishId:'74156',
			accidentMsg:'闯红灯',
			accidentPoint:'location2',
			manageNo:'32132323',
			payStatus:1,
			punishAmount: 200
		}]
	}
	return res
})

Mock.mock('http://localhost:8080/api/get/getAll/assign', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:[{
			assignLicense:'浙C68964',
			assignId: '15656',
			assignTime: '2021-10-30',
			result: '未出车',
			name:'龚飞章'
		},
		{
			assignLicense:'浙C48635',
			assignId: '96584',
			assignTime: '2021-10-15',
			result: '以出车',
			name:'同佳思'
		},
		{
			assignLicense:'浙C03056',
			assignId: '26554',
			assignTime: '2021-10-8',
			result: '以出车',
			name:'长婉静'
		},
		{
			assignLicense:'浙C94620',
			assignId: '30518',
			assignTime: '2021-10-1',
			result: '以出车',
			name:'堂佳思'
		},
		],
	}
	return res
})


Mock.mock('http://localhost:8080/api/get/getAll/drive', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:[{
			driveLicense:'浙C02506',
			driveId: '16514',
			surveyName: '白夏波',
		},
		{
			driveLicense:'浙A45841',
			driveId: '95163',
			surveyName: '公西峻',
		},
		],
	}
	return res
})

Mock.mock('http://localhost:8080/api/get/getAll/vehicleInfo', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:[{
			license:'浙C68964',
			manageName:'陈中天',
			status:0
		},
		{
			license:'浙A84235',
			manageName:'黄晓烟',
			status:1
		},
		{
			license:'浙A86425',
			manageName:'李博天',
			status:2
		},
		{
			license:'浙A87658',
			manageName:'王汪',
			status:3
		},
		{
			license:'浙A81275',
			manageName:'王旺',
			status:4
		},
		{
			license:'浙B75642',
			manageName:'王往',
			status:4
		},
		{
			license:'浙A32559',
			manageName:'王亡',
			status:3
		},
		{
			license:'浙A88421',
			manageName:'黄游',
			status:2
		}],
	}
	return res
})

Mock.mock('http://localhost:8080/api/get/getDetail/punish', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:[{
			accidentMsg:'汽车违停',
			payStatus: '0',
			accidentPoint:'杭州下沙宝龙广场',
			punishMsg:'汽车违停',
			manageNo:'ad195122',
			accidentTime:'2021-10-30',
			license:'浙C84625',
			doneTime:'2021-10-31',
			accidentMsg:'汽车违停',
			punishAmount:100
		}
		],
	}
	return res
})

Mock.mock('http://localhost:8080/api/get/count', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:{
			vet: 4,
			notVet: 4
		},
	}
	return res
})

Mock.mock('http://localhost:8080/api/get/getDetail/lendCar', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:{
			name:'朱丽雅',
			phone:'15280339918',
			no: 'sv77265',
			lendTime:'2020-10-30',
			lendLicense:'浙B49436',
			lendDay: '5',
			reason: '临时出差',
			vetNo:'vt456689',
		},
	}
	return res
})

// 管理员维修审批已审理详情页
Mock.mock('http://localhost:8080/api/get/getDetail/repair', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:[{
			repairId: '1986412',
			repairLicense: '浙C02485',
			repairMsg: '轮胎爆胎',
			repairImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F201%2Fw640h361%2F20190314%2FIb3h-hufnxfn2172374.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638612761&t=c731bea7c98f7f108406b8de06861bb0',
			surveyNo: 'sv456789',
			vetResult: 1,
			repairTime: '1636021017000',
			surveyTime: '1635934781000'
		}],
	}
	return res
})

// 管理员借车申报记录
Mock.mock('http://localhost:8080/api/get/getAll/lend', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:[{
			lendId: '49841',
			lendMsg: '123456',
			name: '宋忆雪',
			phone: '18632213874',
			lendTime: '1636108814000',
			lendLicense: '浙A98489'
		},
		{
			lendId: '654124',
			lendMsg: '123456',
			name: '宦彦灵',
			phone: '19851285658',
			lendTime: '1634276414000',
			lendLicense: '浙C60886'
		},
		{
			lendId: '54613',
			lendMsg: '123456',
			name: '宛昊然',
			phone: '15613338458',
			lendTime: '1633833614000',
			lendLicense: '浙A84962'
		},
		{
			lendId: '78496',
			lendMsg: '123456',
			name: '南门玄',
			phone: '13891354809',
			lendTime: '1631238014000',
			lendLicense: '浙B78446'
		},
		],
	}
	return res
})
// 管理员借车申报记录详情页
Mock.mock('http://localhost:8080/api/get/getDetail/lend', 'POST', () => {
	let res = {
		data: {
			phone:'13891354809',
			lendDrivecardImg:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-df45ca5d530262ace8717461c1f7fee1_hd.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638177943&t=703ed4153bf79282e72706be191a84af',
			lendTime: '1636108814000',
			lendLicense: '浙A98489',
			reason: '现场勘察',
			vetNo: 'vt123456',
			lendDay: 20,
			lendMsg:'临时出差',
			manageNo:'ad518941',
			manageLendTime: '1636109175000',
			vetLendResult: 1
		},
	}
	return res
})
// 管理员保养申报记录
Mock.mock('http://localhost:8080/api/get/getAll/protect', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:[{
			protectId:'146598',
			protectMsg:'车窗清理',
			name:'夏明煦',
			protectTime: '1636108814000',
			protectLicense: '浙B84925'
		},
		{
			protectId:'165419',
			protectMsg:'更换轮胎',
			name:'郁波光',
			protectTime: '1634276414000',
			protectLicense: '浙B78941'
		},
		{
			protectId:'165116',
			protectMsg:'车体清洗',
			name:'良晗晗',
			protectTime: '1633833614000',
			protectLicense: '浙B74487'
		},
		{
			protectId:'216516',
			protectMsg:'车体喷漆',
			name:'藩令怡',
			protectTime: '1631238014000',
			protectLicense: '浙B49467'
		}
		],
	}
	return res
})
//管理员借车申报记录
Mock.mock('http://localhost:8080/api/get/getAll/lendCar', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:[{
			lendMsg:'临时出差',
			name:'朱丽雅',
			phone: '14726043668',
			lendTime: '2020-10-30',
			lendLicense: '浙B49436'
		},
		{
			lendMsg:'临时出差',
			name:'逄雪羽',
			phone: '18844219337',
			lendTime: '2020-9-6',
			lendLicense: '浙A17984'
		},
		{
			lendMsg:'临时出差',
			name:'仪开宇',
			phone: '15982079557',
			lendTime: '2020-10-15',
			lendLicense: '浙B75364'
		},
		{
			lendMsg:'临时出差',
			name:'丛淑华',
			phone: '13716001801',
			lendTime: '2020-10-12',
			lendLicense: '浙C55462'
		},
		],
	}
	return res
})
// 管理员保养申报记录详情页
Mock.mock('http://localhost:8080/api/get/getDetail/protect', 'POST', () => {
	let res = {
		code:200,
		data: [{
			protectId: '156164',
			protectTime: '2021-5-6',
			protectLicense: '浙C29568',
			detail: '擦车窗,换轮胎',
			manageNo: 'ad456789',
			protectMsg:'护理车窗',
			protectImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F04.imgmini.eastday.com%2Fmobile%2F20180814%2F20180814095849_d479a2cfb889ce1fc9649cdc7540c963_3.jpeg&refer=http%3A%2F%2F04.imgmini.eastday.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638182400&t=e42fe33f7edb7f718531d7872ed08b11',
			manageTime:'1635059868000',
			vetNo:'vt845649',
			vetTime: '1635063468000'
		}],
	}
	return res
})
// 管理员派车申报记录
Mock.mock('http://localhost:8080/api/get/getAll/sendCarDeclare', 'POST', (option) => {
	console.log(option)
	let res={
		code:200,
		data:[{
			sendId:'123456',
			sendMsg:'123456',
			name:'孙华翰',
			phone:'18845144849',
			sendTime:'2021-11-3',
			sendLicense:'浙A498464'
		},
		{
			sendId:'123456',
			sendMsg:'123456',
			name:'闳子昂',
			sendTime:'2021-10-25',
			sendLicense:'浙B544413',
			phone:'13858831302',
		},
		{
			sendId:'123456',
			sendMsg:'123456',
			name:'绍依风',
			no:'sv123456',
			sendTime:'2021-10-15',
			sendLicense:'浙A419584',
			phone:'18881048993',
		},
		{
			sendId:'123456',
			sendMsg:'123456',
			name:'海谷枫',
			sendTime:'2021-10-9',
			sendLicense:'浙D361598',
			phone:'15280339918',
		}],
	}
	return res
})
// 管理员派车申报记录详情页
Mock.mock('http://localhost:8080/api/get/getDetail/sendCar', 'POST', () => {
	let res = {
		data: {
			sendCarId: '123456',
			sendTime: '2021-10-9',
			sendLicense: '浙C85214',
			place: '浙江温州',
			vetNo: 'vt12465',
			situation: '破损严重',
			svNo:'sv123456'
		},
	}
	return res
})


// 管理员已完成的维修审批
Mock.mock('http://localhost:8080/api/get/getAll/examin/examDone/fix', 'POST', () => {
	let res = {
		data: {
			name: '陈老头',
			fixTime: '2021-10-9',
			fixLicense: '浙C85214',
			fixId: 'fix123456',
	}
	}
	
	return res
})

// 管理员已完成的保养审批
Mock.mock('http://localhost:8080/api/get/getAll/examin/examDone/lend', 'POST', () => {
	let res = {
		data: {
			name: '陈老头',
			lendTime: '2021-10-9',
			lendLicense: '浙C85214',
			lendId: 'lend123456',
	}
	}
	
	return res
})


Mock.mock('http://localhost:8080/api/get/getDetail/assign', 'POST', () => {
	let res = {
		data: {
			assignId:'14984',
			assignLicense:'浙A33645',
			assignMsg:'去现场勘察',
			lendTime:'1636096668000',
			surveyNo:'sv156116',
			manageNo:'ad781546',
			manageTime:'1635992268000',
			vetNo:'vt156469',
			vetTime:'1636003068000',
			result:0
		},
	}
	return res
})
