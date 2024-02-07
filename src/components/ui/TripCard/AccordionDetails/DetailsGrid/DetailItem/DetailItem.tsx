import { Stack, Typography } from '@mui/material';
import { DetailsItemWrapper } from './DetailItem.styled';

interface IDetailsItemProps {
    title: string;
    value: string;
    imageSrc: string;
    imageAlt: string;
}
export const DetailsItem = ({
    title,
    value,
    imageSrc,
    imageAlt,
}: IDetailsItemProps) => {
    return (
        <DetailsItemWrapper direction={'row'} spacing={3}>
            <Stack direction={'row'} spacing={1}>
                <img src={imageSrc} alt={imageAlt} />
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
