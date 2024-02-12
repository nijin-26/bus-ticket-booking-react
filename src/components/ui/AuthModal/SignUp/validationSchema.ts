import { TFunction } from 'i18next';
import * as Yup from 'yup';

const getValidationSchema = (t: TFunction<'auth'>) =>
    Yup.object({
        fullName: Yup.string()
            .trim()
            .min(3, t('minNameMsg'))
            .max(50, t('maxNameMsg'))
            .required(t('nameRequired')),
        email: Yup.string()
            .trim()
            .email(t('invalidEmailMsg'))
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                t('invalidEmailMsg')
            )
            .required(t('emailRequired')),
        phone: Yup.string()
            .trim()
            .matches(/^[6-9]\d{9}$/, t('invalidPhone'))
            .required(t('phoneRequired')),
        password: Yup.string()
            .trim()
            .min(6, t('passwordValidationMsg'))
            .required(t('passwordRequired')),
        confirmPassword: Yup.string()
            .trim()
            .oneOf([Yup.ref('password'), ''], t('passwordMatch'))
            .required(t('confirmPasswordRequired')),
    });

export default getValidationSchema;
