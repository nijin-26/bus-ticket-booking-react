import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Collapse, Stack, Typography } from '@mui/material';
import FullScreenLoader from '../../../FullScreenLoader/FullScreenLoader';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { PasswordInput } from '../../..';
import signInSubmitHandler from './submitHandler';
import getValidationSchema from './validationSchema';
import { ISignInForm } from '../../../../types';
import { clearSignInState } from '../../../../app/features/authSlice';

interface ISignInProps {
    closeModal: () => void;
}

const initialValues: ISignInForm = {
    email: '',
    password: '',
};

const SignIn = ({ closeModal }: ISignInProps) => {
    const { t } = useTranslation('auth');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const redirectTo = useAppSelector((state) => state.auth.signInState?.from);
    const signInInfo = useAppSelector((state) => state.auth.signInState?.info);

    const [loading, setLoading] = useState(false);
    const [credentialErrorAlert, setCredentialErrorAlert] = useState(false);

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={getValidationSchema(t)}
                onSubmit={async (values, formikHelpers) => {
                    setLoading(true);
                    await signInSubmitHandler(
                        values,
                        formikHelpers,
                        dispatch,
                        t,
                        setCredentialErrorAlert
                    );
                    setLoading(false);
                    if (redirectTo) {
                        navigate(redirectTo, { replace: true });
                        dispatch(clearSignInState());
                    }
                }}
            >
                {({ isSubmitting }) => {
                    return (
                        <Form noValidate>
                            <Stack gap={4}>
                                {signInInfo && (
                                    <Alert severity={signInInfo.status}>
                                        <Typography
                                            component="p"
                                            variant="body2"
                                        >
                                            {signInInfo.message}
                                        </Typography>
                                    </Alert>
                                )}
                                <Field
                                    fullWidth
                                    component={TextField}
                                    label={t('email')}
                                    type="email"
                                    name="email"
                                    required
                                />

                                <Field
                                    fullWidth
                                    component={PasswordInput}
                                    label={t('password')}
                                    name="password"
                                    required
                                />

                                <Collapse in={credentialErrorAlert}>
                                    <Alert severity="error">
                                        <Typography
                                            component="p"
                                            variant="body2"
                                        >
                                            {t(
                                                'invalidCredentialsErrorMessage'
                                            )}
                                        </Typography>
                                    </Alert>
                                </Collapse>

                                <Stack
                                    direction={'row'}
                                    gap={2}
                                    justifyContent={'center'}
                                >
                                    <Button
                                        onClick={closeModal}
                                        variant="outlined"
                                        fullWidth
                                        sx={{ textTransform: 'none' }}
                                    >
                                        {t('cancel')}
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        disabled={isSubmitting}
                                        sx={{ textTransform: 'none' }}
                                    >
                                        {t('signIn')}
                                    </Button>
                                </Stack>
                            </Stack>
                        </Form>
                    );
                }}
            </Formik>
            <FullScreenLoader open={loading} />
        </>
    );
};

export default SignIn;
