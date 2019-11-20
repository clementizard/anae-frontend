import React, { Fragment, useContext, useMemo } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import DeviceContext from 'Services/Device';
import {
  transitionName,
  appearDuration,
  ImageContainer,
  BackgroundColored,
} from './Styles';
import { propTypes, defaultProps, checkPropsEquality } from './Props';

const Background = ({ children, onHover }) => {
  const { width, height } = useContext(DeviceContext);
  const diameter = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
  const windowLargerThanImage = width > 1620;
  const maxPossibleCirconference = (width * 0.9) > 600 ? 600 : (width * 0.9);

  const transformTemplate = () => {
    return 'translate(-50%, -50%)';
  };

  return useMemo(() => (
    <ReactCSSTransitionReplace
      transitionName={transitionName}
      transitionAppear
      transitionAppearTimeout={appearDuration}
      onMouseEnter={onHover(true)}
      onMouseLeave={onHover(false)}
    >
      <Fragment key="background">
        <ImageContainer height={height}>
          {children}
        </ImageContainer>
        <BackgroundColored
          transformTemplate={transformTemplate}
          animate={{
            width: [
              '0px',
              `${maxPossibleCirconference}px`,
              `${maxPossibleCirconference + (maxPossibleCirconference * 0.4)}px`,
              `${diameter + (diameter * 0.4)}px`,
            ],
            height: [
              '0px',
              `${maxPossibleCirconference}px`,
              `${maxPossibleCirconference + (maxPossibleCirconference * 0.4)}px`,
              `${diameter + (diameter * 0.4)}px`,
            ],
            '-webkit-mask-image': [
              `radial-gradient(
                ellipse at center,
                rgba(0,0,0,1) 100%,
                rgba(0,0,0,0.5) 100%,
                rgba(0,0,0,0) 100%)`,
              `radial-gradient(
                ellipse at center,
                rgba(0,0,0,1) 100%,
                rgba(0,0,0,0.5) 100%,
                rgba(0,0,0,0) 100%)`,
              `radial-gradient(
                ellipse at center,
                rgba(0,0,0,1) 60%,
                rgba(0,0,0,0.5) 65%,
                rgba(0,0,0,0) 75%)`,
              `radial-gradient(
                ellipse at center,
                rgba(0,0,0,1) 60%,
                rgba(0,0,0,0.5) 65%,
                rgba(0,0,0,0) 75%)`,
              ],
            maskImage: [
              `radial-gradient(
                ellipse at center,
                rgba(0,0,0,1) 100%,
                rgba(0,0,0,0.5) 100%,
                rgba(0,0,0,0) 100%)`,
              `radial-gradient(
                ellipse at center,
                rgba(0,0,0,1) 100%,
                rgba(0,0,0,0.5) 100%,
                rgba(0,0,0,0) 100%)`,
              `radial-gradient(
                ellipse at center,
                rgba(0,0,0,1) 60%,
                rgba(0,0,0,0.5) 65%,
                rgba(0,0,0,0) 75%)`,
              `radial-gradient(
                ellipse at center,
                rgba(0,0,0,1) 60%,
                rgba(0,0,0,0.5) 65%,
                rgba(0,0,0,0) 75%)`,
              ],
            }}
            transition={{
              delay: 0.9,

              duration: 3,
              times: [0, 0.666, 0.8, 1],
              ease: ["easeOut", "linear", "easeIn"],
            }}
            src={children.props.src}
            windowLargerThanImage={windowLargerThanImage}
						height={height}
        />
      </Fragment>
    </ReactCSSTransitionReplace>
  ), []);
};
Background.propTypes = propTypes;
Background.defaultProps = defaultProps;
Background.whyDidYouRender = true;

export default React.memo(Background, checkPropsEquality);
