import React from 'react';
import styled from 'styled-components';

export const transitionName = `article-image`;
export const appearDuration = 500;

export const Container = styled(({ height, ...props }) => <div {...props} />)`
  position: absolute;
  height: ${({height}) => height}px;
  width: 100%;
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
