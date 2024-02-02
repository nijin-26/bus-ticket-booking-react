import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material';
import { User } from '../../../../interfaces';
import { UsersTableWrapper } from './UsersTable.styled';
import { Box } from '@mui/system';

export const UsersTable = ({ users }: { users: User[] }) => {
    return (
        <UsersTableWrapper>
            <TableContainer component={Box}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {user.fullName}
                                </TableCell>
                                <TableCell align="right">
                                    {user.email}
                                </TableCell>
                                <TableCell align="right">
                                    {user.phone}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </UsersTableWrapper>
    );
};
