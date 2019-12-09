import React, { memo } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import EtsySvg from 'Public/common/etsy';
import InstagramSvg from 'Public/common/instagram';
import FacebookSvg from 'Public/common/facebook';
import {
  Container,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const Footer = () => {
  // const [footerValue, setFooterValue] = React.useState('');
  // const handleFooterValueChange = (_, newValue) => {
  //   setFooterValue(newValue);
  // };

  return (
    <Container>
      <BottomNavigation
        // value={footerValue}
        // onChange={handleFooterValueChange}
      >
        <BottomNavigationAction
          component="a"
          icon={<EtsySvg />}
          href="https://www.etsy.com/fr/shop/AnaeBoutique"
          target="_blank"
        />
        <BottomNavigationAction
          component="a"
          icon={<InstagramSvg />}
          href="https://www.instagram.com/anae.me/"
          target="_blank"
        />
        <BottomNavigationAction
          component="a"
          icon={<FacebookSvg />}
          href="https://www.facebook.com/anae.me.boutique/"
          target="_blank"
        />
      </BottomNavigation>
    </Container>
  );
};
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
Footer.whyDidYouRender = true;

export default memo(Footer);
