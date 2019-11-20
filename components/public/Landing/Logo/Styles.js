import React from 'react';
import styled from 'styled-components';

import { Wrapper, Circle } from './Parts';
// import Cursor from 'Public/common/Cursor.svg';

export const Container = styled(({ active, ...props }) => <Wrapper {...props} />)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: ${({ active }) => active ? '0 0 50px white' : 'none'};
  transition: box-shadow 300ms ease-in;
  position: absolute;
  z-index: 0;
`;
export const StyledCircle = styled(Circle)`
  //cursor: url(${Cursor}), auto;
  z-index: 1;
`;
