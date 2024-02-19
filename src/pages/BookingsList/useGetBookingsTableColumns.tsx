import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Box, Collapse, IconButton } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { IBooking } from '../../types/bookingsList';
import PassengerDetailCard from '../../components/table/PassengerDetailCard/PassengerDetailCard';

interface GridValueGetterParams {
    row: IBooking;
}

const useGetBookingsTableColumns = () => {
    const { t } = useTranslation('bookingsList');
    const [clickedRows, setClickedRows] = useState<string[]>([]);
    return [
        {
            field: 'expandRow',
            headerName: '',
            maxWidth: 60,
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                const rowId = params.row.pnrNumber;
                const expandedState = clickedRows.includes(rowId);
                return (
                    <IconButton
                        onClick={() => {
                            expandedState
                                ? setClickedRows((prev) =>
                                      prev.filter(
                                          (clickedRow) => clickedRow != rowId
                                      )
                                  )
                                : setClickedRows([...clickedRows, rowId]);
                        }}
                    >
                        {expandedState ? (
                            <KeyboardArrowUp />
                        ) : (
                            <KeyboardArrowDown />
                        )}
                    </IconButton>
                );
            },
        },
        {
            field: 'pnrNumber',
            headerName: t('pnrNumber'),
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                const rowId = params.row.pnrNumber;
                return (
                    <>
                        <Box sx={{ width: '100%' }}>
                            {!clickedRows.includes(rowId) &&
                                params.row.pnrNumber}
                            <Collapse in={clickedRows.includes(rowId)}>
                                <PassengerDetailCard booking={params.row} />
                            </Collapse>
                        </Box>
                    </>
                );
            },
        },
        {
            field: 'date',
            headerName: t('date'),
            // maxWidth: 150,
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return <p>{params.row.departureDate}</p>;
            },
        },
        {
            field: 'origin',
            headerName: t('origin'),
            // maxWidth: 150,
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return (
                    <Box>
                        <p>{params.row.origin}</p>
                        <p>{params.row.departure}</p>
                    </Box>
                );
            },
        },
        {
            field: 'destination',
            headerName: t('destination'),
            // maxWidth: 150,
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return (
                    <Box>
                        <p>{params.row.destination}</p>
                        <p>{params.row.arrival}</p>
                    </Box>
                );
            },
        },
        {
            field: 'busType',
            headerName: t('busType'),
            // maxWidth: 150,
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return (
                    <Box>
                        <p>{params.row.busType}</p>
                        <p>{params.row.seatType}</p>
                    </Box>
                );
            },
        },
    ];
};
export default useGetBookingsTableColumns;
