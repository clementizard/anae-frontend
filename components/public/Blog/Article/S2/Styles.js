import styled from 'styled-components';
import { S2 } from 'Sizes';

export const SectionText = styled.div`
  line-height: 29px;
  font-size: 1.5rem;
  padding: 20px 24px;
	color: rgba(0, 0, 0, 0.65);
	
	@media (min-width: ${S2}px) {
		font-size: 1.25rem;
	}
`;
