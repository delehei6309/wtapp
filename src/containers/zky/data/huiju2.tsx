
import Typography from '@mui/material/Typography';
import { ta } from 'date-fns/locale';
// 任务编号、任务名称、任务描述、开始时间、结束时间、运行频率、运行成功次数、运行失败次数、运行状态（运行中、运行成功、运行失败）、任务操作（启用、暂停、删除）
export const huijuColumns2 = [
    {
        headerName: '任务编号',
        field: 'task_id',
    },{
        headerName: '任务名称',
        field: 'task_name',
        minWidth: 200
    },{
        headerName: '开始时间',
        field: 'start_time',
        minWidth: 200
    },{
        headerName: '结束时间',
        field: 'end_time',
        minWidth: 200
    },{
        headerName: '运行频率',
        field: 'run_frequency',
    },{
        headerName: '运行成功次数',
        field: 'run_success_count',
    },{
        headerName: '运行失败次数',
        field: 'run_fail_count',
    },{
        headerName: '运行状态',
        field: 'run_status',
        // valueGetter: ({value}:any) => value === 1 ? '运行中' : value === 2 ? '运行成功' : '运行失败'
        renderCell: ({value}: any) => value === 1 ? <Typography sx={{color: 'green'}} variant="body2">运行中</Typography> : (
            value === 2 ? <Typography color="primary" variant="body2">运行成功</Typography> : <Typography color="error" variant="body2">运行失败</Typography>
        )
    }
]

export const huijuRows2 = [{
    "task_id": "0001",
    "task_name": "“美食”搜索汇聚任务",
    "start_time": "2023-10-01 09:00:00",
    "end_time": "2024-01-01 18:00:00",
    "run_frequency": "每天",
    "run_success_count": 90,
    "run_fail_count": 10,
    "run_status": 1
},
{
    "task_id": "0002",
    "task_name": "“运动”搜索汇聚任务",
    "start_time": "2023-11-01 10:00:00",
    "end_time": "2024-02-01 20:00:00",
    "run_frequency": "每周",
    "run_success_count": 13,
    "run_fail_count": 1,
    "run_status": 2
},
{
    "task_id": "0003",
    "task_name": "“热剧”搜索汇聚任务",
    "start_time": "2023-09-15 14:00:00",
    "end_time": "2024-01-15 22:00:00",
    "run_frequency": "每月",
    "run_success_count": 4,
    "run_fail_count": 1,
    "run_status": 1
},
{
    "task_id": "0004",
    "task_name": "“人文艺术”搜索汇聚任务",
    "start_time": "2023-12-01 08:00:00",
    "end_time": "2024-03-01 17:00:00",
    "run_frequency": "每天",
    "run_success_count": 90,
    "run_fail_count": 5,
    "run_status": 2
},
{
    "task_id": "0005",
    "task_name": "“旅游出行”搜索汇聚任务",
    "start_time": "2023-10-10 11:00:00",
    "end_time": "2024-01-10 19:00:00",
    "run_frequency": "每周",
    "run_success_count": 14,
    "run_fail_count": 2,
    "run_status": 1
}]


export const huijuSearchFields2 = [
    {
        label: '任务名称',
        placeholder: '请输入任务名称',
        size: 'small'
    },{
        label: '开始时间',
        placeholder: '请输入开始时间',
        size: 'small'
    },{
        label: '结束时间',
        placeholder: '请输入结束时间',
        size: 'small'
    },{
        label: '运行状态',
        placeholder: '请选择运行状态',
    }

]