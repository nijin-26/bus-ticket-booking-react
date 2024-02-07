import { Stack, Typography } from '@mui/material';
import { DetailsItemWrapper } from './DetailItem.styled';

interface IDetailsItemProps {
    title: string;
    value: string;
    icon: JSX.Element
}
export const DetailsItem = ({
    title,
    value,
    icon
}: IDetailsItemProps) => {
    return (
        <DetailsItemWrapper direction={'row'} spacing={3}>
            <Stack direction={'row'} spacing={1}>
                {icon}
                {title && (
                    <Typography variant="body2" className="title">
                        {title}:
                    </Typography>
                )}
            </Stack>
            {value && (
                <Typography variant="body2" className="value">
                    {value}
                </Typography>
            )}
        </DetailsItemWrapper>
    );
};
