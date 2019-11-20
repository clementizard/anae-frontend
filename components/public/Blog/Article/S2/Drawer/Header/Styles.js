import styled from 'styled-components';

export const Container = styled.div`
	height: calc(24px + 48px);
	position: relative;
	display: block;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
	
	& > svg {
		position: absolute;
		top: -30px;
		height: 140px;
		> path {
			fill: black !important;
		}
	}
`;
