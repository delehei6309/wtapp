/**
 * @description 倒计时按钮
 * @param {Number} seconds 倒计时时间，默认60
 * @param {Function} trigger 点击按钮时的触发函数，传入form的校验函数即可
 * @param {String} checkField 校验的字段，默认为mobile_no
 * @param {String} mobileNo 接受校验的手机号吗 如若传入trigger，则此字段不会被使用
 * @param {String} buttonText 按钮文案 默认为[获取验证码]
 * @param {String} buttonText2 倒计时的文案 默认为[秒后重试]
 * @param {Function} handleComplete 倒计时结束时的回调函数
 * @param {Function} handleStart 倒计时开始时的回调函数
 * @param {Object} props 其他参数 应用于Button组件
 */

import * as React from 'react';

import Button, { ButtonProps } from '@mui/material/Button';
import Countdown from 'react-countdown';

import { toast } from 'react-hot-toast';
import reduce from 'lodash/reduce';
function timeToSeconds (times = [0,0,0]) {
    return reduce(times, (result, value) => {
        return result * 60 + value;
    });
}

interface CountdownButonProps extends ButtonProps{
    seconds?: number;
    trigger?: any;
    checkField?: string;
    mobileNo?: string;
    buttonText?: string;
    buttonText2?: string;
    handleComplete?: () => void;
    handleStart?: () => void;
}

function CountdownButon({ seconds = 60, trigger, checkField = 'mobile_no', mobileNo, buttonText = '获取验证码', buttonText2 = '秒后重试', handleComplete, handleStart, ...props }: CountdownButonProps, ref: React.Ref<unknown>) {
    const date = React.useMemo(() => new Date(Date.now() + seconds*1000), [seconds] )
    const [isCounting, setIsCounting] = React.useState(false);
    const countref:any = React.useRef(null);
    React.useImperativeHandle(ref,() => ({
        // 停止倒计时
        stop:() => {
            countref.current.stop();
            setIsCounting(false);
        }
    }))
    // 点击开始
    const handleClick = async () => {
        if(isCounting) return;
        if(trigger){
            // 需要form 的校验
            const valid = await trigger(checkField);
            if(valid){
                countref.current.start();
                setIsCounting(true);
            }
            return ;
        }
        if(mobileNo){
            if(/^1[0-9]{10}$/.test(mobileNo)){
                countref.current.start();
                setIsCounting(true);
                return ;
            }
            toast.error('请输入正确的手机号！')
            return ;
        }
        countref.current.start();
        setIsCounting(true);
    }

    const renderer = ({ hours, minutes, seconds } : any) => {
        const count = timeToSeconds([hours, minutes, seconds])
        return  isCounting ? `${count}${buttonText2}` : buttonText;
    }

    // 倒计时结束
    const onComplete = () => {
        setIsCounting(false);
        handleComplete && handleComplete();
    };
    return <Button {...props}
        onClick={handleClick}>
        <Countdown
            ref={countref}
            autoStart={false}
            date={date}
            renderer={renderer}
            onComplete={onComplete} 
            onStart={handleStart}
        />
    </Button>
}

export default React.forwardRef(CountdownButon);