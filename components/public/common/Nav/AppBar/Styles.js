import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
	position: fixed;
	top: 0;
	height: 72px;
	width: 100vw;
	background-color: white;
	z-index: 2;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.55);
	display: flex;
`;
export const LogoContainer = styled.div`
  height: 72px;
  width: 200px;
  > svg {
    transform: translate(0, -25%);
    > path {
      fill: black !important;
    }
  }
`;
export const Links = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
	padding-right: 24px;
`;
export const ItemContainer = styled(forwardRef(({ selected, ...props }, innerRef) => <motion.div {...props} ref={innerRef} />))`
	position: relative;
  margin: 0 16px;
  color: rgba(0, 0, 0, 0.65);
  ${({ selected }) => selected && `
    color: #000;
    &::before {
      content: ' ';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -8px;
      background-color: #000;
    }
  `}
`;
export const LinkButton = styled.div`
  position: relative;
  cursor: pointer;

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
