import { DataGrid } from '@mui/x-data-grid';
import { User } from '../../../../interfaces';

export const UsersTable = ({ users }: { users: User[] }) => {
    const columns = [
        { field: 'fullName', headerName: 'Full name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'phone', headerName: 'Phone', flex: 1 },
    ];
    return (
        <DataGrid
            rows={users}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            initialState={{
                pagination: {
                    paginationModel: {
                        page: 0,
                        pageSize: 10,
                    },
                },
            }}
            pagination
            disableRowSelectionOnClick
        />
    );
};
