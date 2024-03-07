import { Stack, Typography } from '@mui/material';

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
        <Stack direction={'row'}>
            <Stack direction={'row'} spacing={1} className='title-container'>
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
        </Stack>
    );
};
