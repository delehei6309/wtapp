
import { Fragment, ReactNode, useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react"
import { Box, Typography, useTheme } from "@mui/material"
import { useDrop } from 'react-dnd'
import { Rnd } from "react-rnd";
import { cryptoRandomString } from 'src/tools/operation'
interface Props {
    pdfs: any[],
    isDragging: boolean

}
type DraggableData = {
    node: HTMLElement,
    x: number,
    y: number,
    deltaX: number, deltaY: number,
    lastX: number, lastY: number
};
// 获取添加标签在 目标容器内的坐标
function getOffsetXAndOffsetY(containerRect: any, dragItemRect: any){
    const offsetX:number = dragItemRect.x - containerRect.left;
    const offsetY:number = dragItemRect.y - containerRect.top;
    return {
        // @ts-ignore
        offsetX: parseInt(offsetX),
        // @ts-ignore
        offsetY: parseInt(offsetY)
    }
}
// 定义 DroppableBox
const DroppableBox = forwardRef((props: { callback: any; boxChange(selectedBox: any): unknown; children: ReactNode; selectedValue: any }, ref) =>{
    const selectedValue = props.selectedValue;
    const theme = useTheme();
    const refbox = useRef(null);
    const [boxs, setBoxs] = useState<any[]>([]);
    useEffect(() => {
        props.callback(boxs)
    }, [boxs])
    const [,drop] = useDrop(() => {
        return {
            accept: 'box',
            canDrop(item:any, monitor){
                // @ts-ignore
                const containerRect = refbox.current.getBoundingClientRect();
                const dragItemRect = monitor.getSourceClientOffset();
                if (containerRect && dragItemRect){
                    const { offsetX, offsetY } = getOffsetXAndOffsetY(containerRect, dragItemRect);
                    // 要判断是不是完全在 容器内
                    return offsetX >= 0 && offsetY >= 0 && offsetX+(item.width || 60) <= containerRect.width && offsetY+(item.height || 40) <= containerRect.height
                }
                
                return false
            },
            drop(item:any, monitor) {
                // @ts-ignore
                const containerRect = refbox.current.getBoundingClientRect();
                const dragItemRect = monitor.getSourceClientOffset();
                const { offsetX, offsetY } = getOffsetXAndOffsetY(containerRect, dragItemRect);
                const box = {
                    ...item,
                    value: item.value+ cryptoRandomString(16),
                    offsetX,
                    offsetY,
                    width: item.width || 60,
                    height: item.height || 40
                }
                setBoxs( prev => [...prev, box]);
                props.boxChange(box) // 设置一下
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            })
        }
    });
    
    useEffect(()=> {
        drop(refbox);
    }, []);

    useImperativeHandle(ref, () => ({
        // 删除box
        dele({ value } : any){
            setBoxs(prev => prev.filter(item => item.value != value))
            props.boxChange(null)
        },
        updateOffset({ value, offsetX, offsetY } : any){
            // setBoxs(prev => [...prev])
            setTimeout(() => {
                setBoxs(prev => {
                const thanBox = prev.map( (item, index) => {
                    if (item.value == value){
                        return {
                            ...item,
                            offsetX,
                            offsetY
                        }
                    }
                    return item;
                })
                // props.boxChange(thanBox.find(item => item.value == value));
                return thanBox
            })
            })
        }
    }));
    const onDrag = (data:any, box:any) => {
        const { x, y } = data;
        setBoxs(prev => {
            return prev.map( (item, index) => {
                if (item.value == box.value){
                    const thanBox = {
                        ...item,
                        offsetX: parseInt(x),
                        offsetY: parseInt(y)
                    };
                    props.boxChange(thanBox)
                    return thanBox
                }
                return item;
            })
        
        })
    }
    return <Box position="relative"  ref={refbox}>
        {props.children}
        {
            boxs.map( (box,index) => <Rnd  bounds="parent" key={box.value} 
                // default={{
                //     x: box.offsetX,
                //     y: box.offsetY,
                //     width: 100,
                //     height: box.height,
                // }} 
                size={{width: box.width, height: box.height}}
                position={{x: box.offsetX, y: box.offsetY}}
                enableResizing={!box.disabledResizing}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `solid 1px ${selectedValue?.value == box.value ? theme.palette.info.main : theme.palette.divider}`,
                    // @ts-ignore
                    backgroundColor: 'rgb(255, 224, 132, .9)',
                    fontSize: '15px',
                    fontWeight: 900,
                }}
                minWidth={100} minHeight={40}
                onDragStart={(e: any, data: DraggableData) => { props.boxChange(box) }}
                onResizeStart={() => { props.boxChange(box) }}
                // onDrag={(e, data) => { onDrag(data, box) }}
                onDragStop={(e, data) => {  onDrag(data, box) }}
                onResizeStop={(e,direction, ref, delta, position) => {
                    setBoxs(prev => {
                        return prev.map( (item, index) => {
                            if (item.value == box.value){
                                props.boxChange({
                                    ...item,
                                    width: ref.style.width,
                                    height: ref.style.height,
                                    offsetX: position.x,
                                    offsetY: position.y
                                })
                                return {
                                    ...item,
                                    width: ref.style.width,
                                    height: ref.style.height,
                                    offsetX: position.x,
                                    offsetY: position.y
                                }
                            }
                            return item;
                        })
                    
                    })
                }}>{box.text}</Rnd>)
        }
    </Box>
})
export default DroppableBox