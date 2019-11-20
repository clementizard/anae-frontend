import React from 'react';
import styled from 'styled-components';

export const Container = styled(({ height, ...props }) => <div {...props} />)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({ height }) => height}px;
`;
export const LogoContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 90vw;
  height: 90vw;
  max-width: 600px;
  max-height: 600px;
  transform: translate(-50%, -50%);
`;
export const Credit = styled.a`
  position: absolute;
  z-index: 1;
  left: 8px;
  bottom: 8px;
  width: auto;
  height: auto;
  text-decoration: none;
  font-size: 12px;
  color: grey;
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;
