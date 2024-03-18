import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../../app/hooks';
import { Alert, Button, Stack, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { ConfirmDialog, FullScreenLoader, PasswordInput } from '../../..';
import getValidationSchema from './validationSchema';
import signUpSubmitHandler from './submitHandler';
import { ISignUpForm } from '../../../../types';
import { useState } from 'react';

interface ISignUpProps {
    closeModal: () => void;
    setSignInAsSelectedTab: () => void;
}

const initialValues: ISignUpForm = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
};

const SignUp = ({ closeModal, setSignInAsSelectedTab }: ISignUpProps) => {
    const { t } = useTranslation(['auth', 'signUpDiscardChangesModal']);
    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(false);
    const [isCloseConfirmModalDisplayed, setIsCloseConfirmModalDisplayed] =
        useState<boolean>(false);

    const signUpCloseHandler = () => {
        closeModal();
        setSignInAsSelectedTab();
    };

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
                        t,
                        dispatch
                    );
                    setLoading(false);
                }}
            >
                {({ isSubmitting, dirty }) => (
                    <Form noValidate>
                        <Stack gap={4}>
                            <Field
                                fullWidth
                                component={TextField}
                                label={t('auth:fullName')}
                                name="fullName"
                                required
                            />

                            <Field
                                fullWidth
                                component={TextField}
                                label={t('auth:email')}
                                type="email"
                                name="email"
                                required
                            />

                            <Field
                                fullWidth
                                component={TextField}
                                label={t('auth:phone')}
                                name="phone"
                                required
                            />

                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                gap={{ xs: 4, sm: 2 }}
                            >
                                <Field
                                    fullWidth
                                    component={PasswordInput}
                                    label={t('auth:password')}
                                    name="password"
                                    required
                                />

                                <Field
                                    fullWidth
                                    component={PasswordInput}
                                    label={t('auth:confirmPassword')}
                                    name="confirmPassword"
                                    required
                                />
                            </Stack>

                            <Alert severity="info">
                                <Typography component="p" variant="body2">
                                    {t('auth:passwordRequirements')}
                                </Typography>
                            </Alert>

                            <Stack
                                direction={'row'}
                                gap={2}
                                justifyContent={'center'}
                            >
                                <Button
                                    onClick={() => {
                                        if (dirty) {
                                            setIsCloseConfirmModalDisplayed(
                                                true
                                            );
                                        } else {
                                            signUpCloseHandler();
                                        }
                                    }}
                                    variant="outlined"
                                    fullWidth
                                    sx={{ textTransform: 'none' }}
                                >
                                    {t('auth:cancel')}
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    disabled={isSubmitting}
                                    sx={{ textTransform: 'none' }}
                                >
                                    {t('auth:signUp')}
                                </Button>
                            </Stack>
                        </Stack>
                    </Form>
                )}
            </Formik>
            <FullScreenLoader open={loading} />
            <ConfirmDialog
                title={t('signUpDiscardChangesModal:title')}
                open={isCloseConfirmModalDisplayed}
                handleClose={() => {
                    setIsCloseConfirmModalDisplayed(false);
                }}
                agreeText={t('signUpDiscardChangesModal:confirmText')}
                disagreeText={t('signUpDiscardChangesModal:cancelText')}
                handleAgreeFunction={signUpCloseHandler}
            >
                {t('signUpDiscardChangesModal:message')}
            </ConfirmDialog>
        </>
    );
};

export default SignUp;
