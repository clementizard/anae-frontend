import React, { useState, useEffect } from 'react';

import {
  LettersAnimated,
  PointsAnimated,
  LeafsAnimated,
} from './Parts';
import { Container, StyledCircle } from './Styles';
import {
  propTypes,
  defaultProps,
  checkPropsEquality,
} from './Props';

const circleVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};
const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const DELAYS = {
  CIRCLE: 0.9,
};
const DURATIONS = {
  CIRCLE: 2,
  LETTER: 0.5,
  LEAF: 0.3,
  POINT: 0.3,
};

const Logo = ({ active, onHoverCircle, onHoverSvg, onTapCircle }) => {
  const [beenHovering, setBeenHovering] = useState(active);
  const [circleAnimComplete, setCircleAnimComplete] = useState(false);
  const TIME_ANIM_CIRCLE = DELAYS.CIRCLE + DURATIONS.CIRCLE;
  const TIME_ANIM_LETTERS = TIME_ANIM_CIRCLE + (4 * DURATIONS.LETTER);
  const TIME_ANIM_LEAFS = TIME_ANIM_LETTERS + (4 * DURATIONS.LEAF);

  useEffect(() => {
    if (active && !beenHovering) setBeenHovering(true);
  }, [active]);
  const handleCircleAnimComplete = () => setCircleAnimComplete(true);

  return (
    <Container
      active={circleAnimComplete && active}
      onMouseEnter={onHoverSvg(true)}
      onMouseLeave={onHoverSvg(false)}
    >
      <StyledCircle
        initial="hidden"
        animate="visible"
        variants={circleVariants}
        transition={{ ease: "easeOut", duration: DURATIONS.CIRCLE, delay: DELAYS.CIRCLE }}
        onAnimationComplete={handleCircleAnimComplete}
        onHoverStart={onHoverCircle(true)}
        onHoverEnd={onHoverCircle(false)}
        onTap={onTapCircle}
      />
      {LettersAnimated.map((Letter, index) => (
        <Letter
          key={`letter-animated-${index}`}
          initial="hidden"
          animate={active ? 'hidden' : 'visible'}
          variants={letterVariants}
          transition={{
            ease: "easeIn",
            duration: active || beenHovering ? 0.25 : DURATIONS.LETTER,
            delay: active ? 0 : beenHovering ? 0.3 : (TIME_ANIM_CIRCLE + (index * DURATIONS.LETTER)),
          }}
        />
      ))}
      <PointsAnimated
        pointsProps={[
          {
            transition: {
              ease: "easeIn",
              duration: DURATIONS.POINT,
              delay: TIME_ANIM_LEAFS,
            },
          },
          {
            transition: {
              ease: "easeIn",
              duration: DURATIONS.POINT,
              delay: TIME_ANIM_LEAFS + DURATIONS.POINT,
            },
          },
        ]}
        initial="hidden"
        animate="visible"
        variants={letterVariants}
      />
      <LeafsAnimated
        leafsProps={[
          {
            transition: {
              ease: "easeIn",
              duration: DURATIONS.LEAF,
              delay: TIME_ANIM_LETTERS,
            },
          },
          {
            transition: {
              ease: "easeIn",
              duration: DURATIONS.LEAF,
              delay: TIME_ANIM_LETTERS + DURATIONS.LEAF,
            },
          },
          {
            transition: {
              ease: "easeIn",
              duration: DURATIONS.LEAF,
              delay: TIME_ANIM_LETTERS + (DURATIONS.LEAF * 2),
            },
          },
        ]}
        initial="hidden"
        animate="visible"
        variants={letterVariants}
      />
    </Container>);
};
Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;
Logo.whyDidYouRender = true;

export default React.memo(Logo, checkPropsEquality);
