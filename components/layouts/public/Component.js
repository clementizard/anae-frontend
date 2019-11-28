import React, { memo, useMemo, useEffect, useState } from 'react';

import { Media } from 'Styles/common/Media';
import Nav from 'Components/public/common/Nav';
import { Inner } from './Styles';
import { propTypes, defaultProps } from './Props';
import IconButton from 'Components/common/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

const Public = ({ children }) => {
  return (
    <>
      <Media at="s1">
        <IconButton
          href="/blog"
          ariaLabel="back"
          Icon={ArrowBack}
          containerStyles={{
            position: 'fixed',
            top: 12,
            left: 12,
          }}
        />
          {children}
      </Media>
      <Media at="s2">
        <Nav />
        <Inner>
          {children}
        </Inner>
      </Media>
    </>
  );
};
Public.propTypes = propTypes;
Public.defaultProps = defaultProps;
Public.whyDidYouRender = true;

export default Public;
