
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
interface LoadingProps {
    sx?: any,
    message?: string,
    open?: boolean
}

const Loading = ({sx, message, open = true }:LoadingProps) => (
    open? <Box
        sx={{
            width:'100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position:'fixed',
            left:0,
            top:0,
            zIndex:9999,
            bgcolor: 'rgba(255,255,255,.8)',
            ...sx
        }}>
        <CircularProgress disableShrink />
        { message ? <Typography mt={4} variant="subtitle2" color={"primary"}>{message}</Typography> : null }
    </Box> : null
)

export default Loading
