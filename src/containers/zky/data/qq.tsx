import Link from '@mui/material/Link';
//
// 手机号 IMSI IMEI 运营商类型 所属省 所属区域 用户位置ULI QQ发送方 QQ接收方  发送图片链接 发送时间 
export const qqSearchFields = [
    {
        label: '手机号',
    },{
        label: 'IMSI',
    },{
        label: 'IMEI',
    },{
        label: '用户位置ULI',
    },{
        label: 'QQ发送方',
    },{
        label: 'QQ接收方',
    }
]

export const qqColumns = [
    {
        headerName: '手机号',
        field: 'phone',
    },{
        headerName: 'IMSI',
        field: 'imsi',
    },{
        headerName: 'IMEI',
        field: 'imei',
    },{
        headerName: '运营商类型',
        field: 'operator_type',
    },{
        headerName: '所属省',
        field: 'province',
    },{
        headerName: '所属区域',
        field: 'area',
    },{
        headerName: '用户位置ULI',
        field: 'uli',
    },{
        headerName: 'QQ发送方',
        field: 'sender',
    },{
        headerName: 'QQ接收方',
        field: 'receiver',
    },{
        headerName: '发送图片链接',
        field: 'image',
        renderCell: ({value}: any) => <Link href={value} underline="always">{value}</Link>
    },{
        headerName: '发送时间',
        field: 'send_time',
    }
]

export const qqRows = [
    {
        "phone": "13948765234",
        "imsi": "460008562394711",
        "imei": "861032748590123",
        "operator_type": "中国移动",
        "province": "广东省",
        "area": "广州市",
        "uli": "701-849-3621-9485",
        "sender": "8462715340",
        "receiver": "205839472",
        "image": "https://img.qq.com/abc123.jpg",
        "send_time": "2024-01-10 08:35:00"
    },
    {
        "phone": "18623948765",
        "imsi": "460015748203965",
        "imei": "869523074895124",
        "operator_type": "中国联通",
        "province": "北京市",
        "area": "朝阳区",
        "uli": "820-437-6912-5904",
        "sender": "5839471612",
        "receiver": "9571832056",
        "image": "https://img.qq.com/photos/def456.jpg",
        "send_time": "2024-02-15 09:45:23"
    },
    {
        "phone": "18973456892",
        "imsi": "460039174582044",
        "imei": "869523074895125",
        "operator_type": "中国电信",
        "province": "上海市",
        "area": "浦东新区",
        "uli": "354-602-7391-4782",
        "sender": "1220893587",
        "receiver": "88638385",
        "image": "https://img.qq.com/photos/ghi789.jpg",
        "send_time": "2024-03-05 14:30:12"
    },
    {
        "phone": "13756829401",
        "imsi": "460006291847353",
        "imei": "860195731485633",
        "operator_type": "中国移动",
        "province": "四川省",
        "area": "成都市",
        "uli": "918-273-4056-1829",
        "sender": "2201102985",
        "receiver": "19927384738",
        "image": "https://img.qq.com/photos/jkl012.jpg",
        "send_time": "2024-02-20 11:22:58"
    },
    {
        "phone": "15593647821",
        "imsi": "460015748203966",
        "imei": "861032748592137",
        "operator_type": "中国联通",
        "province": "浙江省",
        "area": "杭州市",
        "uli": "746-381-9204-1759",
        "sender": "1020216086",
        "receiver": "4273956078",
        "image": "https://img.qq.com/photos/mno345.jpg",
        "send_time": "2024-03-10 09:47:21"
    }
]


