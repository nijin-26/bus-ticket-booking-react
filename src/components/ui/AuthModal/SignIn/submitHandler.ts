import axios from 'axios';
import { signIn } from '../../../../api';
import {
    setCredentials,
    hideAuthModal,
} from '../../../../app/features/authSlice';
import { TFunction } from 'i18next';
import { FormikHelpers } from 'formik';
import { IAuthResponseError, ISignInForm } from '../../../../types';
import { AppDispatch } from '../../../../app/store';
import { ISignInRequest } from '../../../../api/types/signIn';

const signInSubmitHandler = async (
    values: ISignInForm,
    formikHelpers: FormikHelpers<ISignInForm>,
    dispatch: AppDispatch,
    t: TFunction<'auth'>
) => {
    try {
        const userData = await signIn(values as ISignInRequest);
        dispatch(setCredentials(userData));
        formikHelpers.resetForm();
        dispatch(hideAuthModal());
    } catch (error) {
        if (
            axios.isAxiosError<IAuthResponseError>(error) &&
            error.response?.status === 401
        ) {
            const errorMessage = error.response.data.message;
            if (errorMessage === 'Invalid credentials.') {
                formikHelpers.setFieldError(
                    'password',
                    t('invalidPasswordErrorMessage')
                );
            } else if (errorMessage === 'User not found.') {
                formikHelpers.setFieldError(
                    'email',
                    t('userNotFoundErrorMessage')
                );
            } else {
                console.log(error.response.data);
            }
        } else {
            console.log(error);
        }
    }
    formikHelpers.setSubmitting(false);
};

export default signInSubmitHandler;
