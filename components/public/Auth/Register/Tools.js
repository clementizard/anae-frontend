import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
	firstname: Yup.string()
		.min(3, 'Votre prenom doit contenir entre 3 et 20 lettres')
		.max(20, 'Votre prenom doit contenir entre 3 et 20 lettres'),
	lastname: Yup.string()
		.min(3, 'Votre nom doit contenir entre 3 et 20 lettres')
		.max(20, 'Votre nom doit contenir entre 3 et 20 lettres'),
	email: Yup.string()
		.email()
		.required('Email requis'),
	password: Yup.string()
		.min(6, 'Le mot de passe doit avoir au moins 6 caracteres')
		.required('Mot de passe requis'),
	legal: Yup.bool().required('Vous devez accepter les termes et conditions d\'utilisation pour continuer'),
	newsletter: Yup.bool(),
	// .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])/,
	//   { message: 'Le mot de passe doit avoir au moins une lettre minuscule, majuscule, un chiffre et un caractere special' })
});
export const initialValues = {
	firstname: '',
	lastname: '',
	email: '',
	password: '',
	legal: false,
	newsletter: false,
};
