import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { S1, S2 } from 'Sizes';

export const Container = styled.div`
	max-width: 1000px;
	min-height: var(--fullHeight);
	display: grid;
	grid-gap: 32px;
	padding: 8px;
	grid-template-columns: repeat(1, 1fr);
	grid-auto-rows: min-content;
	@media(min-width: ${S1}px) {
		padding: 32px;
		grid-template-columns: repeat(2, 1fr);
	}
	@media(min-width: ${S2}px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
export const StyledCard = styled(Card)`
	position: relative;
  &:after {
  	content: ' ';
  	position: absolute;
  	width: 100%;
  	height: 25%;
  	bottom: 0;
  	left: 0;
  	background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.3));
  }
`;
export const StyledCardMedia = styled(CardMedia)`
	// Golden rectangle: width 1 height 0.618
	padding-top: 61.8%;
`;
