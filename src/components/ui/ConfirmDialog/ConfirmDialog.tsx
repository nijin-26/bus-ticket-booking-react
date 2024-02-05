import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

interface ConfirmDialogProps {
    title?: string;
    agreeText?: string;
    disagreeText?: string;
    ButtonText: string;
    handleAgreeFunction?: () => void;
    handleDisagreeFunction?: () => void;
    children: React.ReactNode;
}

export default function ConfirmDialog({
    agreeText = 'Yes',
    disagreeText = 'No',
    handleAgreeFunction = () => {},
    handleDisagreeFunction = () => {},
    ...props
}: ConfirmDialogProps) {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" onClick={handleClickOpen}>
                {props.ButtonText}
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {props.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>{props.children}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            handleAgreeFunction();
                            handleClose();
                        }}
                        autoFocus
                    >
                        {agreeText}
                    </Button>
                    <Button
                        autoFocus
                        onClick={() => {
                            handleDisagreeFunction();
                            handleClose();
                        }}
                    >
                        {disagreeText}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
