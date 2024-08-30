// 邮件通联
// 运营商类型 手机号 IMSI IMEI 区域编码 省编码 所属位置ULI 邮件发送方 邮件接收方 邮件正文 邮件标题 邮件附件名 发送时间

import { min } from "lodash"

export const yjSearchFields = [
    {
        label: '手机号',
    },{
        label: 'IMSI',
    },{
        label: 'IMEI',
    },{
        label: '所属位置ULI',
    },{
        label: '邮件发送方',
    },{
        label: '邮件接收方',
    }
]

export const yjColumns = [
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
        headerName: '省编码',
        field: 'province_code',
    },{
        headerName: '区域编码',
        field: 'area_code',
    },{
        headerName: '所属位置ULI',
        field: 'uli',
    },{
        headerName: '邮件发送方',
        field: 'sender',
    },{
        headerName: '邮件接收方',
        field: 'receiver',
    },{
        headerName: '邮件正文',
        field: 'content',
        minWidth: 200,
    },{
        headerName: '邮件标题',
        field: 'title',
    },{
        headerName: '邮件附件名',
        field: 'attachment',
    },{
        headerName: '发送时间',
        field: 'send_time',
        minWidth: 200
    }
]

export const yjRows = [
    {
        "operator_type": "移动",
        "phone": "13829036185",
        "imsi": "460009572834629",
        "imei": "860195732846210",
        "area_code": "440100",
        "province_code": "44",
        "uli": "460-009-572-8462",
        "sender": "liwei01@163.com",
        "receiver": "wangli@techcorp.com",
        "content": "请尽快确认项目预算。",
        "title": "预算确认",
        "attachment": "项目预算2024.pdf",
        "send_time": "2024-01-07 10:15:47"
    },
    {
        "operator_type": "联通",
        "phone": "18670136581",
        "imsi": "460019238475362",
        "imei": "861032457836914",
        "area_code": "110100",
        "province_code": "11",
        "uli": "460-019-384-7536",
        "sender": "chenxiaoyun@unicom.com",
        "receiver": "xujing@unicom.com",
        "content": "请查阅最新的客户反馈。",
        "title": "客户反馈",
        "attachment": "客户反馈汇总.docx",
        "send_time": "2024-02-12 14:23:55"
    },
    {
        "operator_type": "电信",
        "phone": "18985467309",
        "imsi": "460031829364751",
        "imei": "869523017283645",
        "area_code": "310100",
        "province_code": "31",
        "uli": "460-031-829-3647",
        "sender": "zhangyi@telecom.com",
        "receiver": "liuhua@marketing.com",
        "content": "关于产品发布会的时间安排，请确认。",
        "title": "发布会安排",
        "attachment": "发布会计划2024.xlsx",
        "send_time": "2024-03-03 16:48:32"
    },
    {
        "operator_type": "移动",
        "phone": "13967218470",
        "imsi": "460002374859163",
        "imei": "860139472859031",
        "area_code": "330100",
        "province_code": "33",
        "uli": "460-002-374-8591",
        "sender": "sunfang@163.com",
        "receiver": "guojian@zjgroup.com",
        "content": "请查收合同附件并确认。",
        "title": "合同确认",
        "attachment": "合同2024.pdf",
        "send_time": "2024-02-25 11:34:21"
    }
]

