/**
 * @description This is a component that is used to display a tooltip with ellipsis
 */
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
interface EllipsisTooltipProps {
    children: React.ReactElement;
    width?: string;
}
export default ({ children, width = '100%' }: EllipsisTooltipProps) => {
    const [disableHoverListener, setDisableHoverListener] = React.useState(false);
    const boxref:any = React.useRef(null);
    const childrenWithClassName = React.cloneElement(children, {
        className: 'ellipsis',
        style: {
            width
        }
    });
    React.useEffect(() =>{
        if(boxref.current){
            boxref.current.children[0].style.display ='inline-block';
            const textWidth = boxref.current.children[0].offsetWidth;
            setDisableHoverListener(textWidth < width);
        }
    }, [boxref.current, children, width])
    return <React.Fragment>
        <Tooltip title={children.props.children}  arrow disableHoverListener={disableHoverListener}>{childrenWithClassName}</Tooltip>
        <Box position="fixed" left={0} top="-9999px" width="100vw" visibility="hidden" ref={boxref} sx={{}}>{children}</Box>
    </React.Fragment>
}