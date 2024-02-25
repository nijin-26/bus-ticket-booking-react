import { TFunction } from 'i18next';
import * as Yup from 'yup';

const getValidationSchema = (t: TFunction<'auth'>) =>
    Yup.object({
        email: Yup.string()
            .trim()
            .email(t('invalidEmailMsg'))
            .required(t('emailRequired'))
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                t('invalidEmailMsg')
            ),
        password: Yup.string().trim().required(t('passwordRequired')),
    });

export default getValidationSchema;
