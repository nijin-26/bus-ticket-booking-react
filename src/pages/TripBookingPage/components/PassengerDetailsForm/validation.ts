import * as Yup from 'yup';

const getValidationSchema = () =>
    Yup.object().shape({
        passengers: Yup.array().of(
            Yup.object().shape({
                fullName: Yup.string()
                    .required('Full Name is a required field')
                    .min(3, 'Minimum 3 characters')
                    .max(50, 'Maximum 50 characters'),
                age: Yup.string()
                    .required('Age is a required field')
                    .matches(/^\d+$/, 'Age must be a number')
                    .test(
                        'valid-age',
                        'Age must be between 1 and 130',
                        (value) => {
                            if (!value) return false;
                            const age = parseInt(value);
                            return age >= 1 && age <= 120;
                        }
                    ),
                gender: Yup.string().required('Gender is a required field'),
            })
        ),
    });

export default getValidationSchema;
