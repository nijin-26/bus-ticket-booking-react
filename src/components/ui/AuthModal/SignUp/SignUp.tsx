import { Button, Stack, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import getValidationSchema from './validationSchema';

type TSignUpProps = {
    closeModal: () => void;
};

const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
};

const SignUp = ({ closeModal }: TSignUpProps) => {
    const { t } = useTranslation('auth');

    const handleSubmit = () => {};

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={getValidationSchema(t)}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <Stack gap={4}>
                        <Field
                            as={TextField}
                            label={t('fullName')}
                            type="text"
                            name="fullName"
                            required
                            fullWidth
                            error={errors.fullName && touched.fullName}
                            helperText={<ErrorMessage name="fullName" />}
                        />

                        <Field
                            as={TextField}
                            label={t('email')}
                            type="email"
                            name="email"
                            required
                            fullWidth
                            error={errors.email && touched.email}
                            helperText={<ErrorMessage name="email" />}
                        />

                        <Field
                            as={TextField}
                            label={t('phone')}
                            type=""
                            name="phone"
                            required
                            fullWidth
                            error={errors.phone && touched.phone}
                            helperText={<ErrorMessage name="phone" />}
                        />

                        <Stack direction={'row'} gap={2}>
                            <Field
                                as={TextField}
                                label={t('password')}
                                type="password"
                                name="password"
                                required
                                fullWidth
                                error={errors.password && touched.password}
                                helperText={<ErrorMessage name="password" />}
                            />

                            <Field
                                as={TextField}
                                label={t('confirmPassword')}
                                type="password"
                                name="confirmPassword"
                                required
                                fullWidth
                                error={
                                    errors.confirmPassword &&
                                    touched.confirmPassword
                                }
                                helperText={
                                    <ErrorMessage name="confirmPassword" />
                                }
                            />
                        </Stack>

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
                            <Button type="submit" variant="contained" fullWidth>
                                {t('signUp')}
                            </Button>
                        </Stack>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};

export default SignUp;
