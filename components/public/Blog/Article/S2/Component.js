import React, { Fragment, useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ReactMarkdown from 'react-markdown';

import Drawer from '../common/Drawer';
import SectionImage from './SectionImage';
import {
  Container,
  SectionText,
  Sections,
  ReturnBtn,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const S2 = ({
  sections,
  height,
}) => {
  const third = Math.round(height / 3); // 33% of the page
  const imageHeight = third >= 350 ? 350 : third;

  const [currentSection, setCurrentSection] = useState(0);

  const handleWaypointEnter = (sectionId) => () => {
    if (currentSection > sectionId) {
      setCurrentSection(sectionId);
    }
  };
  const handleWaypointLeave = (sectionId) => () => {
    if (currentSection < sectionId) {
      setCurrentSection(sectionId);
    }
  };

  return (
    <>
      <Drawer
        sections={sections}
        selectedSection={currentSection}
      />
      {sections.map((section, i) => (
        <Fragment key={section.title}>
          <Waypoint
            onEnter={handleWaypointEnter(i)}
            onLeave={handleWaypointLeave(i)}
          />
          <SectionImage
            height={imageHeight}
            title={section.title}
            image={section.url}
          />
          <SectionText>
            <ReactMarkdown source={section.text}/>
          </SectionText>
        </Fragment>
      ))}
    </>
  );
};
S2.propTypes = propTypes;
S2.defaultProps = defaultProps;
S2.whyDidYouRender = true;

export default S2;

