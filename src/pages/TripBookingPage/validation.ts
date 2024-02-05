import * as Yup from 'yup';

const getValidationSchema = () =>
    Yup.object({
        fullName: Yup.string()
            .trim()
            .required('Name is required')
            .min(2, 'Name must be at least 3 characters')
            .max(50, 'Name cannot exceed 50 characters'),
        phone: Yup.string()
            .required('Age is required')
            .matches(/^[0-9]+$/, 'Age must only contain digits'),
    });

export default getValidationSchema;
