import styled from '@emotion/styled';

export const LoadMoreWrapper = styled('div')(({ theme }) => ({
    marginTop: '5rem',

    hr: {
        border: `0.1rem solid ${theme.color.textSecondary}`,
    },

    '.load-more-btn': {
        background: theme.color.primary,
        color: theme.color.background,
        border: `0.1rem solid ${theme.color.primary}`,
        cursor: 'pointer',
        width: '18rem',
        padding: '0.7rem 1.1rem',
        borderRadius: '1.8rem',
        transform: 'translate(-50%,-50%)',
        left: '58rem',
        bottom: '1rem',
    },

    '.load-more-btn:hover': {
        background: theme.color.background,
        color: theme.color.primary,
    },
}));
