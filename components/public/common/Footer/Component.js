import React, { memo } from 'react';

import { Media } from 'Styles/common/Media';
import S1Component from './S1';
import S2Component from './S2';
import {
  Container,
  BottomText,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const Footer = () => {
  return (
    <Container>
      <Media at="s1"><S1Component /></Media>
      <Media greaterThanOrEqual="s2"><S2Component /></Media>
      <BottomText>
        © 2020 Anae
      </BottomText>
    </Container>
  );
};
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
Footer.whyDidYouRender = true;

export default memo(Footer);

