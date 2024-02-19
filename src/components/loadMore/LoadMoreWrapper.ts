import styled from '@emotion/styled';

export const LoadMoreWrapper = styled('div')(({ theme }) => ({
    marginBottom: '4rem',
    position: 'relative',

    hr: {
        border: `0.1rem solid ${theme.color.textSecondary}`,
        position: 'absolute',
        width: '100%',
        margin: '0',
        top: '50%',
    },

    '.load-more-btn': {
        background: theme.color.primary,
        color: theme.color.background,
        border: `0.1rem solid ${theme.color.primary}`,
        cursor: 'pointer',
        width: '18rem',
        padding: '0.7rem 1.1rem',
        borderRadius: '1.8rem',
        translate: '-50% 0',
        left: '50%',
    },

    '.load-more-btn:hover': {
        background: theme.color.background,
        color: theme.color.primary,
    },
}));
