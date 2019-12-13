import React from 'react';

import { Media } from 'Styles/common/Media';
import S2Component from './S2';
import S3Component from './S3';
import {
  Container,
  BottomText,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const Footer = () => {
  return (
    <Container>
      <Media lessThan="s3"><S2Component /></Media>
      <Media greaterThanOrEqual="s3"><S3Component /></Media>
      <BottomText>
        © 2019 Anae
      </BottomText>
    </Container>
  );
};
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
Footer.whyDidYouRender = true;

export default Footer;

