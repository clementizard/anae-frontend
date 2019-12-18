import React from 'react';
import styled from 'styled-components';

export const transitionName = `article-image`;
export const appearDuration = 500;

export const Container = styled(({ height, ...props }) => <div {...props} />)`
  position: absolute;
  height: ${({height}) => height}px;
  width: 100%;
`;
export const ImageContainer = styled(({ height, ...props }) => <div {...props} />)`
  height: ${({ height }) => height}px;
  position: relative;

  &.${transitionName}-appear {
    opacity: 0.01;
  }
  &.${transitionName}-appear-active {
    opacity: 1;
    transition: opacity ${appearDuration}ms ease-out;
  }

  & > img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
`;
