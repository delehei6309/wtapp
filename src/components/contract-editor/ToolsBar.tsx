import { useEffect, useState } from 'react';
import { Box, Button, Divider, FormControl, TextField, Typography, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
    data: any,
    num: number,
    // onDele: () => void,
    onChange: (opera: string, data?: any) => void
}
export default ({ data, num, onChange} : Props) => {
    const [inputs, setInputs] = useState<object>({})
    const [offsetXs, setOffsetXs] = useState<object>({});
    const [offsetYs, setOffsetYs] = useState<object>({});
    useEffect(() => {
        if(data){
            setOffsetXs(prev => ({ ...prev, [data.value]: data.offsetX }));
            setOffsetYs(prev => ({ ...prev, [data.value]: data.offsetY }));
        }
    }, [data])
    return <Box width={210} borderLeft="1px solid" borderColor="divider">
        {
            data ? <Box>
                <Typography fontWeight={900} fontSize={14} p={2} textAlign="center">{data.text}</Typography>
                <Divider sx={{ m: 0}} />
                <Box p={3}>
                    <Typography variant="body2">变量名称</Typography>
                    <FormControl fullWidth sx={{ pt:2, pb: 2}}>
                        {
                            
                            data.options ?  <Select  
                                // @ts-ignore
                                value={inputs[data.value] || data.options[0].value}
                                onChange={(e:SelectChangeEvent) => {
                                    setInputs(prev => {
                                        const forms = { ...prev, [data.value]: e.target.value };
                                        onChange('inputs', forms)
                                        return forms
                                    
                                    })
                                }} >
                                {/* <MenuItem value={'none'} disabled>请选择</MenuItem> */}
                                {
                                    data.options.map((option: any) => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)
                                }
                            </Select> : <TextField size="small" defaultValue="value" />
                        }
                    </FormControl>
                </Box>
                <Divider sx={{ m: 0}} />
                <Box p={3}>
                    <Typography variant="body2">位置坐标</Typography>
                    <Box pt={4} >
                        <TextField size="small" value={num?.toString()} label="所在页" inputProps={{ readOnly: true }} sx={{mb: 4}} fullWidth/>
                        {/* @ts-ignore */}
                        <TextField size="small" value={offsetXs[data.value] || offsetXs[data.value] === 0 ? offsetXs[data.value] : ''} label="X坐标" sx={{mb: 4}} fullWidth 
                            onChange={e => {
                                onChange('offsetX', e.target.value)
                                setOffsetXs(prev => {
                                    const forms = { ...prev, [data.value]: e.target.value }
                                    onChange('offsetXs', forms)
                                    return forms
                                })
                            }} />
                        {/* @ts-ignore */}
                        <TextField size="small" value={offsetYs[data.value] || offsetYs[data.value] === 0 ? offsetYs[data.value] : ''} label="Y坐标" sx={{mb: 4}} fullWidth 
                            onChange={e => {
                                onChange('offsetY', e.target.value)
                                setOffsetYs(prev => {
                                    const forms = { ...prev, [data.value]: e.target.value }
                                    onChange('offsetYs', forms)
                                    return forms
                                
                                })
                            }} />
                    </Box>
                </Box>
                <Divider sx={{mt: 0}}/>
                <Box p={3}>
                    <Button size="small" variant="outlined" fullWidth onClick={() => { 
                        onChange('dele');
                        setInputs(prev => {
                            // 删除 inputs 内 存储的当前值
                            // @ts-ignore
                            const { [data.value]: _, ...rest } = prev;
                            onChange('inputs', rest);
                            return rest;
                        });
                        setOffsetXs(prev => {
                            // 删除 offsetXs 内 存储的当前值
                            // @ts-ignore
                            const { [data.value]: _, ...rest } = prev;
                            onChange('offsetXs', rest);
                            return rest;
                        });
                        setOffsetYs(prev => {
                            // 删除 offsetYs 内 存储的当前值
                            // @ts-ignore
                            const { [data.value]: _, ...rest } = prev;
                            onChange('offsetYs', rest);
                            return rest;
                        });
                    }}>删除</Button>
                </Box>
            </Box> : 'none'
        }
    </Box>
}