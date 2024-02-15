import styled from '@emotion/styled';

export const LandingPageWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LandingPageHeading = styled('h1')(({ theme }) => ({
    fontWeight: theme.font.fontWeightRegular,
    fontSize: 50,
}));
