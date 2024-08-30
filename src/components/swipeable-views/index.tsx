import Stack from '@mui/material/Stack';

interface Props {
    children: React.ReactNode,
    index?: number
}
export default ({ children, index = 0 }:Props) => {
    return <Stack direction="row" width="200%" sx={{
        '>div': { width: '50%'},
        transform: `translateX(${-(index*50)}%)`,
        transition: 'transform 0.3s ease-in-out'
    }}>{children}</Stack>
}