import { Button, Stack, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SignIn = () => {
    const { t } = useTranslation('auth');
    return (
        <Stack gap={4}>
            <TextField label={t('email')} required variant="outlined" />
            <TextField label={t('password')} required variant="outlined" />
            <Stack direction={'row'} gap={2} justifyContent={'center'}>
                <Button variant="outlined" fullWidth>
                    {t('cancel')}
                </Button>
                <Button variant="contained" fullWidth>
                    {t('signIn')}
                </Button>
            </Stack>
        </Stack>
    );
};

export default SignIn;
