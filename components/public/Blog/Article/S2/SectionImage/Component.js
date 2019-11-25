/**
 * Le but de la sectionImage est de delimiter et modifier la page des articles.
 * L'animation principale sert de transition entre les sections.
 * La seconde est de maximiser la photo sur l'ecran.
 */
import React, { useState, useMemo, useEffect, memo } from 'react';
import { Parallax } from 'react-parallax';
import IconButton from '@material-ui/core/IconButton';
import PhotoSizeSelectLarge from '@material-ui/icons/PhotoSizeSelectLarge';
import PhotoSizeSelectSmall from '@material-ui/icons/PhotoSizeSelectSmall';

import {
  Container,
  Content,
  ResizeBtn,
  Image,
  Title,
} from './Styles';
import {
  propTypes,
  defaultProps,
} from './Props';

const ResizeBtnVariants = {
  closed: { rotate: 0 },
  open: { rotate: 90 },
};

const SectionImage = ({
  height,
  title,
  image,
}) => {
  const ImageVariants = {
    closed: {
      width: 'var(--fullWidth)',
      height,
      translateY: '0vw',
      rotate: 0,
      zIndex: 'initial',
      top: 0,
      left: 0,
    },
    open: {
      width: 'var(--fullHeight)',
      height: 'var(--fullWidth)',
      translateY: '-100vw',
      rotate: 90,
      zIndex: '1',
    },
  };

  // const [active, setActive] = useState(false);
  // const handleActive = () => {
  //   setActive(!active);
  // };

  return (
    <Parallax
      bgImage={image}
      strength={-100}
    >
      <div style={{ height }}>
        <Title>
          {title}
        </Title>
      </div>
    </Parallax>
  );
};
SectionImage.propTypes = propTypes;
SectionImage.defaultProps = defaultProps;
SectionImage.whyDidYouRender = true;

export default memo(SectionImage);

