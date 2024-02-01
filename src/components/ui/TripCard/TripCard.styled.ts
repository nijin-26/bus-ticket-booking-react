import styled from '@emotion/styled';

export const TripCardStyled = styled('section')(
    ({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color:${theme.color.background};

    .trip-card-icons{
        gap: 1rem;
    }
    
    .summary {
        border-radius: 0.7rem;
        border-left: 0.8rem solid ${theme.color.red};
        box-shadow: 0 0 1rem 0 rgba(0,0,0,0.26);
    }

    p {
        margin: 0;
        white-space: nowrap;
        font-size:${theme.font.lg};
        align-self: center;
    }

    p.date {
        font-size:${theme.font.sm}

    }

    .date-time {
        gap: 0.4rem;
    }
    
    .details {
        width: 100%;
        justify-content: space-between;
        padding-right: 7rem;
        align-items: 'center',
    }
`
);
