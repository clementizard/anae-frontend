import React, { memo } from 'react';

import {
  LettersAnimated,
  Wrapper,
} from 'Components/public/Landing/Logo/Parts';
import { Container } from './Styles';
import { propTypes, defaultProps } from './Props';

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Header = ({ open }) => {
  return (
    <Container>
      <Wrapper>
        {LettersAnimated.map((Letter, index) => (
          <Letter
            key={`letter-animated-${index}`}
            variants={letterVariants}
            transition={{ delay: !open ? 0 : 0.3 * index }}
          />
        ))}
      </Wrapper>
    </Container>
  );
};
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.whyDidYouRender = true;

export default memo(Header);
