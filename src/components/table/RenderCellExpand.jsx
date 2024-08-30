/**
 * @description 超出省略号处理
 */
import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import isNumber from 'lodash/isNumber';
//toLocaleString('zh',{minimumFractionDigits:2,maximumFractionDigits:2})
function isOverflown(element) {
    return (
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
    );
}

const GridCellExpand = React.memo((props) => {
    const { width, value } = props;
    const wrapper = React.useRef(null);
    const celldiv = React.useRef(null);
    const cellvalue = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showFullCell, setShowFullCell] = React.useState(false);
    const [showPopper, setShowPopper] = React.useState(false);

    const handleMouseEnter = () => {
        const isCurrentlyOverflown = isOverflown(cellvalue.current);
        setShowPopper(isCurrentlyOverflown);
        setAnchorEl(celldiv.current);
        setShowFullCell(true);
    };

    const handleMouseLeave = () => {
        setShowFullCell(false);
    };

    React.useEffect(() => {
        if (!showFullCell) {
            return undefined;
        }

        function handleKeyDown(nativeEvent) {
            // IE11, Edge (prior to using Bink?) use 'Esc'
            if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
            setShowFullCell(false);
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [setShowFullCell, showFullCell]);

    return (
        <Box ref={wrapper} className="building-cell"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                alignItems: 'center',
                lineHeight: '24px',
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
            }}>
            <Box ref={celldiv}
                sx={{
                    height: '100%',
                    width,
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    zIndex:1
                }} />
                <Box ref={cellvalue}
                    sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',zIndex:2 }}>{value}</Box>
                    {
                        showPopper && (
                            <Popper
                                open={showFullCell && anchorEl !== null}
                                anchorEl={anchorEl}
                                style={{ width, paddingLeft: -17, zIndex:99999 }}>
                                <Paper
                                    elevation={1}
                                    style={{ minHeight: wrapper.current.offsetHeight - 3 }}>
                                    <Typography variant="body2" style={{ padding: 8 }}>
                                        {value}
                                    </Typography>
                                </Paper>
                            </Popper>
                        )
                    }
        </Box>
    );
});

GridCellExpand.propTypes = {
    value: PropTypes.any.isRequired,
    width: PropTypes.number.isRequired,
};

function renderCellExpand(params) {
    return (
        <GridCellExpand value={isNumber(params.value) || params.value ? params.value : ''} width={params.colDef.computedWidth} />
    );
}

renderCellExpand.propTypes = {
    /**
     * The column of the row that the current cell belongs to.
     */
    colDef: PropTypes.object.isRequired,
    /**
     * The cell value.
     * If the column has `valueGetter`, use `params.row` to directly access the fields.
     */
    value: PropTypes.string,
};

export default renderCellExpand;



