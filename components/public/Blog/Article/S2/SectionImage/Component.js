/**
 * Le but de la sectionImage est de delimiter et modifier la page des articles.
 * L'animation principale sert de transition entre les sections.
 * La seconde est de maximiser la photo sur l'ecran.
 */
import React, { useState, useMemo, useEffect, memo } from 'react';
import { useScroll } from 'react-use';
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
  sections,
  currentSection,
  scrollRef,
  recordScroll,
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

  const [active, setActive] = useState(false);
  const handleActive = id => () => {
    if (id === active) setActive(false);
    else setActive(id);
  };

  const { y } = useScroll(scrollRef);
  // const [y, setY] = useState(0);
  const [horizontalBase, setHorizontalBase] = useState(0);

  useEffect(() => {
    if (recordScroll && currentSection) {
      setHorizontalBase(y);
    } else if (!recordScroll && horizontalBase !== 0) {
      setHorizontalBase(0);
    }
  }, [recordScroll]);
  // Failed attempt to optimize scroll pos with use-scroll-position
  // useScrollPosition(({ currPos: { y: scrollY } }) => {
  //   if (recordScroll && currentSection && horizontalBase === 0) {
  //     setHorizontalBase(scrollY);
  //   } else if (!recordScroll && horizontalBase !== 0) {
  //     setHorizontalBase(0);
  //   }
  //   setY(scrollY);
  // }, null, scrollRef);

  const horizontalDelta = horizontalBase - y;
  let sectionDelta = 0;
  if (horizontalDelta > height) sectionDelta = height;
  else if (horizontalDelta < -height) sectionDelta = -height;
  else sectionDelta = horizontalDelta;

  return useMemo(() => (
    <Container height={height}>
      <ResizeBtn
        variants={ResizeBtnVariants}
        initial="closed"
        animate={active !== false ? 'open' : 'closed'}
      >
        <IconButton aria-label="menu" onClick={handleActive(sectionDelta !== 0 && sectionDelta > (-height) ? currentSection - 1 : currentSection)}>
          {active !== false ? <PhotoSizeSelectSmall /> : <PhotoSizeSelectLarge />}
        </IconButton>
      </ResizeBtn>
      {sections.map((section, id) => {
        let position = 0;
        if (id) { // NOT first section
          if (currentSection === id) {
            let sectionHeight = sectionDelta > 0 ? sectionDelta : height + sectionDelta;
            position = sectionHeight < 0 ? 0 : sectionHeight;
          } else if (id > currentSection) {
            position = height;
          }
        }
        const isActive = active === id;

        return (
          <Content
            key={id}
            position={position}
            height={height}
          >
            <Image
              url={section.url}
              variants={ImageVariants}
              initial="closed"
              animate={isActive ? 'open' : 'closed'}
            />
            <Title>
              {section.title}
            </Title>
          </Content>
        )
      })}
    </Container>
  ), [sectionDelta, active]);
};
SectionImage.propTypes = propTypes;
SectionImage.defaultProps = defaultProps;
// SectionImage.whyDidYouRender = true;

export default memo(SectionImage);

