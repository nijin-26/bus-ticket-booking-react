import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IconButton } from '@mui/material';
import { useTheme } from '@emotion/react';

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

export const ConfirmDialog = ({
    handleAgreeFunction = () => {},
    handleDisagreeFunction = () => {},
    ...props
}: IConfirmDialogProps) => {
    const theme = useTheme();
    const isExtraSmallScreen = useMediaQuery(
        `(max-width:${theme.breakpointValues.extraSmall})`
    );

    return (
        <>
            <Dialog
                fullScreen={isExtraSmallScreen}
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle
                    id="responsive-dialog-title"
                    sx={{ paddingRight: '4.8rem' }}
                >
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
                <DialogActions sx={{ gap: '1rem' }}>
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
                    <Button
                        onClick={() => {
                            handleAgreeFunction();
                            props.handleClose();
                        }}
                        autoFocus
                        variant="contained"
                    >
                        {props.agreeText}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
