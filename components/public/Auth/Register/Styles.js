import styled from 'styled-components';

export const Inner = styled.div`
	height: 100vh;
	// Title
	& > h4 {
		margin-bottom: 15px;
	}
	// Link
	& > span {
		& > div {
			margin-bottom: 30px;
		}
		& > a {
			text-decoration: none;
			color: inherit;
		}
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
			"submit"
			"recover";
	}
`;

export const LinkButton = styled.div`
  position: relative;
  cursor: pointer;
  width: fit-content;

  &::before, &::after {
  	content: ' ';
  	position: absolute;
  	bottom: -8px;
  	height: 1px;
  	width: 0;
  	transition: width 250ms ease-in;
  	background-color: rgba(0, 0, 0, 0.9);
  }
	&::before {
  	left: 0;
	}
	&::after {
  	right: 0;
	}

	&:hover {
		color: rgba(0, 0, 0, 0.9);
	}
	&:hover::before, &:hover::after {
		width: 50%;
	}
`;
