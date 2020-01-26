import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { S1 } from 'Sizes';

export const StyledButton = styled(Button)`
	& > span > a {
		color: inherit;
		text-decoration: none;
	}
`;
export const StyledLink = styled.div`
  position: relative;
  cursor: pointer;
  width: fit-content;
  text-decoration: underline;

	@media (min-width: ${S1}px) {
		text-decoration: none;

	  &::before, &::after {
	    content: ' ';
	    position: absolute;
	    bottom: 0;
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
	}
`;
