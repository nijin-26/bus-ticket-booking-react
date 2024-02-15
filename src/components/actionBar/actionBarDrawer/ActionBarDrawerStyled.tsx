import styled from '@emotion/styled';

export const FilterSortHeading = styled('h2')(({ theme }) => ({
    fontWeight: theme.font.fontWeightRegular,
    color: theme.color.primary,
    marginBottom: '0.5rem',
}));

export const FilterSubHeading = styled('h3')(({ theme }) => ({
    fontWeight: theme.font.fontWeightMedium,
    color: theme.color.textSecondary,
}));
