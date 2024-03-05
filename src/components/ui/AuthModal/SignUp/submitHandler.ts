import axios from 'axios';
import { ISignUpProps, signUp } from '../../../../api';
import { TFunction } from 'i18next';
import { FormikHelpers } from 'formik';
import {
    IAuthResponseError,
    ISignUpForm,
    TAlertStatus,
} from '../../../../types';
import { AppDispatch } from '../../../../app/store';
import { toast } from 'react-toastify';
import { setSignInState } from '../../../../app/features/authSlice';

const signUpSubmitHandler = async (
    values: ISignUpForm,
    formikHelpers: FormikHelpers<ISignUpForm>,
    setSignInAsSelectedTab: () => void,
    t: TFunction<'auth'>,
    dispatch: AppDispatch
) => {
    try {
        const { confirmPassword, ...signUpProps } = values;
        await signUp(signUpProps as ISignUpProps);

        formikHelpers.resetForm();
        toast.success(t('signUpSuccessToastMessage'));
        dispatch(
            setSignInState({
                info: {
                    message: t('signUpSuccessAlertMessage'),
                    status: TAlertStatus.success,
                },
            })
        );
        setSignInAsSelectedTab();
    } catch (error) {
        if (axios.isAxiosError<IAuthResponseError>(error)) {
            const errorMessage = error.response?.data.message;

            if (errorMessage === 'User already exists') {
                formikHelpers.setFieldError(
                    'email',
                    t('userAlreadyExistsErrorMessage')
                );
                return;
            }
        }
        toast.error(t('signUpErrorToastMessage'));
    }
    formikHelpers.setSubmitting(false);
};

export default signUpSubmitHandler;
