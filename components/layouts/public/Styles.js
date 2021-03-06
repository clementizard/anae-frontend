import styled from 'styled-components';
import { S1 } from 'Sizes';

export const Inner = styled.div`
	min-height: calc(var(--fullHeight) - 72px);
	@media(min-width: ${S1}px) {
		margin: 72px auto 0;
		max-width: 1000px;
	}
`;
