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
    transform: translate(0, -33px);
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
export const ItemContainer = styled(motion.div)`
  margin: 0 16px;
`;
export const LinkButton = styled.div`
`;
