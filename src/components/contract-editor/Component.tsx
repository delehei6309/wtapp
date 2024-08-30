import { Box, styled } from "@mui/material"

export const ItemBox = styled(Box)(({theme}) => {
    return {
        border: '1px solid',
        borderColor: theme.palette.divider,
        borderRadius: '4px',
        width: '136px',
        height: '40px',
        textAlign: 'center',
        lineHeight: '40px',
        cursor: 'move',
        // 文字禁止选中
        userSelect: 'none',
        backgroundColor: theme.palette.background.paper
    }
})