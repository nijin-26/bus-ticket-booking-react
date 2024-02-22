import axios from 'axios';
import { ISignUpProps, signUp } from '../../../../api';
import { TFunction } from 'i18next';
import { FormikHelpers } from 'formik';
import { IAuthResponseError, ISignUpForm } from '../../../../types';
import { toast } from 'react-toastify';

const signUpSubmitHandler = async (
    values: ISignUpForm,
    formikHelpers: FormikHelpers<ISignUpForm>,
    setSignInAsSelectedTab: () => void,
    t: TFunction<'auth'>
) => {
    try {
        const { confirmPassword, ...signUpProps } = values;
        await signUp(signUpProps as ISignUpProps);

        toast.success(t('signUpSuccessToastMessage'));
        formikHelpers.resetForm();
        setSignInAsSelectedTab();
    } catch (error) {
        if (axios.isAxiosError<IAuthResponseError>(error)) {
            const errorMessage = error.response?.data.message;

            if (errorMessage === 'User already exists') {
                formikHelpers.setFieldError(
                    'email',
                    t('userAlreadyExistsErrorMessage')
                );
            }
            return;
        }
        toast.error(t('signUpErrorToastMessage'));
    }
    formikHelpers.setSubmitting(false);
};

export default signUpSubmitHandler;
