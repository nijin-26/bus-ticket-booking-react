import { TFunction } from 'i18next';
import * as Yup from 'yup';

const getValidationSchema = (t: TFunction<'auth'>) =>
    Yup.object({
        fullName: Yup.string()
            .min(3, t('minNameMsg'))
            .max(50, t('maxNameMsg'))
            .required(t('nameRequired')),

        email: Yup.string()
            .email(t('invalidEmailMsg'))
            .required(t('emailRequired')),

        phone: Yup.string()
            .matches(/^[6-9]\d{9}$/, t('invalidPhone'))
            .required(t('phoneRequired')),

        password: Yup.string()
            .min(6, t('passwordValidationMsg'))
            .required(t('passwordRequired')),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), ''], t('passwordMatch'))
            .required(t('confirmPasswordRequired')),
    });

export default getValidationSchema;
