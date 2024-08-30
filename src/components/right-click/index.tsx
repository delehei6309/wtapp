

import { useState, ReactNode } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import isString from 'lodash/isString';
import { BoxProps } from '@mui/system';
const RightClickMenu = ({ isOpen, onClose, anchorPosition, menus, onMenuItemClick }:any) => {
    return (
        <Menu
            open={isOpen}
            onClose={onClose}
            anchorReference="anchorPosition"
            anchorPosition={anchorPosition}>
            {
                menus.map((item:any, index: number) => {
                    return <MenuItem onClick={() => onMenuItemClick(item)} key={index}>{isString(item) ? item : item?.label}</MenuItem>
                })
            }
        </Menu>
    );
};
interface Props extends BoxProps{
    children: ReactNode,
    menus: any[],
    onMenuItemClick: (option: any) => void,
    disabled?: boolean
}
const RightClick = ({ children, menus, onMenuItemClick, disabled, ...boxProps } : Props) => {
        const [isContextMenuOpen, setContextMenuOpen] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });

    const handleContextMenu = (event:any) => {
        event.preventDefault();
        setContextMenuPosition({ top: event.clientY, left: event.clientX });
        setContextMenuOpen(true);
    };

    const handleMenuItemClick = (option:any) => {
        onMenuItemClick(option)
        setContextMenuOpen(false);
    };

    const handleCloseContextMenu = () => {
        setContextMenuOpen(false);
    };
    return <Box {...boxProps} {...(disabled ? {} : { onContextMenu: handleContextMenu })}>
        {children}
        { disabled ? null : <RightClickMenu
            isOpen={isContextMenuOpen}
            onClose={handleCloseContextMenu}
            anchorPosition={contextMenuPosition}
            menus={menus}
            onMenuItemClick={handleMenuItemClick}
        /> }
    </Box>

}

export default RightClick;