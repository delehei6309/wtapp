/**
 * @file 区域选择组件
 * @params defaultValue [ province, city, district ]
 * @params onChange (province, city, district) => {}
 * @params inputProps TextField的props
 */
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import SendIcon from '@mui/icons-material/Send';
import areaData from './data.json';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Stack from '@mui/material/Stack';
// import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CustomizedDialog from '../CustomizedDialog'
import { Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
const CustomArea = React.forwardRef((props: any,  ref: any) => {
    const { onChange } = props;
    const { control, trigger, reset, getValues } = useForm({ defaultValues: { value: '' }, mode: 'all' });
    // 自定义地区 form
    const [open, setOpen] = React.useState(false);
    React.useImperativeHandle(ref, () => ({
        open: () => {
            setOpen(true);
        }
    }));
    return <CustomizedDialog title="自定义"
        open={open}
        handleClose={() => {
            setOpen(false);   
            reset();
        }}
        handleConfirm={async () => {
            const valide = await trigger();
            if(valide){
                onChange(getValues('value'))
                setOpen(false);
                reset();
            }
        }}>
            <Box width={320} p={2} component="form">
                <Controller name="value"
                    control={control}
                    rules={{
                        required: '请输入地区！'
                    }}
                    render={( { field, fieldState: { error } }) => <TextField label="*地区" fullWidth placeholder="请输入自定义地区" value={field.value} onChange={e => {field.onChange(e.target.value.trim())}} error={Boolean(error)} 
                        helperText={error?.message}/>} />
                
            </Box>
    </CustomizedDialog>
})
export default function Component(props: any){
    const refc:any = React.useRef(null);
    const { defaultValue, onChange, ...inputProps } = props;
    const theme = useTheme();
    const inputref: any = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    const handleClose = (event: Event) => {
        if (inputref.current && inputref.current.contains(event.target as HTMLElement)) {
            return ;
        }
        setOpen(false);
    };
    
    const [province, setProvince] = React.useState<any>(null);
    const [city, setCity] = React.useState<any>(null);
    const [district, setDistrict] = React.useState<any>(null);
    const [value, setValue] = React.useState<string>('');
    React.useEffect(() => {
        if(defaultValue){
            const [p, c, d] = defaultValue;
            if(p) { setProvince(p) }
            if(c) { setCity(c) }
            if(d){ setDistrict(d) }
            if(p && c && d){
                setValue(`${p.n}/${c.n}/${d.n}`)
            }
        }
    }, [defaultValue])
    const handleMenuItemClick = ( event: React.MouseEvent<HTMLLIElement, MouseEvent>, option: any, index: number ) => {
        setOpen(false);
        if(option?.i === 666666){
            // 自定义
            refc.current.open();
            return ;
        }
        setValue(`${province.n}/${city.n}/${district.n}`);
        onChange && onChange(province, city, district)
    };
    const onClear = () => {
        if(value){
            setValue('');
            setProvince(null);
            setCity(null);
            setDistrict(null);
            onChange && onChange();
            setOpen(false);
        }else{
            setOpen(true);
        }
    }
    return <React.Fragment>
        <TextField ref={inputref} placeholder='选择省市区' onFocus={() => setOpen(true)} inputProps={{ readOnly: true}} { ...inputProps }
            value={value}
            InputProps={{
                endAdornment: (
                  <IconButton onClick={onClear} edge="end" size="small" >
                    { value ? <ClearIcon /> : <ArrowDropDownOutlinedIcon />}
                  </IconButton>
                ),
              }} />
        <Popper sx={{ zIndex: 1 }}
            open={open}
            anchorEl={inputref.current}
            role={undefined}
            transition
            disablePortal
            placement="bottom-start">
            {({ TransitionProps, placement }) => {
                return <Grow
                    {...TransitionProps}
                    style={{
                    transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}>
                    <Paper sx={{ }}>
                        <ClickAwayListener onClickAway={handleClose}>
                            <Stack direction="row">
                            <MenuList  autoFocusItem sx={{height: 300, overflowY: 'auto' }}>
                            {areaData.filter(({p}) => p === 0)?.map((option: any, index: number) => (
                                <MenuItem sx={{
                                    p: 1,
                                    pl: 2, pr: 3,
                                    bgcolor: province?.i === option.i ? theme.palette.action.hover : ''
                                }}
                                    
                                    key={option.i.toString()}
                                    // onClick={(event) => handleMenuItemClick(event, option, index)}
                                    onMouseEnter={() => {
                                        setProvince(option);
                                        setCity(null);
                                        setDistrict(null);
                                    }}
                                    >
                                    <ListItemText sx={{mr:1}}>{option.n}</ListItemText>
                                        <ArrowForwardIosOutlinedIcon sx={{fontSize: 12}} />
                                </MenuItem>
                            ))}
                            </MenuList>
                            {
                                province ? <React.Fragment>
                                    <MenuList  sx={{height: 300, overflowY: 'auto', borderLeft: `1px solid ${theme.palette.divider}` }}>
                                    {areaData.filter(({p}) => p === province.i)?.map((option: any, index: number) => (
                                        <MenuItem sx={{
                                            p: 1,
                                            pl: 2, pr: 3,
                                            bgcolor: city?.i === option.i ? theme.palette.action.hover : ''
                                        }}
                                            
                                            key={option.i.toString()}
                                            // onClick={(event) => handleMenuItemClick(event, option, index)}
                                            onMouseEnter={() => {
                                                setCity(option);
                                                setDistrict(null);
                                            }}
                                            >
                                            <ListItemText sx={{mr:1}}>{option.n}</ListItemText>
                                                <ArrowForwardIosOutlinedIcon sx={{fontSize: 12}} />
                                        </MenuItem>
                                    ))}
                                    </MenuList>
                                </React.Fragment> : null
                            }
                            {
                                city ? <React.Fragment>
                                    <MenuList  sx={{height: 300, overflowY: 'auto', borderLeft: `1px solid ${theme.palette.divider}` }}>
                                        {areaData.filter(({p}) => p === city.i).concat({i: 666666, n: '自定义', p: city.i, y: 'all'})?.map((option: any, index: number) => (
                                            <MenuItem sx={{
                                                p: 1,
                                                pl: 2, pr: 3,
                                                bgcolor: district?.i === option.i ? theme.palette.action.hover : ''
                                            }}
                                                
                                                key={option.i.toString()}
                                                onClick={(event) => handleMenuItemClick(event, option, index)}
                                                onMouseEnter={() => {
                                                    setDistrict(option);
                                                }}
                                                >
                                                <ListItemText sx={{mr:1}}>{option.n}</ListItemText>
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </React.Fragment> : null
                            }
                            </Stack>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            }}
        </Popper>
        <CustomArea ref={refc} onChange={(val: any) => {
            setValue(`${province.n}/${city.n}/${val}`);
            onChange && onChange(province, city, { ...district, i: encodeURIComponent(val), n: val })
        }} />
    </React.Fragment>
}