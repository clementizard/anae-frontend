import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(({ activable, ...props }) => activable ? <motion.div {...props} /> : <div {...props} />)`
	width: 48px;
	height: 48px;
	cursor: pointer;
	z-index: 1;
	> a > button {
	  color: rgb(255, 255, 255);
	  background: radial-gradient(circle,rgb(0,0,0) -75%,rgba(0,0,0,0) 75%);
	}
	> button {
	  color: rgb(255, 255, 255);
	  background: radial-gradient(circle,rgb(0,0,0) -75%,rgba(0,0,0,0) 75%);
	}
`;
