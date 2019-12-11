/**
 * Le but de la sectionImage est de delimiter et modifier la page des articles.
 * L'animation principale sert de transition entre les sections.
 * La seconde est de maximiser la photo sur l'ecran.
 */
import React, { useState, useMemo, useEffect, memo } from 'react';
import { useScroll } from 'react-use';
import PhotoSizeSelectLarge from '@material-ui/icons/PhotoSizeSelectLarge';
import PhotoSizeSelectSmall from '@material-ui/icons/PhotoSizeSelectSmall';

import IconButton from 'Components/common/IconButton';
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
const ImageVariants = {
  closed: {
    width: 'var(--fullWidth)',
    height: 'calc(var(--fullHeight) / 3)',
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

const SectionImage = ({
  height,
  sections,
  currentSection,
  scrollRef,
  recordScroll,
}) => {
  const [active, setActive] = useState(false);
  const handleActive = id => () => {
    const formattedId = id === -1 ? 0 : id;
    
    if (formattedId === active) setActive(false);
    else setActive(formattedId);
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
  // Maybe use a variable that changes when recordScroll = true && y !== prevVariable

  const horizontalDelta = horizontalBase - y;
  let sectionDelta = 0;
  if (horizontalDelta > height) sectionDelta = height;
  else if (horizontalDelta < -height) sectionDelta = -height;
  else sectionDelta = horizontalDelta;
  // const [sectionDelta, setSectionDelta] = useState(0);
  // useEffect(() => {
  //   if (horizontalDelta > height) setSectionDelta(height);
  //   else if (horizontalDelta < -height) setSectionDelta(-height);
  //   else setSectionDelta(horizontalDelta);
  // });
  
  const [content, setContent] = useState([]);
  useEffect(() => {
    const out = [];
    
    sections.map((section, id) => {
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
    
      out.push(
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
      );
    });
    setContent(out);
  }, [sectionDelta, height]);
  

  return useMemo(() => (
    <Container>
      <IconButton
        containerStyles={{
          position: 'fixed',
          right: 12,
          top: 72,
          zIndex: 2,
        }}
        animProps={{
          icons: {
            active: PhotoSizeSelectSmall,
            inactive: PhotoSizeSelectLarge,
          },
          labels: {
            active: 'open',
            inactive: 'closed',
          },
          others: {
            variants: ResizeBtnVariants,
            initial: 'closed',
          },
        }}
        activable
        onClick={handleActive((sectionDelta !== 0 && sectionDelta > (-height)) ? currentSection - 1 : currentSection)}
        ariaLabel="menu"
      />
      {content}
    </Container>
  ), [sectionDelta, active]);
};
SectionImage.propTypes = propTypes;
SectionImage.defaultProps = defaultProps;
SectionImage.whyDidYouRender = true;

export default memo(SectionImage);

