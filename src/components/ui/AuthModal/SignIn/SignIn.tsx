import { Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field } from 'formik';
import getValidationSchema from './validationSchema';
import { TextField } from 'formik-mui';
import { signIn } from '../../../../api';
import {
    hideAuthModal,
    setCredentials,
} from '../../../../app/features/authSlice';
import { useAppDispatch } from '../../../../app/hooks';

type TSignInProps = {
    closeModal: () => void;
};

const initialValues = {
    email: 'johng@gmail.com',
    password: 'John@123',
};

const SignIn = ({ closeModal }: TSignInProps) => {
    const { t } = useTranslation('auth');
    const dispatch = useAppDispatch();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={getValidationSchema(t)}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    const userData = await signIn(values);
                    dispatch(setCredentials(userData));
                } catch (error) {
                    console.log(error);
                }

                setSubmitting(false);
                dispatch(hideAuthModal());
            }}
        >
            {() => {
                return (
                    <Form noValidate>
                        <Stack gap={4}>
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
                                >
                                    {t('signIn')}
                                </Button>
                            </Stack>
                        </Stack>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default SignIn;
