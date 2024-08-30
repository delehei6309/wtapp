
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { DataGrid, GridColDef, GridRowsProp, zhCN, GridToolbarColumnsButton, GridToolbarContainer, gridClasses } from '@mui/x-data-grid';
import { local } from '../../../tools/store';
import { removeTrailingSlash } from '../../../tools/operation';
import renderCellExpand from '../RenderCellExpand';
type CustomGridColDef = GridColDef & { tooltipEffect?: boolean };
interface XDataGridProps {
    name?: string;
    rows: GridRowsProp;
    columns: CustomGridColDef[];
    actions?: any[];
    page?: number; // add page as an optional prop
    pageSize?: number; // add pageSize as an optional prop
    pageSizeOptions?: number[];
    hideFooter?: boolean;
    paginationMode?: 'client' | 'server';
    onPaginationModelChange?: (params: any) => void;
    columnVisibilityModel?: object;
    hideToolbar?: boolean;
    rowCount?: number;
    getRowId?: (row: any) => string;
    [key: string]: any;
}

export default function XDataGrid({ 
        name = 'table',
        rows, columns, page = 0, pageSize = 10, pageSizeOptions = [10, 20, 30, 50, 100], actions, hideFooter = false,
        paginationMode = 'server',
        onPaginationModelChange,
        columnVisibilityModel: columnVisibilityModelProp,
        hideToolbar = false,
        rowCount = 10,
        getRowId,
        ...rest
    }: XDataGridProps) {
    const location = useLocation();
    const pathname = removeTrailingSlash(location.pathname);
    const localColVisibKey = `${encodeURIComponent(pathname)}_${name}_col_visib`; // 存储隐藏的column，有条件的可以存储在后端
    const [columnVisibilityModel, setColumnVisibilityModel] = React.useState(() => {
        const colVisib = local.get(localColVisibKey);
        return colVisib ? colVisib : (columnVisibilityModelProp || {});
    })
    return (
        <DataGrid 
            getRowId={getRowId ? getRowId : (row) => row.id || row._id}
            getRowHeight={() => 'auto'}
            sx={{
                [`& .${gridClasses.cell}`]: {
                  py: 1,
                },
              }}
            // disableColumnFilter
            disableColumnMenu
            disableRowSelectionOnClick
            autoHeight
            rowCount={rowCount}
            // pagination
            rows={rows}
            // initialState={{
            //     ...(hideFooter ? {} : { pagination: { paginationModel: { pageSize, page } }}), // use the page prop here (if defined
            // }}
            paginationModel={{ pageSize, page }}
            pageSizeOptions={pageSizeOptions}
            hideFooter={hideFooter}
            columns={columns.map(({ tooltipEffect, ...column}) => ({
                flex: 1,
                align: 'center',
                headerAlign: 'center',
                sortable: false,
                ...(tooltipEffect ? { renderCell: renderCellExpand } : {}),
                ...column
            }))}
            localeText={zhCN.components.MuiDataGrid.defaultProps.localeText}
            onPaginationModelChange={onPaginationModelChange}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) => {
                const colVisib:any = {};
                Object.keys(newModel).forEach((key) => {
                    if(newModel[key] === false){
                        colVisib[key] = newModel[key];
                    }
                });
                setColumnVisibilityModel(colVisib);
                if(Object.keys(colVisib).length > 0){
                    local.set(localColVisibKey, colVisib);
                    return;
                }
                local.remove(localColVisibKey);
            }}
            paginationMode={paginationMode}
            slots={{
                // NoRowsOverlay,
                // Pagination,
                toolbar: () => {
                    return hideToolbar ? null : <GridToolbarContainer>
                        {/* actions */}
                        { actions?.map((action, index) => <React.Fragment key={index}>{action}</React.Fragment>)}
                        <GridToolbarColumnsButton />
                    </GridToolbarContainer>
                },
            }}
            {...rest}
        />
    );
}