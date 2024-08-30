
import { useRef } from 'react';
import Box from '@mui/material/Box';
// import Table from 'src/components/table';
import Card from '@mui/material/Card';
import { CardHeader, CardContent, Stack, TextField, Button, Typography } from '@mui/material';
import { jzColumns, jzRows, jzSearchFields } from './data/jizhan';
import { huaxiangColumns, huaxiangSearchFields, huaxiangRows } from './data/huaxiang';
import { huijuColumns, huijuRows, huijuSearchFields } from './data/huiju';
import { huijuColumns2, huijuRows2, huijuSearchFields2 } from './data/huiju2';
import { dhColumns,dhRows, dhSearchFields } from './data/dianhua'
import { dxColumns, dxRows, dxSearchFields } from './data/dx';

import { kgjSearchFields, kgjColumns, kgjRows } from './data/kgj';

import { yjColumns, yjRows, yjSearchFields } from './data/yj';

import { wxColumns, wxRows, wxSearchFields } from './data/wx';

import { qqColumns, qqRows, qqSearchFields } from './data/qq';
import {Table, TableBody, TableCell, TableHead, TableRow, TablePagination } from '@mui/material';
function Demo(props: { title: string; searchFields: any; columns: any; rows: any; rowCount?: number; width?: number }) {
    const cardRef = useRef<any>(null);
    return <>
        <Button onClick={() => {
            // @ts-ignore
            domtoimage.toPng(cardRef.current).then(function (dataUrl: any) {
                var link = document.createElement('a');
                link.href = dataUrl;
                link.download = `${props.title}.png`;
                link.click();
            })
        }}>下载</Button>
        <Box p={2}  ref={cardRef} width={props.width || 1100} className="box" data-name={props.title}>
        <Card>
            <CardHeader title={props.title} />
            <CardContent sx={{p:2, pb: '.5rem !important'}}>
                <Stack direction="row" mb={4} spacing={3}>
                    {
                        props.searchFields.map((field: { label: any; placeholder: any; size: any; }, index: number) => <Stack key={index} direction="row" alignItems="center">
                            {/* <Typography variant="button">{field.label}：</Typography> */}
                            <TextField placeholder={field.placeholder || `请输入${field.label}`} size={field.size || 'small'} />
                        </Stack>)  
                    }
                    <Button variant="contained" color="primary">查询</Button>
                </Stack>
                {/* <Table rows={props.rows.map((row: any, index: any) => ({ ...row, id: row.uli || row.phone || row.task_id || row.caller_phone || row.sender_phone }))}
                    hideToolbar
                    rowCount={props.rowCount || 20}
                    paginationMode='client'
                    columns={props.columns.map((col:any) => ({ minWidth: 100, ...col}))} /> */}
                <Table sx={{ 
                    'th, td':{
                        p: '.8rem .25rem !important',
                        borderRight: '1px solid rgba(58, 53, 65, 0.12)',
                        color: 'rgba(58, 53, 65, 0.87) !important',
                        '&:last-child': {
                            borderRight: 'none'
                        }
                    }
                }}>
                    <TableHead sx={{backgroundColor: 'rgb(249, 250, 252)'}}>
                        <TableRow>
                            {props.columns.map(({headerName, field, width}:any) => <TableCell key={field} align="center" width={width}>{headerName}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows.slice(0, 5).map((row: any, index: any) => <TableRow key={index}>
                            {props.columns.map(({field, renderCell}: any) => <TableCell key={field} align="center">{renderCell ? renderCell({value: row[field]}) : row[field]}</TableCell>)}
                        </TableRow>)}
                    </TableBody>
        </Table>
        <TablePagination
            rowsPerPageOptions={[10, 20, 50, 100]}
            component="div"
            count={5}
            rowsPerPage={10}
            page={0}
            onPageChange={(e, val) => {
                
            }}
            onRowsPerPageChange={(e) => {
                
            }}
            />
            </CardContent>
        </Card>
        </Box>
        <br />
    </>
}
export default () => {
    return <Box p={4} sx={{
        '.MuiTableCell-head': {
            fontSize: '15px'
        }
    }}>
        <Stack>
            <Button variant="contained" size="large" sx={{position: 'fixed', right: '10px'}} onClick={() => {
                document.querySelectorAll('.box').forEach((el: any) => {
                    const file_name = el.getAttribute('data-name');
                    // @ts-ignore
                    domtoimage.toPng(el).then(function (dataUrl: any) {
                        var link = document.createElement('a');
                        link.href = dataUrl;
                        link.download = `${file_name}.png`;
                        link.click();
                    })

                })

            }}>下载全部</Button>
        </Stack>
        <Demo title="基站数据查询" searchFields={jzSearchFields} columns={jzColumns} rows={jzRows} width={1010} />
        <Demo title="画像分析" searchFields={huaxiangSearchFields} columns={huaxiangColumns} rows={huaxiangRows} />
        <Demo title="汇聚任务" searchFields={huijuSearchFields} columns={huijuColumns} rows={huijuRows} />
        <Demo title="汇聚任务" searchFields={huijuSearchFields2} columns={huijuColumns2} rows={huijuRows2} />
       
        <Demo title="电话通联数据查询" searchFields={dhSearchFields} columns={dhColumns} rows={dhRows} rowCount={18} width={1200} />
       
        <Demo title="短信通联数据查询" searchFields={dxSearchFields} columns={dxColumns} rows={dxRows} rowCount={15} width={1200} />
      
        <Demo title="开关机数据查询" searchFields={kgjSearchFields} columns={kgjColumns} rows={kgjRows} rowCount={22} />
        
        <Demo title="邮件通联数据查询" searchFields={yjSearchFields} columns={yjColumns} rows={yjRows} rowCount={16} width={1200} />
       
        <Demo title="微信通联数据查询" searchFields={wxSearchFields} columns={wxColumns} rows={wxRows} width={1200} />
       
       <Demo title="QQ通联数据查询" searchFields={qqSearchFields} columns={qqColumns} rows={qqRows} width={1200} />
    
    </Box>
}