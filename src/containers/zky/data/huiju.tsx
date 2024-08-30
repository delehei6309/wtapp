
import Typography from '@mui/material/Typography';
// 任务编号、任务名称、任务描述、开始时间、结束时间、运行频率、运行成功次数、运行失败次数、运行状态（运行中、运行成功、运行失败）、任务操作（启用、暂停、删除）
export const huijuColumns = [
    {
        headerName: '任务编号',
        field: 'task_id',
    },{
        headerName: '任务名称',
        field: 'task_name',
    },{
        headerName: '开始时间',
        field: 'start_time',
    },{
        headerName: '结束时间',
        field: 'end_time',
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
        renderCell: ({value}: any) => value === 1 ? <Typography sx={{color: 'green'}}>运行中</Typography> : (
            value === 2 ? <Typography color="primary">运行成功</Typography> : <Typography color="error">运行失败</Typography>
        )
    }
]

export const huijuRows = [{
    "task_id": "0001",
    "task_name": "POP协议汇聚任务1",
    "start_time": "2023-12-01 12:00:00",
    "end_time": "2024-03-01 08:00:00",
    "run_frequency": "每天",
    "run_success_count": 90,
    "run_fail_count": 10,
    "run_status": 1 // 1: 运行中, 2: 运行成功, 3: 运行失败
},{
    "task_id": "0002",
    "task_name": "POP协议汇聚任务2",
    "start_time": "2024-01-01 12:00:00",
    "end_time": "2024-02-13 08:00:00",
    "run_frequency": "每天",
    "run_success_count": 43,
    "run_fail_count": 2,
    "run_status": 2 // 1: 运行中, 2: 运行成功, 3: 运行失败
},{
    "task_id": "0003",
    "task_name": "IMAP协议汇聚任务1",
    "start_time": "2024-06-01 12:00:00",
    "end_time": "2024-08-13 08:00:00",
    "run_frequency": "每周",
    "run_success_count": 10,
    "run_fail_count": 1,
    "run_status": 3 // 1: 运行中, 2: 运行成功, 3: 运行失败
},{
    "task_id": "0004",
    "task_name": "SMTP协议汇聚任务1",
    "start_time": "2023-01-01 11:00:00",
    "end_time": "2024-02-01 20:00:00",
    "run_frequency": "1小时",
    "run_success_count": 9000,
    "run_fail_count": 100,
    "run_status": 3 // 1: 运行中, 2: 运行成功, 3: 运行失败
},{
    "task_id": "0005",
    "task_name": "SMTP协议汇聚任务2",
    "start_time": "2023-01-01 16:00:00",
    "end_time": "2023-08-01 18:00:00",
    "run_frequency": "1小时",
    "run_success_count": 5000,
    "run_fail_count": 50,
    "run_status": 2 // 1: 运行中, 2: 运行成功, 3: 运行失败
}]

export const huijuSearchFields = [
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