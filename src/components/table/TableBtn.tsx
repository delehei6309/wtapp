import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles'
const TableLink = styled(Link)(({ theme }) => {
    return {
        '&[disabled]': {
            color: theme.palette.action.disabled,
            cursor: 'not-allowed',
            // pointerEvents: 'none'
        },
        cursor: 'pointer',
        fontSize: '13px',
        fontWeight: 900,
        '&+a': {
            marginLeft: theme.spacing(1.5)
        }
    }
})

interface TableLinkButtonProps {
    disabled?: boolean
    onClick?: () => void
    children: React.ReactNode
}
export default (params:TableLinkButtonProps) => <TableLink {...params} onClick={params.disabled ? () => null : params.onClick } />;