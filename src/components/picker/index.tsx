/**
 * @description 单选日期选择器
 */

import React from 'react'
import zhCN from 'date-fns/locale/zh-CN';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextField, { TextFieldProps } from '@mui/material/TextField';

registerLocale('zhCN',zhCN);
type Props = {
    onChange?: (date: Date | null) => void;
    value?: Date | null;
    minDate?: Date | null;
    maxDate?: Date | null;
    dateFormat?: string;
    isClearable?: boolean;
  } & TextFieldProps ;
const Picker = (props: Props) => {
    const { onChange, value, minDate, maxDate, dateFormat="yyyy-MM-dd", isClearable, ...textFieldProps } = props
    const [date, setDate] = React.useState<Date | null | undefined>(value)
    return (
        <DatePicker
            locale={'zhCN'}
            isClearable={isClearable}
            selected={value || date}
            dateFormat={dateFormat}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(date: Date | null) => {
                console.log(date)
                setDate(date)
                onChange && onChange(date)
            }}
            customInput={<TextField { ...textFieldProps}/>}
            portalId='react-datepicker-portal'
            />
    )
}

export default Picker
