import * as React from 'react';
// import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
export default ({
    onQuery,
    onExport,
    onReset
}: {
    onQuery?: () => void,
    onExport?: () => void,
    onReset?: () => void
}) => {
    return <React.Fragment>
        <Button variant="contained" onClick={onQuery} size="medium" sx={{mr: 2 }}>查询</Button>
        { onExport && <Button variant="contained" onClick={onExport} size="medium" sx={{mr: 2}}>导出</Button> }
        <Button variant="outlined" onClick={onReset} size="medium">重置</Button>
    </React.Fragment>
}