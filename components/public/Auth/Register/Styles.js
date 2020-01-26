import styled from 'styled-components';

import { S1 } from 'Sizes';

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
			"firstname"
			"lastname"
			"email"
			"password"
			"legal"
			"newsletter"
			"error"
			"submit";

		@media (min-width: ${S1}px) {
			grid-template-columns: 1fr 1fr;
			grid-column-gap: 24px;
			grid-template-areas: 
				"firstname lastname"
				"email email"
				"password password"
				"legal legal"
				"newsletter newsletter"
				"error error"
				"submit submit";
		}
	}
`;
