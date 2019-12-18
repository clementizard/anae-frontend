import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import { S2 } from 'Styles/common/Sizes';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 26px;
	padding: 0 26px;
	font-size: 1.2rem;
	@media (min-width: ${S2}px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
export const Section = styled.div`

`;
export const Title = styled(Typography)`
	font-weight: 800 !important;
	margin-bottom: 12px !important;
`;
export const Details = styled.div`
	padding-left: 4px;
	color: rgba(0, 0, 0, 0.6);
`;
export const StyledA = styled.a`
	display: block;
	color: inherit;
	text-decoration: none;
	position: relative;
	cursor: pointer;
	padding: 5px 0;
	width: fit-content;

  &::before, &::after {
  	content: ' ';
  	position: absolute;
  	bottom: 1px;
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
