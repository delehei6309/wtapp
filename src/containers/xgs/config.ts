

export default {
    dhtlhj: {
        a: {
            title: '电话流量接入量',
            xAxis: ['2023-08-03', '2023-08-04', '2023-08-05', '2023-08-06', '2023-08-07', '2023-08-08', '2023-08-09'],
            // y轴单位
            unit: '单位/MB',
            series: [120, 200, 150, 80, 70, 110, 130, 140, 160, 180]
        },
        b: {
            title: '数据源分布情况',
            series: [
                { value: 350, name: 'SD数据源' },
                { value: 200, name: 'HN数据源' },
                { value: 330, name: 'HB数据源' },
                { value: 120, name: 'GD数据源' },
                { value: 60, name: 'ZJ数据源' },
                { value: 560, name: 'SH数据源' },
                { value: 30, name: 'BJ数据源' },
                { value: 600, name: 'CQ数据源' },
                { value: 280, name: 'SC数据源' },
                { value: 200, name: '其他' },

                
            ]
        },
        c: {
            title: '数据源接入量TOP5',
            xAxis: ['CQ数据源', 'SH数据源', 'SD数据源', 'HB数据源', 'SC数据源'],
            unit: '单位/GB',
            series: [600, 560, 350, 330, 280],
            max: 700
        }
    },
    dxtlhj: {
        a: {
            title: '短信流量接入量',
            xAxis: ['2023-08-03', '2023-08-04', '2023-08-05', '2023-08-06', '2023-08-07', '2023-08-08', '2023-08-09'],
            // y轴单位
            unit: '单位/MB',
            // 随机生成的数据
            series: [200, 180, 187, 176, 210, 300, 130, 140, 160, 180]
        },
        b: {
            title: '数据源分布情况',
            series: [
                { value: 400, name: 'SD数据源' },
                { value: 250, name: 'HN数据源' },
                { value: 310, name: 'HB数据源' },
                { value: 480, name: 'GD数据源' },
                { value: 360, name: 'ZJ数据源' },
                { value: 580, name: 'SH数据源' },
                { value: 620, name: 'BJ数据源' },
                { value: 520, name: 'CQ数据源' },
                { value: 290, name: 'SC数据源' },
                { value: 210, name: '其他' }
            ]
        },
        c: {
            title: '数据源接入量TOP5',
            xAxis: ['BJ数据源', 'SH数据源', 'CQ数据源', 'GD数据源', 'SD数据源'],
            unit: '单位/GB',
            series: [620, 580, 520, 480, 400],
            max: 700
        }
    },
    qqtlhj: {
        a: {
            title: 'QQ流量接入量',
            xAxis: ['2023-08-03', '2023-08-04', '2023-08-05', '2023-08-06', '2023-08-07', '2023-08-08', '2023-08-09'],
            // y轴单位
            unit: '单位/MB',
            series: [120, 200, 150, 80, 70, 110, 130, 140, 160, 180]
        },
        b: {
            title: '数据源分布情况',
            series: [
                { value: 35, name: 'SD数据源' },
                { value: 45, name: 'HN数据源' },
                { value: 28, name: 'HB数据源' },
                { value: 60, name: 'GD数据源' },
                { value: 22, name: 'ZJ数据源' },
                { value: 50, name: 'SH数据源' },
                { value: 33, name: 'BJ数据源' },
                { value: 65, name: 'CQ数据源' },
                { value: 40, name: 'SC数据源' },
                { value: 25, name: '其他' }
            ]
        },
        c: {
            title: '数据源接入量TOP5',
            xAxis: ['CQ数据源', 'GD数据源', 'SH数据源', 'HN数据源', 'SC数据源'],
            unit: '单位/GB',
            series: [65, 60, 50, 45, 40],
            max: 70
        }
    },
    wxtlhj: {
        a: {
            title: '微信流量接入量',
            xAxis: ['2023-08-03', '2023-08-04', '2023-08-05', '2023-08-06', '2023-08-07', '2023-08-08', '2023-08-09'],
            // y轴单位
            unit: '单位/MB',
            series: [25, 45, 60, 75, 85, 35, 50]
        },
        b: {
            title: '数据源分布情况',
            series: [
                { value: 35, name: 'SD数据源' },
                { value: 45, name: 'HN数据源' },
                { value: 28, name: 'HB数据源' },
                { value: 60, name: 'GD数据源' },
                { value: 90, name: 'ZJ数据源' },
                { value: 120, name: 'SH数据源' },
                { value: 33, name: 'BJ数据源' },
                { value: 65, name: 'CQ数据源' },
                { value: 40, name: 'SC数据源' },
                { value: 25, name: '其他' }
            ]
        },
        c: {
            title: '数据源接入量TOP5',
            xAxis: ['SH数据源', 'ZJ数据源', 'CQ数据源', 'GD数据源', 'HN数据源'],
            unit: '单位/GB',
            series: [120, 90, 65, 60, 45],
            max: 130
        }
    },
    yjtlhj: {
        a: {
            title: '邮件流量接入量',
            xAxis: ['2023-08-03', '2023-08-04', '2023-08-05', '2023-08-06', '2023-08-07', '2023-08-08', '2023-08-09'],
            // y轴单位
            unit: '单位/MB',
            series: [80, 76, 54, 98, 32, 23, 87]
        },
        b: {
            title: '数据源分布情况',
            series: [
                { value: 38, name: 'SD数据源' },
                { value: 42, name: 'HN数据源' },
                { value: 28, name: 'HB数据源' },
                { value: 60, name: 'GD数据源' },
                { value: 22, name: 'ZJ数据源' },
                { value: 50, name: 'SH数据源' },
                { value: 33, name: 'BJ数据源' },
                { value: 65, name: 'CQ数据源' },
                { value: 40, name: 'SC数据源' },
                { value: 25, name: '其他' }
            ]
        },
        c: {
            title: '数据源接入量TOP5',
            xAxis: ['CQ数据源', 'GD数据源', 'SH数据源', 'HN数据源', 'SC数据源'],
            unit: '单位/GB',
            series: [65, 60, 50, 45, 40],
        }
    
    },
    kgjhj: {
        a: {
            title: '开关机流量接入量',
            xAxis: ['2023-08-03', '2023-08-04', '2023-08-05', '2023-08-06', '2023-08-07', '2023-08-08', '2023-08-09'],
            // y轴单位
            unit: '单位/MB',
            series: [15, 22, 35, 40, 45, 50, 55]
        },
        b: {
            title: '数据源分布情况',
            series: [
                { value: 42, name: 'HN数据源' },
                { value: 15, name: 'SD数据源' },
                { value: 52, name: 'BJ数据源' },
                { value: 25, name: 'HB数据源' },
                { value: 35, name: 'GD数据源' },
                { value: 45, name: 'ZJ数据源' },
                { value: 50, name: 'SH数据源' },
                { value: 73, name: 'CQ数据源' },
                { value: 84, name: 'SC数据源' },
                { value: 20, name: '其他' }
            ]
        },
        c: {
            title: '数据源接入量TOP5',
            xAxis: ['SC数据源', 'CQ数据源', 'BJ数据源', 'SH数据源', 'ZJ数据源'],
            unit: '单位/GB',
            series: [84, 73, 72, 52, 50],
        }
    }
}