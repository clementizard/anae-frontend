import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: absolute;
  height: calc(var(--fullHeight) / 3);
  width: 100%;
`;
export const Content = styled.div.attrs(({ position, height }) => ({
	style: {
		top: `${position}px`,
		boxShadow: position < height ?
			'0 0px 6px black' :
			'none',
	}
}))`
	position: absolute;
	height: 100%;
	width: 100vw;
	left: 0;
`;
export const Image = styled(({ url, ...props }) => <motion.div {...props} />)`
	background: ${({ url }) => `url(${url})`};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: relative;
	transform-origin: left bottom;
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
export const Title = styled.div`
	position: absolute;
	bottom: 0;
	font-size: 1.8rem;
  font-weight: 600;
  padding: 16px 24px;
	color: white;
	text-shadow: 0 3px 6px rgba(0,0,0,0.5);
`;
export const ResizeBtn = styled(motion.div)`
	width: 48px;
	height: 48px;
	cursor: pointer;
	z-index: 2;
	> button {
	  color: rgba(255, 255, 255, 0.6);
	  background: radial-gradient(circle,rgba(0,0,0,0.5) -200%,rgba(0,0,0,0) 60%);
	}
`;
export const iconContainerStyles = {
	position: 'fixed',
	right: 12,
	top: 72,
	zIndex: 2,
};
