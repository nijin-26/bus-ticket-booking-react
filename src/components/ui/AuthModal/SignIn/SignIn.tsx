import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { Alert, Button, Stack, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import signInSubmitHandler from './submitHandler';
import getValidationSchema from './validationSchema';
import { ISignInForm } from '../../../../types';
import FullScreenLoader from '../../../FullScreenLoader/FullScreenLoader';
import { useNavigate } from 'react-router-dom';
import { clearRedirectState } from '../../../../app/features/authSlice';

type TSignInProps = {
    closeModal: () => void;
};

const initialValues: ISignInForm = {
    email: 'johng@gmail.com',
    password: 'John@123',
};

const SignIn = ({ closeModal }: TSignInProps) => {
    const { t } = useTranslation('auth');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const redirectState = useAppSelector((state) => state.auth.redirectState);

    const [loading, setLoading] = useState(false);

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
                        t
                    );
                    setLoading(false);
                    if (redirectState) {
                        navigate(redirectState.from, { replace: true });
                        dispatch(clearRedirectState());
                    }
                }}
            >
                {({ isSubmitting }) => {
                    return (
                        <Form noValidate>
                            <Stack gap={4}>
                                {redirectState && (
                                    <Alert severity="error">
                                        <Typography
                                            component="p"
                                            variant="body2"
                                        >
                                            {redirectState.message}
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
                                    component={TextField}
                                    label={t('password')}
                                    type="password"
                                    name="password"
                                    required
                                />
                                <Stack
                                    direction={'row'}
                                    gap={2}
                                    justifyContent={'center'}
                                >
                                    <Button
                                        onClick={() => {
                                            dispatch(clearRedirectState());
                                            closeModal();
                                        }}
                                        variant="outlined"
                                        fullWidth
                                    >
                                        {t('cancel')}
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        disabled={isSubmitting}
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
