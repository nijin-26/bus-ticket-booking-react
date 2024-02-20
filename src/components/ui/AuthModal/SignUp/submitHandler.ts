import axios from 'axios';
import {
    setCredentials,
    hideAuthModal,
} from '../../../../app/features/authSlice';
import { ISignUpProps, apiRoutes, signIn, signUp } from '../../../../api';
import { AppDispatch } from '../../../../app/store';
import { TFunction } from 'i18next';
import { FormikHelpers } from 'formik';
import { IAuthResponseError, ISignUpForm } from '../../../../types';

const signUpSubmitHandler = async (
    values: ISignUpForm,
    formikHelpers: FormikHelpers<ISignUpForm>,
    dispatch: AppDispatch,
    t: TFunction<'auth'>
) => {
    try {
        const { confirmPassword, ...signUpProps } = values;
        const { email, password } = signUpProps;

        await signUp(signUpProps as ISignUpProps);
        const userData = await signIn({ email, password });

        dispatch(setCredentials(userData));
        formikHelpers.resetForm();
        dispatch(hideAuthModal());
    } catch (error) {
        if (axios.isAxiosError<IAuthResponseError>(error)) {
            const errorMessage = error.response?.data.message;

            if (error.config?.url === apiRoutes.signUp) {
                if (errorMessage === 'User already exists') {
                    formikHelpers.setFieldError(
                        'email',
                        t('userAlreadyExistsErrorMessage')
                    );
                }
                console.error('error during signUp');
            } else if (error.config?.url === apiRoutes.signIn) {
                console.error('error during signIn after signUp');
            } else {
                console.error(error.response?.data);
            }
        } else {
            console.error(error);
        }
    }
    formikHelpers.setSubmitting(false);
};

export default signUpSubmitHandler;
