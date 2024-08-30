import { Box, Grid, Card, CardContent, CardHeader, Stack, Typography, Divider, Button } from "@mui/material"
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
import { useEffect, useRef } from "react";
export default () => {
    const canvasWidth = 480;
    const canvasHeight = 380;
    useEffect(() => {
        // @ts-ignore
        const myChart = echarts.init(document.getElementById('chart1'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: '目的IP访问TOP5',
                subtext: '数据来自某数据源',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {          
                    type: 'shadow'        
                }
            },
            xAxis: {
                type: 'category',
                data: ['192.168.1.1', '192.168.1.2', '192.168.1.3', '192.168.1.4', '192.168.1.5'],
                axisLabel: {
                    rotate: 45, 
                    interval: 0
                }
            },
            yAxis: {
                type: 'value',
                name: '访问量'
            },
            series: [
                {
                    name: '访问量',
                    type: 'bar',
                    data: [1500, 1200, 1000, 800, 600],
                    itemStyle: {
                        color: '#3398DB'
                    }
                }
            ]
        });
        // @ts-ignore
        const myChart2 = echarts.init(document.getElementById('chart2'));
        // 绘制图表
        myChart2.setOption({
            title: {
                text: '域名访问TOP5',
                subtext: '数据来自某数据源',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: [
                    'baidu.com', 
                    'qq.com', 
                    'taobao.com', 
                    'douyin.com', 
                    'jd.com'
                ],
                axisLabel: {
                    rotate: 45, 
                    interval: 0
                }
            },
            yAxis: {
                type: 'value',
                name: '访问量'
            },
            series: [
                {
                    name: '访问次数',
                    type: 'bar',
                    data: [1000, 900, 800, 700, 600],
                    itemStyle: {
                        color: '#3398DB'
                    }
                }
            ]
        });

        // @ts-ignore
        const myChart3 = echarts.init(document.getElementById('chart3'));
        // 绘制图表
        myChart3.setOption({
            title: {
                text: 'APP访问TOP5',
                subtext: '数据来自某数据源',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: [
                    '微信', 
                    '抖音', 
                    '支付宝', 
                    '快手', 
                    'QQ'
                ],
                axisLabel: {
                    rotate: 45, 
                    interval: 0
                }
            },
            yAxis: {
                type: 'value',
                name: '访问量'
            },
            series: [
                {
                    name: '访问次数',
                    type: 'bar',
                    data: [1028, 920, 765, 700, 689],
                    itemStyle: {
                        color: '#3398DB'
                    }
                }
            ]
        });

        // @ts-ignore
        const myChart4 = echarts.init(document.getElementById('chart4'));
        // 绘制图表
        myChart4.setOption({
            title: {
                text: 'IP 省份分布图',
                subtext: '数据来自某数据源',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: 'IP省份',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 335, name: '广东省' },
                        { value: 310, name: '北京' },
                        { value: 234, name: '上海' },
                        { value: 135, name: '江苏省' },
                        { value: 114, name: '浙江省' },
                        { value: 110, name: '四川省' },
                        { value: 104, name: '湖北省' },
                        { value: 100, name: '河南省' },
                        { value: 90, name: '山东省' },
                        { value: 80, name: '湖南省' },
                        { value: 70, name: '其他' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });

        // @ts-ignore
        const myChart5 = echarts.init(document.getElementById('chart5'));
        // 绘制图表
        myChart5.setOption({
            title: {
                text: 'IP 国家分布 TOP 5',
                subtext: '数据来自某数据源',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['英国', '德国', '日本', '美国', '中国']
            },
            series: [
                {
                    name: '数量',
                    type: 'bar',
                    data: [
                        { value: 300, name: '英国' },
                        { value: 484, name: '德国' },
                        { value: 580, name: '日本' },
                        { value: 735, name: '美国' },
                        { value: 1048, name: '中国' },
                    ],
                    itemStyle: {
                        color: '#3398DB'
                    }
                }
            ]
        });

        // @ts-ignore
        const myChart6 = echarts.init(document.getElementById('chart6'));
        // 绘制图表
        myChart6.setOption({
            title: {
                text: '上网时段分布',
                subtext: '数据来自某数据源',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['0-3点', '3-6点', '6-9点', '9-12点', '12-15点', '15-18点', '18-21点', '21-24点']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '上网人数',
                    type: 'line',
                    data: [120, 90, 180, 260, 300, 220, 340, 310], // 示例数据
                    itemStyle: {
                        color: '#3398DB'
                    },
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                }
            ]
        });
    }, [])
    const cardRef = useRef(null);
    return <Stack p={8} alignItems="center" direction="column" justifyContent="center">
        <Box>
            <Button variant="contained" sx={{mb:3}} onClick={() => {
                // @ts-ignore
                domtoimage.toPng(cardRef.current).then(function (dataUrl: any) {
                    var link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = '上网行为分析.png';
                    link.click();
                })
            }}>下载</Button>
            <Card ref={cardRef}>
            <CardHeader title={<Typography variant="subtitle1" fontWeight={900} fontSize={'25px'}>上网行为分析</Typography>} />
            <Divider sx={{m: 0}} />
            <CardContent>
                <Stack direction="row" mb={10}>
                    <Stack direction="row" spacing={1} alignItems="center" mr={30}>
                        <Box>
                            <RecyclingOutlinedIcon sx={{fontSize: '64px'}} color="primary" />
                        </Box>
                        <Box>
                            <Typography variant="h4">23,763</Typography>
                            <Typography variant="body1">域名数量</Typography>
                        </Box>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Box>
                            <RecyclingOutlinedIcon sx={{fontSize: '64px'}} color="success" />
                        </Box>
                        <Box>
                            <Typography variant="h4">25,839</Typography>
                            <Typography variant="body1">IP数量</Typography>
                        </Box>
                    </Stack>
                </Stack>
                {/* <Divider /> */}
                <Stack direction="row" spacing={1} mb={10} mt={10}>
                    <Box id="chart1" width={canvasWidth} height={canvasHeight} />
                    <Box id="chart2" width={canvasWidth} height={canvasHeight} />
                    <Box id="chart3" width={canvasWidth} height={canvasHeight} />
                </Stack>
                <br />
                <Stack direction="row" spacing={1}>
                    <Box id="chart4" width={canvasWidth} height={canvasHeight} />
                    <Box id="chart5" width={canvasWidth} height={canvasHeight} />
                    <Box id="chart6" width={canvasWidth} height={canvasHeight} />
                </Stack>
            </CardContent>
        </Card>
        </Box>
        
    </Stack>
}