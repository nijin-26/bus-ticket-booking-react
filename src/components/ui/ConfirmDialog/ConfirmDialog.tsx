import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';

interface IConfirmDialogProps {
    title?: string;
    agreeText: string;
    disagreeText?: string;
    handleAgreeFunction?: () => void;
    handleDisagreeFunction?: () => void;
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

export default function ConfirmDialog({
    handleAgreeFunction = () => {},
    handleDisagreeFunction = () => {},
    ...props
}: IConfirmDialogProps) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Dialog
                fullScreen={fullScreen}
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {props.title}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={props.handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <DialogContentText>{props.children}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            handleAgreeFunction();
                            props.handleClose();
                        }}
                        autoFocus
                    >
                        {props.agreeText}
                    </Button>
                    {props.disagreeText && (
                        <Button
                            autoFocus
                            onClick={() => {
                                handleDisagreeFunction();
                                props.handleClose();
                            }}
                        >
                            {props.disagreeText}
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        </>
    );
}
