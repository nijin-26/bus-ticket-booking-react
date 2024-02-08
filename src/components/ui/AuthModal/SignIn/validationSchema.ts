import { TFunction } from 'i18next';
import * as Yup from 'yup';

const getValidationSchema = (t: TFunction<'auth'>) =>
    Yup.object({
        email: Yup.string()
            .trim()
            .email(t('invalidEmailMsg'))
            .required(t('emailRequired')),
        password: Yup.string()
            .min(6, t('passwordValidationMsg'))
            .required(t('passwordRequired')),
    });

export default getValidationSchema;
