import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface IFullScreenLoaderProps {
    open: boolean;
}
export const FullScreenLoader = ({ open }: IFullScreenLoaderProps) => {
    return (
        <Backdrop
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};
