import styled from '@emotion/styled';

const TableWrapper = styled('table')(({ theme }) => ({
    borderCollapse: 'collapse',
    width: '100%',

    th: {
        border: '0.1rem solid black',
    },

    td: {
        border: '0.1rem solid black',
    },
}));

export default TableWrapper;
