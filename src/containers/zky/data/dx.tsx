// 发送方号码、发送方IMSI、发送方IMEI、发送方所在位置、接收方号码、接收方IMSI、接收方IMEI、接收方所在位置、短信发送内容、发送时间

export const dxSearchFields = [
    {
        label: '发送方号码',
    },{
        label: '发送方IMSI',
    },{
        label: '发送方IMEI',
    },{
        label: '接收方号码',
    },{
        label: '接收方IMSI',
    },{
        label: '接收方IMEI',
    }
]

export const dxColumns = [
    {
        headerName: '发送方号码',
        field: 'sender_phone',
    },{
        headerName: '发送方IMSI',
        field: 'sender_imsi',
    },{
        headerName: '发送方IMEI',
        field: 'sender_imei',
    },{
        headerName: '发送方所在位置',
        field: 'sender_location',
    },{
        headerName: '接收方号码',
        field: 'receiver_phone',
    },{
        headerName: '接收方IMSI',
        field: 'receiver_imsi',
    },{
        headerName: '接收方IMEI',
        field: 'receiver_imei',
    },{
        headerName: '接收方所在位置',
        field: 'receiver_location',
    },
    // {
    //     headerName: '短信发送内容',
    //     field: 'content',
    // },
    {
        headerName: '发送时间',
        field: 'send_time',
    }
]

export const dxRows = [
    {
        "sender_phone": "13800138907",
        "sender_imsi": "460071823694571",
        "sender_imei": "860195702843617",
        "sender_location": "华南理工大学",
        "receiver_phone": "15600991278",
        "receiver_imsi": "460011647381205",
        "receiver_imei": "860193572048163",
        "receiver_location": "广州大学",
        "content": "你好，今天有时间吗？",
        "send_time": "2024-01-05 10:45:32"
    },
    {
        "sender_phone": "13909086754",
        "sender_imsi": "460035482036921",
        "sender_imei": "861032548761392",
        "sender_location": "深圳市南山区科技园",
        "receiver_phone": "17810289267",
        "receiver_imsi": "460015729083614",
        "receiver_imei": "861037295084621",
        "receiver_location": "深圳市福田区中心区",
        "content": "会议时间更改，请注意。",
        "send_time": "2024-01-10 14:32:10"
    },
    {
        "sender_phone": "15710022088",
        "sender_imsi": "460027591038264",
        "sender_imei": "868431057239846",
        "sender_location": "北京市朝阳区望京",
        "receiver_phone": "1383388978",
        "receiver_imsi": "460077193846051",
        "receiver_imei": "868431057932514",
        "receiver_location": "北京市海淀区",
        "content": "请确认你的地址。",
        "send_time": "2024-02-15 16:24:48"
    },
    {
        "sender_phone": "1883289047",
        "sender_imsi": "460027825104963",
        "sender_imei": "869510732048615",
        "sender_location": "上海市浦东新区陆家嘴",
        "receiver_phone": "19811264732",
        "receiver_imsi": "460077948152360",
        "receiver_imei": "869521374826504",
        "receiver_location": "上海市徐汇区",
        "content": "今晚的活动已经取消。",
        "send_time": "2024-02-20 18:50:23"
    },
    {
        "sender_phone": "13398450102",
        "sender_imsi": "460011593826140",
        "sender_imei": "860273145892760",
        "sender_location": "浙江省杭州市西湖区",
        "receiver_phone": "18972638462",
        "receiver_imsi": "460021395286470",
        "receiver_imei": "860293571824613",
        "receiver_location": "浙江省宁波市海曙区",
        "content": "关于合同的讨论，请查收邮件。",
        "send_time": "2024-03-01 09:13:04"
    }
]
