import React, { forwardRef } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  height: var(--fullHeight);
  width: 100vw;
  position: relative;
`;
export const Sections = styled(forwardRef((props, innerRef) => <div {...props} ref={innerRef} />))`
  height: calc((var(--fullHeight) - (var(--fullHeight) / 3)) - (16px * 2)); // screen - image size - padding
  width: auto;
  position: absolute;
  top: calc(var(--fullHeight) / 3);
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
	color: rgba(0, 0, 0, 0.65);
`;
