import * as Yup from 'yup';
import { TFunction } from 'i18next';

const getValidationSchema = (t: TFunction<'passengerDetails'>) =>
    Yup.object().shape({
        passengers: Yup.array().of(
            Yup.object().shape({
                fullName: Yup.string()
                    .required(t('fullNameRequired'))
                    .test('valid-fullName', t('fullNameLength'), (value) => {
                        if (!value) return false;
                        return value.length >= 3 && value.length <= 60;
                    }),
                age: Yup.string()
                    .required(t('ageRequired'))
                    .matches(/^\d+$/, t('AgeNumberCheck'))
                    .test('valid-age', t('AgeRangeCheck'), (value) => {
                        if (!value) return false;
                        const age = parseInt(value);
                        return age >= 1 && age <= 130;
                    }),
                gender: Yup.string().required(t('genderRequired')),
            })
        ),
    });

export default getValidationSchema;
