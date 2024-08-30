import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardHeader, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Stack, Typography } from "@mui/material"

import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import config from "./config";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// 位置数据汇聚情况、画像数据汇聚情况、通联数据汇聚情况、行为数据汇聚情况、内容数据汇聚情况
const tlMenus = [
    {
        // 电话通联汇聚
        title: '电话通联汇聚',
        path: '/xgs/dhtlhj',
        name: '电话',
        icon: <InboxIcon />
    },{
        // 短信通联汇聚
        title: '短信通联汇聚',
        path: '/xgs/dxtlhj',
        name: '短信',
        icon: <DraftsIcon />
    },{
        // QQ通联汇聚
        title: 'QQ通联汇聚',
        path: '/xgs/qqtlhj',
        name: 'QQ',
        icon: <DonutLargeOutlinedIcon />

    },{
        // 微信通联汇聚
        title: '微信通联汇聚',
        path: '/xgs/wxtlhj',
        name: '微信',
        icon: <FeedOutlinedIcon />
    }, {
        // 邮件通联汇聚
        title: '邮件通联汇聚',
        path: '/xgs/yjtlhj',
        name: '邮件',
        icon: <AttachEmailOutlinedIcon />
    },{
        // 开关机汇聚
        title: '开关机汇聚',
        path: '/xgs/kgjhj',
        name: '开关机',
        icon: <SettingsOutlinedIcon />
    }
]
const menus = [
    {
        title: '位置数据汇聚情况',
        icon: <InboxIcon />,
        children:[]
    },{
        title: '画像数据汇聚情况',
        icon: <DraftsIcon />,
        children:[]
    },{
        title: '通联数据汇聚情况',
        icon: <DonutLargeOutlinedIcon />,
        children: tlMenus
    },
    {
        title: '行为数据汇聚情况',
        icon: <FeedOutlinedIcon />,
        children:[]
    },{
        title: '内容数据汇聚情况',
        icon: <AttachEmailOutlinedIcon />,
        children:[]
    }
]
export default () => {
    const navigate = useNavigate();
    const { status } = useParams<{status: string}>();
    const selectedMenu = tlMenus.find(menu => menu.path.indexOf(status || 'dhtlhj') > -1);
    useEffect(() => {
        // @ts-ignore
        const myChart = echarts.init(document.getElementById('lljr'));
        // @ts-ignore
        const configData = config[status || 'dhtlhj'];
        console.log('configData', configData);
        // 流量接入速率 6-24时 单位：MB/s
        myChart.setOption({
            title: {
                text: selectedMenu?.name+'流量接入量',
                // subtext: '6-24时',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                // @ts-ignore
                boundaryGap: false,
                data: configData?.a.xAxis,
                axisLine: {
                    show: true,
                    lineStyle: {
                        type: 'solid'
                    },
                    symbol: ['none', 'arrow'], // 添加箭头
                    symbolSize: [10, 15] // 调整箭头大小
                },
            },
            yAxis: {
                type: 'value',
                name: configData?.a.unit,
                axisLine: {
                    show: true,
                    lineStyle: {
                        type: 'solid'
                    },
                    symbol: ['none', 'arrow'], // 添加箭头
                    symbolSize: [10, 15] // 调整箭头大小
                },
            },
            series: [
              {
                data: configData.a.series,
                type: 'line',
                smooth: true
              }
            ]
        })
        // @ts-ignore
        const sjChart = echarts.init(document.getElementById('sj'));
        // 数据源分布情况 饼图
        sjChart.setOption({
            title: {
                text: selectedMenu?.name+'数据源分布情况',
                // subtext: '******',
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
                    name: '数据源分布情况',
                    type: 'pie',
                    radius: '50%',
                    data: configData.b.series
                }
            ]
        })
        // @ts-ignore
        const topChart = echarts.init(document.getElementById('top'));
        // 数据源接入量TOP5 柱状图
        topChart.setOption({
            title: {
                text: selectedMenu?.name+'数据源接入量TOP5',
                // subtext: '******',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: configData.c.xAxis,
                axisLine: {
                    show: true,
                    lineStyle: {
                        type: 'solid'
                    },
                    symbol: ['none', 'arrow'], // 添加箭头
                    symbolSize: [10, 15] // 调整箭头大小
                },
            },
            yAxis: {
                min: 0,
                max: configData.c.max,
                type: 'value',
                name: configData.c.unit,
                axisLine: {
                    show: true,
                    lineStyle: {
                        type: 'solid'
                    },
                    symbol: ['none', 'arrow'], // 添加箭头
                    symbolSize: [10, 15] // 调整箭头大小
                },
            },
            series: [
              {
                data: configData.c.series,
                type: 'bar',
                smooth: true
              }
            ]
        })
    }, [status])
    const [openIndex, setOpenIndex] = React.useState(0);

  const handleClick = (index:number) => {
    setOpenIndex(index);
  };
    return <Stack direction="column" width="100vw" height="100vh">
        <Card sx={{ bgcolor: '#5470C6', borderRadius: 0}}>
            <CardHeader sx={{pt: 2, pb:2}} title={<Typography color="#fff" variant="h6">多源数据汇聚情况</Typography>} />
        </Card>
        <Stack direction="row" flex={1}>
            <Box sx={{ 
                width: '100%', maxWidth: 260, bgcolor: 'background.paper',
                '.MuiButtonBase-root': {
                    borderRadius: '0 20px 20px 0'
                },
                '.Mui-selected': {
                    backgroundColor: '#5470C6 !important',
                    '.MuiListItemText-primary':{
                        color: '#fff'
                    }
                    
                }
            }}>
                <List component="nav" aria-label="main mailbox folders">
                    {
                        // menus.map((menu, index) => <ListItemButton key={index} selected={menu.path.indexOf(status || 'dhtlhj') > -1} 
                        //     onClick={(event) => navigate(menu.path, { replace: true})}>
                        //     <ListItemIcon>
                        //         {menu.icon}
                        //     </ListItemIcon>
                        //     <ListItemText primary={menu.title} />
                        // </ListItemButton>)
                        menus.map((menu, index) => <>
                            <ListItemButton onClick={() => { handleClick(index) }}>
                                <ListItemIcon>
                                    {menu.icon}
                                </ListItemIcon>
                                <ListItemText primary={menu.title} />
                                {openIndex === index ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowRightOutlinedIcon />}
                            </ListItemButton>
                            <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {
                                        menu.children.map((child, cIndex) => <ListItemButton key={cIndex} sx={{pl: 10}} selected={child.path.indexOf(status || 'dhtlhj') > -1} 
                                            onClick={(event) => navigate(child.path, { replace: true})}>
                                            {/* <ListItemIcon>
                                                {child.icon}
                                            </ListItemIcon> */}
                                            <ListItemText primary={child.title} />
                                        </ListItemButton>)
                                    }
                                    {/* <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                        <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText primary="Starred" />
                                    </ListItemButton> */}
                                </List>
                            </Collapse>
                          </>)
                    }
                </List>
            </Box>
            <Card sx={{flex: 1, m: 3}}>
                <CardContent>
                    <Box id="lljr" width={1180} height={400}></Box>
                    <Stack direction="row" pt={4}>
                        <Box id="sj" width={580} height={300}></Box>
                        <Box id="top" width={580} height={300}></Box>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    </Stack>
}