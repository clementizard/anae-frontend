import styled from 'styled-components';

export const Inner = styled.div`
	height: 100vh;
	// Title
	& > h4 {
		margin-bottom: 15px;
	}
	// Link
	& > h6 {
		margin-bottom: 30px;
	}
	// Form
	& > form {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		grid-template-areas: 
			"email"
			"password"
			"error"
			"submit"
			"recover";
	}
`;
