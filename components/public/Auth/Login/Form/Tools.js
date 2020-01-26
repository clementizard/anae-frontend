import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
	email: Yup.string()
		.email()
		.required('Email requis'),
	password: Yup.string()
		.min(6, 'Le mot de passe doit avoir au moins 6 caracteres')
		.required('Mot de passe requis'),
});
export const initialValues = {
	email: '',
	password: '',
};
