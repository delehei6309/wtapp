/**
 * @description 双选日期选择器
 */

import React from 'react'
import zhCN from 'date-fns/locale/zh-CN';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { PopperContainer } from './Commpon';
import TextField, { TextFieldProps } from '@mui/material/TextField';
// import DatePickerWrapper from '../../../@core/styles/libs/react-datepicker';

registerLocale('zhCN',zhCN);
type Props = {
    onChange?: (date: [Date | null, Date | null] | null) => void;
    value?: [Date | null, Date | null] | null | undefined;
    minDate?: Date | null;
    maxDate?: Date | null;
    dateFormat?: string;
    isClearable?: boolean;
  } & TextFieldProps ;
const Picker = (props: Props) => {
    const { onChange, value, minDate, maxDate, dateFormat="yyyy-MM-dd", isClearable, ...textFieldProps } = props
    const [date, setDate] = React.useState<[Date | null, Date | null] | null | undefined>(value)
    return <DatePicker
            locale={'zhCN'}
            selectsRange
            // isClearable={isClearable || true}
            startDate={value ? value[0] : (date ? date[0] : null)}
            endDate={value ? value[1] : (date ? date[1] : null)}
            dateFormat={dateFormat}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(dates: [Date | null, Date | null] | null) => {
                console.log(dates)
                setDate(dates)
                onChange && onChange(dates)
            }}
            customInput={<TextField { ...textFieldProps}/>}
            portalId='react-datepicker-portal'
            />
}

export default Picker
