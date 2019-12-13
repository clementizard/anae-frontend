import React, {
  useState,
  useMemo,
  useEffect,
  memo,
} from 'react';
import { useScroll } from 'react-use';

import IconButton from 'Components/common/IconButton';
import {
  Container,
  Content,
  Image,
  Title,
  iconContainerStyles,
} from './Styles';
import {
  propTypes,
  defaultProps,
} from './Props';
import {
  ImageVariants,
  iconAnimProps,
} from './Animations';

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
  
  const getContent = () => {
    if (sections)
      return sections.map((section, id) => {
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
      });
  };
  
  return useMemo(() => (
    <Container>
      <IconButton
        containerStyles={iconContainerStyles}
        animProps={iconAnimProps}
        activable
        onClick={handleActive((sectionDelta !== 0 && sectionDelta > (-height)) ? currentSection - 1 : currentSection)}
        ariaLabel="menu"
      />
      {getContent()}
    </Container>
  ), [sectionDelta, active, height]);
};
SectionImage.propTypes = propTypes;
SectionImage.defaultProps = defaultProps;
// SectionImage.whyDidYouRender = true;

export default memo(SectionImage);

