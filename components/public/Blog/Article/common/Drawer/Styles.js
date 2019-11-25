import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Btn = styled(({ open, ...props }) => <motion.div {...props} />)`
	position: fixed;
	right: 12px;
	top: 12px;
	width: 48px;
	height: 48px;
	cursor: pointer;
	z-index: 5;
	> button {
	  color: ${({ open }) => open ? 'rgba(0, 0, 0, 0.6)' : 'rgb(255, 255, 255)'};
	  background: ${({ open }) => open ?
			'radial-gradient(circle, rgba(0,0,0,0.5) -200%, rgba(0,0,0,0) 60%)' :
			'radial-gradient(circle,rgb(0,0,0) -75%,rgba(0,0,0,0) 75%)'};
	}
`;
export const Panel = styled(motion.div)`
	position: fixed;
	top: 0;
	width: 350px;
	height: var(--fullHeight);
	background-color: white;
	z-index: 4;
`;
export const Overlay = styled.div`
	position: fixed;
	height: 100%;
	width: 100vw;
	top: 0;
	left: 0;
	z-index: 3;
	background-color: rgba(0, 0, 0, 0.3);
`;
export const Content = styled.div`
	width: 300px;
	height: var(--fullHeight);
	position: absolute;
	left: 0;
	top: 0;
	overflow: auto;
`;
