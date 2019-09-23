import React from 'react';

import {
  Container,
  Link,
  Label,
} from './Styles';
import {
  propTypes,
  defaultProps,
  checkPropsEquality,
} from './Props';
import { List } from './Tools';

const variants = {
  hidden: {
    opacity: 0,
    y: -20,
    pointerEvents: 'none',
  },
  visible: {
    opacity: 1,
    y: 0,
    pointerEvents: 'all',
  },
};
const DURATIONS = {
  LINK: 0.3,
};

const Links = ({ active }) => {
  return (
    <Container role="main">
      {List.map((link, index) => (
        <Link
          key={`link-${index}`}
          href={link.url}
          target="_blank" rel="noreferrer noopener"
          initial="hidden"
          animate={active ? 'visible' : 'hidden'}
          variants={variants}
          transition={{
            ease: "easeIn",
            duration: DURATIONS.LINK,
            delay: active ? ((index + 1) * DURATIONS.LINK) : 0,
          }}
        >
          <Label>
            {link.icon}
            {link.label}
          </Label>
        </Link>
      ))}
    </Container>
  );
};
Links.propTypes = propTypes;
Links.defaultProps = defaultProps;
Links.whyDidYouRender = true;

export default React.memo(Links, checkPropsEquality);
