import styled from 'styled-components';
import { S1 } from 'Sizes';

export const Container = styled.div`
	// display grid...
`;

export const Inner = styled.div`
	@media(min-width: ${S1}px) {
		margin: 72px auto 0;
		max-width: 1000px;
		min-height: calc(var(--fullHeight) - 72px);
	}
`;
