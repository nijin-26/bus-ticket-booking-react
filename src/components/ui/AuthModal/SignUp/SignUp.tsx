import { useTranslation } from 'react-i18next';
import { Alert, Button, Stack, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { PasswordInput } from '../../..';
import getValidationSchema from './validationSchema';
import signUpSubmitHandler from './submitHandler';
import { ISignUpForm } from '../../../../types';
import { useState } from 'react';
import FullScreenLoader from '../../../FullScreenLoader/FullScreenLoader';

type TSignUpProps = {
    closeModal: () => void;
    setSignInAsSelectedTab: () => void;
};

const initialValues: ISignUpForm = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
};

const SignUp = ({ closeModal, setSignInAsSelectedTab }: TSignUpProps) => {
    const { t } = useTranslation('auth');
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={getValidationSchema(t)}
                onSubmit={async (values, formikHelpers) => {
                    setLoading(true);
                    await signUpSubmitHandler(
                        values,
                        formikHelpers,
                        setSignInAsSelectedTab,
                        t
                    );
                    setLoading(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form noValidate>
                        <Stack gap={4}>
                            <Field
                                fullWidth
                                component={TextField}
                                label={t('fullName')}
                                name="fullName"
                                required
                            />

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
                                label={t('phone')}
                                name="phone"
                                required
                            />

                            <Stack direction={'row'} gap={2}>
                                <Field
                                    fullWidth
                                    component={PasswordInput}
                                    label={t('password')}
                                    name="password"
                                    required
                                />

                                <Field
                                    fullWidth
                                    component={PasswordInput}
                                    label={t('confirmPassword')}
                                    name="confirmPassword"
                                    required
                                />
                            </Stack>

                            <Alert severity="info">
                                <Typography component="p" variant="body2">
                                    {t('passwordRequirements')}
                                </Typography>
                            </Alert>

                            <Stack
                                direction={'row'}
                                gap={2}
                                justifyContent={'center'}
                            >
                                <Button
                                    onClick={closeModal}
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
                                    {t('signUp')}
                                </Button>
                            </Stack>
                        </Stack>
                    </Form>
                )}
            </Formik>
            <FullScreenLoader open={loading} />
        </>
    );
};

export default SignUp;
