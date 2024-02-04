import { Button, Stack, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';

type TSignInProps = {
    closeModal: () => void;
};

const SignIn = ({ closeModal }: TSignInProps) => {
    const { t } = useTranslation('auth');

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = () => {
        console.log('Sign in submit');
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {(props) => {
                return (
                    <Form>
                        <Stack gap={4}>
                            <Field
                                as={TextField}
                                label={t('email')}
                                type="email"
                                name="email"
                                required
                                fullWidth
                                error={
                                    props.errors.email && props.touched.email
                                }
                                helperText={<ErrorMessage name="email" />}
                            />

                            <Field
                                as={TextField}
                                label={t('password')}
                                type="password"
                                name="password"
                                required
                                fullWidth
                                error={
                                    props.errors.password &&
                                    props.touched.password
                                }
                                helperText={<ErrorMessage name="password" />}
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
