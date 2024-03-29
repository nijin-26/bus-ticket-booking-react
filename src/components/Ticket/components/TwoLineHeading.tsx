import { Typography } from '@mui/material';
import { TwoLineHeadingWrapper } from './TwoLineHeading.styled';

export const TwoLineHeading = ({ title, value }: { title:string, value:string }) => {
    return (
        <TwoLineHeadingWrapper direction={'column'} className='two-line-heading'>
            <Typography component={'h2'} className="title">
                {title}
            </Typography>
            <Typography component={'h3'} className="value">
                {value}
            </Typography>
        </TwoLineHeadingWrapper>
    );
};
