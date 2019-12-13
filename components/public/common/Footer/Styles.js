import styled from 'styled-components';

export const Container = styled.div`
	height: auto;
	position: relative;
	padding: 24px;
	&::before {
		content: ' ';
		position: absolute;
		width: 33%;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
		height: 1px;
		background-color: rgba(0, 0, 0, 0.55);
	}
`;

export const BottomText = styled.div`
	margin-top: 24px;
	text-align: center;
`;
