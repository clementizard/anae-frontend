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
        <a href="https://www.etsy.com/fr/shop/AnaeBoutique" target="_blank">
          <BottomNavigationAction
            label="Etsy"
            value="etsy"
            icon={<EtsySvg />}
          />
        </a>
        <a href="https://www.instagram.com/anae.me/" target="_blank">
          <BottomNavigationAction
            label="Instagram"
            value="instagram"
            icon={<InstagramSvg />}
          />
        </a>
        <a href="https://www.facebook.com/anae.me.boutique/" target="_blank">
          <BottomNavigationAction
            label="Facebook"
            value="facebook"
            icon={<FacebookSvg />}
          />
        </a>
      </BottomNavigation>
    </Container>
  );
};
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
Footer.whyDidYouRender = true;

export default memo(Footer);
