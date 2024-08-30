
// 电话通联关系抽取
// 主叫号码、主叫IMSI、主叫IMEI、主叫所在位置、被叫号码、被叫IMSI、被叫IMEI、被叫所在位置、通话开始时间、通话结束时间
export const dhSearchFields = [
    {
        label: '主叫号码',
    },{
        label: '主叫IMSI',
    },{
        label: '主叫IMEI',
    },{
        label: '被叫号码',
    },{
        label: '被叫IMSI',
    },{
        label: '被叫IMEI',
    }
]


export const dhColumns = [
    {
        headerName: '主叫号码',
        field: 'caller_phone',
    },{
        headerName: '主叫IMSI',
        field: 'caller_imsi',
    },{
        headerName: '主叫IMEI',
        field: 'caller_imei',
    },{
        headerName: '主叫所在位置',
        field: 'caller_location',
    },{
        headerName: '被叫号码',
        field: 'callee_phone',
    },{
        headerName: '被叫IMSI',
        field: 'callee_imsi',
    },{
        headerName: '被叫IMEI',
        field: 'callee_imei',
    },{
        headerName: '被叫所在位置',
        field: 'callee_location',
    },{
        headerName: '通话开始时间',
        field: 'start_time',
    },{
        headerName: '通话结束时间',
        field: 'end_time',
    }
]


export const dhRows = [
    {
        "caller_phone": "13938267419",
        "caller_imsi": "460012958763214",
        "caller_imei": "862345082563417",
        "caller_location": "广东省深圳市南山区科技园",
        "callee_phone": "13928467520",
        "callee_imsi": "460012958763215",
        "callee_imei": "862345082563418",
        "callee_location": "广东省深圳市",
        "start_time": "2024-01-15 08:32:47",
        "end_time": "2024-01-15 08:46:32"
    },
    {
        "caller_phone": "13849563728",
        "caller_imsi": "460021485763482",
        "caller_imei": "868456092384175",
        "caller_location": "北京市朝阳区望京",
        "callee_phone": "13849563729",
        "callee_imsi": "460021485763483",
        "callee_imei": "868456092384176",
        "callee_location": "河北省衡水市故城县",
        "start_time": "2024-02-10 14:02:23",
        "end_time": "2024-02-10 14:21:46"
    },
    {
        "caller_phone": "13792865431",
        "caller_imsi": "460031286759340",
        "caller_imei": "869784035762198",
        "caller_location": "上海市浦东新区陆家嘴",
        "callee_phone": "13792865432",
        "callee_imsi": "460031286759341",
        "callee_imei": "869784035762199",
        "callee_location": "甘肃省天水市",
        "start_time": "2024-03-05 10:18:09",
        "end_time": "2024-03-05 10:34:57"
    },
    {
        "caller_phone": "13628475642",
        "caller_imsi": "460041937658210",
        "caller_imei": "860293745182049",
        "caller_location": "浙江省杭州市西湖区",
        "callee_phone": "13628475643",
        "callee_imsi": "460041937658211",
        "callee_imei": "860293745182050",
        "callee_location": "浙江省杭州市西湖区",
        "start_time": "2024-01-25 11:03:15",
        "end_time": "2024-01-25 11:29:59"
    },
    {
        "caller_phone": "13569384756",
        "caller_imsi": "460052834769021",
        "caller_imei": "861273945867012",
        "caller_location": "江苏省南京市玄武区",
        "callee_phone": "13569384757",
        "callee_imsi": "460052834769022",
        "callee_imei": "861273945867013",
        "callee_location": "天津市和平区",
        "start_time": "2024-02-20 09:02:47",
        "end_time": "2024-02-20 09:19:58"
    }
]
