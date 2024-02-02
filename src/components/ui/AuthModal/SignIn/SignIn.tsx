import { Button, Stack, TextField } from '@mui/material';

const SignIn = () => {
    return (
        <Stack gap={4}>
            <TextField label="Email" required variant="outlined" />
            <TextField label="Password" required variant="outlined" />
            <Stack direction={'row'} gap={2} justifyContent={'center'}>
                <Button variant="outlined" fullWidth>
                    Cancel
                </Button>
                <Button variant="contained" fullWidth>
                    Sign In
                </Button>
            </Stack>
        </Stack>
    );
};

export default SignIn;
