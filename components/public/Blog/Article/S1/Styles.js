import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

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
export const SectionTitle = styled(props => <Typography {...props} variant="h4" />)`
  padding: 16px 0;
`;
export const SectionText = styled.div`
	font-size: 1rem;
	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	font-weight: 400;
	line-height: 1.5;
	letter-spacing: 0.00938em;
  padding: 20px 0;
	color: rgba(0, 0, 0, 0.65);
`;
