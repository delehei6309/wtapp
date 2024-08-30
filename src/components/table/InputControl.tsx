/**
 * 定义 Tabel查询所用的input 统一宽度为 240
 */



import React from 'react'
import FormControl from '@mui/material/FormControl'

export default (props:any) => <FormControl fullWidth { ...props } sx={{ width: 240, mr: 4, mt: 4, ...props.sx}} />
