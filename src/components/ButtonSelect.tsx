/**
 * @description 自定义样式的点击按钮&选择框
 * @param {buttonProps} 按钮属性
 * @param {options} 选择框选项
 */
import * as React from 'react';

import Button from '@mui/material/Button';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
export default function Component(props: any){
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const handleClose = (event: Event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return ;
        }
        setOpen(false);
    };
    const { options, menuItemClick, ...buttonProps } = props
    const handleMenuItemClick = ( event: React.MouseEvent<HTMLLIElement, MouseEvent>, option: any, index: number ) => {
        setOpen(false);
        menuItemClick(option, index);
    };
    return <React.Fragment>
        <Button startIcon={<KeyboardArrowDownOutlinedIcon />} { ...buttonProps} ref={anchorRef}  onClick={() => { setOpen((prevOpen) => !prevOpen) }} />
        <Popper sx={{ zIndex: 1 }}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal>
            {({ TransitionProps, placement }) => (
            <Grow
                {...TransitionProps}
                style={{
                transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}>
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList  autoFocusItem>
                        {options?.map((option: any, index: number) => (
                            <MenuItem
                                key={index.toString()}
                                disabled={option?.disabled}
                                onClick={(event) => handleMenuItemClick(event, option, index)}>{option?.label? option.label : option}</MenuItem>
                        ))}
                        </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Grow>
            )}
        </Popper>
    </React.Fragment>
}