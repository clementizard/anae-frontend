import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const transitionName = `home-background`;
export const appearDuration = 800;

export const ImageContainer = styled(({ height, ...props }) => <div {...props} />)`
  height: ${({ height }) => height}px;
  width: 100vw;

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
    filter: blur(2px) grayscale(1);
  }
`;
export const BackgroundColored = styled(({ src, windowLargerThanImage, height, ...props }) => <motion.div {...props} />)`
  position: fixed;
  top: 50%;
  left: 50%;
  overflow: hidden;
  background-image: url(${({ src }) => src});
  background-position: center;
  border-radius: 50%;
  background-size: ${({windowLargerThanImage, height}) => windowLargerThanImage ? '100vw auto' : `auto ${height}px`};
  filter: blur(2px);
  z-index: 1;
`;
