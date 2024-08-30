
import { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
interface Props {
    children?: ReactNode
}
const Demo = ({ children }: Props) => {
    const theme = useTheme() as any;
    return <><span style={{ color: theme.palette.error.main}}>*</span>{children}</>
}
export default Demo;

