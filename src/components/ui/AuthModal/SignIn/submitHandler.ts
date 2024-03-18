import axios from 'axios';
import { signIn } from '../../../../api';
import {
    setUser,
    hideAuthModal,
    setIntervalId,
} from '../../../../app/features/authSlice';
import { TFunction } from 'i18next';
import { Dispatch, SetStateAction } from 'react';
import { FormikHelpers } from 'formik';
import { IAuthResponseError, ISignInForm } from '../../../../types';
import { AppDispatch } from '../../../../app/store';
import { toast } from 'react-toastify';
import { setRefreshInterval, storage } from '../../../../utils';

const signInSubmitHandler = async (
    values: ISignInForm,
    formikHelpers: FormikHelpers<ISignInForm>,
    dispatch: AppDispatch,
    t: TFunction<'auth'>,
    setCredentialErrorAlert: Dispatch<SetStateAction<boolean>>
) => {
    try {
        setCredentialErrorAlert(false);
        const { accessToken, refreshToken, ...userData } = await signIn(values);

        storage.setItem('accessToken', accessToken);
        storage.setItem('refreshToken', refreshToken);
        storage.setItem('userData', userData);
        dispatch(setUser(userData));

        const intervalId = setRefreshInterval(accessToken);
        if (intervalId) {
            dispatch(setIntervalId({ id: intervalId }));
        }

        formikHelpers.resetForm();
        dispatch(hideAuthModal());
        toast.success(t('signInSuccessToastMessage'));
    } catch (error) {
        if (
            axios.isAxiosError<IAuthResponseError>(error) &&
            error.response?.status === 401
        ) {
            const errorMessage = error.response.data.message;
            if (
                errorMessage === 'Invalid credentials.' ||
                errorMessage === 'User not found.'
            ) {
                setCredentialErrorAlert(true);
                return;
            }
        }
        toast.error(t('signInErrorToastMessage'));
    }
    formikHelpers.setSubmitting(false);
};

export default signInSubmitHandler;
