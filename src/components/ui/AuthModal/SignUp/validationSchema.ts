import * as Yup from 'yup';

const validationSchema = Yup.object({
    fullName: Yup.string()
        .min(3, 'Full Name must be at least 3 characters.')
        .max(50, 'Full Name must be at most 50 characters.')
        .required('Full Name is required'),

    email: Yup.string()
        .email('Invalid email address.')
        .required('Email is required.'),

    phone: Yup.string()
        .matches(/^[6-9]\d{9}$/, 'Invalid phone number.')
        .required('Phone number is required.'),

    password: Yup.string()
        .min(6, 'Password must be at least 6 characters.')
        .required('Password is required.'),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match.')
        .required('Confirm Password is required.'),
});

export default validationSchema;
