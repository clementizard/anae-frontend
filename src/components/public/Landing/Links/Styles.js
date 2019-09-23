import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 0 0 34%;
	@media (max-width: 500px) {
		padding: 0 0 0 28%;
	}
`;
export const Link = styled(motion.a)`
  font-size: 1.9rem;
  color: white;
  text-decoration: none;
  position: relative;
  @media (max-width: 500px) {
  	font-size: 1.5rem;
  }
`;
export const Label = styled.div`
  opacity: 0.7;
  transition: opacity 250ms ease-in;
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  & > svg {
	  width: 42px;
    margin-right: 16px;
		@media (max-width: 500px) {
			width: 27px;
		}
  }
 
  &::before, &::after {
  	content: ' ';
  	position: absolute;
  	bottom: -7px;
  	height: 1.5px;
  	width: 0;
  	transition: width 250ms ease-in;
  	background-color: white;
  }
	&::before {
  	left: 0;
	}
	&::after {
  	right: 0;
	}

	&:hover {
		opacity: 1;
	}
	&:hover::before, &:hover::after {
		width: 50%;
	}

`;
