import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';

const CustomToolbar = () => {
    return (
        <GridToolbarContainer
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}
        >
            <GridToolbarExport />
        </GridToolbarContainer>
    );
};

export default CustomToolbar;
