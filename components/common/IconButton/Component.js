import React, { useState, memo } from 'react';
import MuiIconButton from '@material-ui/core/IconButton';

import { Container } from './Styles';
import { propTypes, defaultProps } from './Props';

const IconButton = ({
  containerStyles,
  href,
  ariaLabel,
  Icon,
  activable,
  defaultActive,
  animProps: {
    icons: { active: ActiveIcon, inactive: InactiveIcon },
    labels: { active: activeLabel, inactive: inactiveLabel },
    others,
  },
  onClick,
}) => {
  const [active, setActive] = useState(Boolean(defaultActive));

  const handleClick = () => {
    if (onClick) onClick(active);
    if (activable) setActive(!active);
  };

  const MuiRender = () => (
    <MuiIconButton aria-label={ariaLabel} onClick={handleClick}>
      {activable ? (active ? <ActiveIcon/> : <InactiveIcon />) : <Icon />}
    </MuiIconButton>
  );
  
  const animate = activable ? (active ? activeLabel : inactiveLabel) : undefined;
  
  return (
    <Container
      style={containerStyles}
      activable={activable}
      animate={animate}
      {...others}
    >
      {href ?
        <a href={href}><MuiRender /></a>
        : <MuiRender />
      }
    </Container>
  );
};
IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;
IconButton.whyDidYouRender = true;

export default memo(IconButton);

