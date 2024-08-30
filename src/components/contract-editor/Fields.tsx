
import { Box, Typography, Stack } from '@mui/material';
import { Fragment, useEffect, useRef } from 'react';
import { useDrag } from 'react-dnd';
import { ItemBox } from './Component';
interface Props {
    fields: any[],
    onDragging: (isDragging: boolean) => void
}
function Item({ values, children, onDragging } : any) {
    const ref = useRef(null);
    const [{isDragging}, drag]= useDrag({
        type: 'box',
        item: {
            ...values,
            text: children
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

    useEffect(()=> {
        drag(ref);
    }, []);
    useEffect(() => {
        onDragging(isDragging);
    }, [isDragging])
    return <ItemBox ref={ref} mb={3} >{children}</ItemBox>
}
export default ({ fields, onDragging }: Props) => {
    return <Box width={220} borderRight="1px solid" borderColor="divider">
        {
            fields.map(({ title, value, children:child}) => <Box key={value}>
                <Typography fontWeight={900} fontSize={14} p={2} bgcolor={(theme:any) => theme.palette.customColors.bodyBg}>{title}</Typography>
                <Box pt={2} pl={2}>
                    <Stack direction="row" sx={{
                        width: 150,
                        flexWrap: 'wrap',
                    }}>
                        {child.map((field:any, index:number) => {
                            return <Item key={field.value} values={field} onDragging={onDragging}>{field.text}</Item>
                        })}
                    </Stack>
                </Box>
            </Box>)
        }
    </Box>
}