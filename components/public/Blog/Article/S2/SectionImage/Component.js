import React, { memo } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import {
  Title,
  ImageContainer,
  transitionName,
  appearDuration,
} from './Styles';
import {
  propTypes,
  defaultProps,
} from './Props';

const SectionImage = ({
  height,
  title,
  image,
}) => {
  return (
    <ReactCSSTransitionReplace
      transitionName={transitionName}
      transitionAppear
      transitionAppearTimeout={appearDuration}
    >
      <ImageContainer height={height}>
        {image}
        <Title>
          {title}
        </Title>
      </ImageContainer>
    </ReactCSSTransitionReplace>
  );
};
SectionImage.propTypes = propTypes;
SectionImage.defaultProps = defaultProps;
SectionImage.whyDidYouRender = true;

export default memo(SectionImage);

