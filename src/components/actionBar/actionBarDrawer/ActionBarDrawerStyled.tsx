import styled from '@emotion/styled';

export const FilterSortHeading = styled('h3')(({ theme }) => ({
    fontWeight: theme.font.fontWeightRegular,
    fontSize: 20,
    color: theme.color.primary,
    marginBottom: '0.5rem',
}));

export const FilterSubHeading = styled('h4')(({ theme }) => ({
    fontWeight: theme.font.fontWeightMedium,
    fontSize: 16,
    color: theme.color.textSecondary,
}));
