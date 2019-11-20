import React, { forwardRef } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  height: var(--fullHeight);
  width: 100vw;
  position: relative;
`;
export const Sections = styled(forwardRef(({ marginTop, ...props }, innerRef) => <div {...props} ref={innerRef} />))`
  height: calc((var(--fullHeight) - ${({ marginTop }) => marginTop}px) - (16px * 2)); // screen - image size - padding
  width: auto;
  position: absolute;
  top: ${({ marginTop }) => marginTop}px;
  overflow: auto;
  padding: 16px 24px;
  background-color: white;
  box-shadow: inset 0px 6px 6px -3px rgba(0, 0, 0, 0.5);
`;
export const SectionTitle = styled.div`
	font-size: 1.8rem;
  font-weight: 600;
  padding: 16px 0;
`;
export const SectionText = styled.div`
  line-height: 25px;
  font-size: 1.1rem;
  padding: 20px 0;
`;
export const ReturnBtn = styled.div`
	position: fixed;
	top: 12px;
	left: 12px;
	width: 48px;
	height: 48px;
	cursor: pointer;
	z-index: 1;
	> a >button {
	  color: rgba(255, 255, 255, 0.6);
	  background: radial-gradient(circle,rgba(0,0,0,0.5) -200%,rgba(0,0,0,0) 60%);
	}
`;
