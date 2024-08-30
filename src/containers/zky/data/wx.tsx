// 运营商类型 手机号 IMSI IMEI 区域编码 省编码 所属位置ULI 消息发送方 消息接收方 微信群账号 发送时间
import Link from '@mui/material/Link';
export const wxSearchFields = [
    ,{
        label: '手机号',
    },{
        label: 'IMSI',
    },{
        label: 'IMEI',
    },{
        label: '所属位置ULI',
    },{
        label: '消息发送方',
    },{
        label: '消息接收方',
    }
]

export const wxColumns = [
    {
        headerName: '手机号',
        field: 'phone',
    },{
        headerName: 'IMSI',
        field: 'imsi',
    },{
        headerName: 'IMEI',
        field: 'imei',
    },
    {
        headerName: '运营商类型',
        field: 'operator_type',
    },{
        headerName: '省编码',
        field: 'province_code',
    },{
        headerName: '区域编码',
        field: 'area_code',
    },{
        headerName: '所属位置ULI',
        field: 'uli',
    },{
        headerName: '消息发送方',
        field: 'sender',
    },{
        headerName: '消息接收方',
        field: 'receiver',
    },{
        headerName: '发送图片链接',
        field: 'image_url',
        renderCell: ({value}: any) => <Link href={value} underline="always">{value}</Link>
    },{
        headerName: '发送时间',
        field: 'send_time',
    }
]

export const wxRows = [
    {
        "operator_type": "中国移动",
        "phone": "13829485601",
        "imsi": "460008562394710",
        "imei": "860195731048293",
        "area_code": "440200",
        "province_code": "44",
        "uli": "203-684-1902-3584",
        "sender": "benshaozhi",
        "receiver": "mm402223086",
        "image_url": "https://img.weixin.com/meeting.jpg",
        "send_time": "2024-01-10 08:32:45"
    },
    {
        "operator_type": "中国联通",
        "phone": "18640295871",
        "imsi": "460019478265301",
        "imei": "861032745890641",
        "area_code": "210100",
        "province_code": "21",
        "uli": "356-917-4820-6471",
        "sender": "a9bg578",
        "receiver": "kfc2132435",
        "image_url": "https://img.weixin.com/pres.jpg",
        "send_time": "2024-02-15 10:25:37"
    },
    {
        "operator_type": "中国电信",
        "phone": "18974562019",
        "imsi": "460039174582043",
        "imei": "869523074895123",
        "area_code": "320100",
        "province_code": "32",
        "uli": "981-204-7563-1928",
        "sender": "R18997296384",
        "receiver": "shengye71252",
        "image_url": "https://img.weixin.com/easds.png",
        "send_time": "2024-03-05 14:48:12"
    },
    {
        "operator_type": "中国移动",
        "phone": "13986297450",
        "imsi": "460006291847352",
        "imei": "860195731485632",
        "area_code": "510100",
        "province_code": "51",
        "uli": "874-593-6210-4837",
        "sender": "Ip1985125",
        "receiver": "sj1897272367",
        "image_url": "https://img.weixin.com/contr.png",
        "send_time": "2024-02-20 11:17:58"
    },
    {
        "operator_type": "中国联通",
        "phone": "15512346789",
        "imsi": "460015748203964",
        "imei": "861032748592136",
        "area_code": "110100",
        "province_code": "11",
        "uli": "492-738-1562-9041",
        "sender": "love10170038",
        "receiver": "v13810026606",
        "image_url": "https://img.weixin.com/dsfds.jpg",
        "send_time": "2024-03-10 09:43:21"
    }
]

