import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import Img from 'react-image';
import ReactMarkdown from 'react-markdown';

import SectionImage from './SectionImage';
import {
  SectionText,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const S2 = ({
  article,
  height,
  loading,
}) => {
  const articleReady = Boolean(!loading && article && article.sections);
  const third = Math.round(height / 3); // 33% of the page
  const imageHeight = third >= 350 ? 350 : third;

  const [currentSection, setCurrentSection] = useState(0);

  const handleWaypointEnter = sectionId => () => {
    if (currentSection > sectionId) {
      setCurrentSection(sectionId);
    }
  };
  const handleWaypointLeave = sectionId => () => {
    if (currentSection < sectionId) {
      setCurrentSection(sectionId);
    }
  };

  return (
    <div id="sections">
      {articleReady && article.sections.map((section, i) => (
        <div
          id={`section${i}`}
          key={section.id}
        >
          <Waypoint
            onEnter={handleWaypointEnter(i)}
            onLeave={handleWaypointLeave(i)}
          />
          <Img
            alt={section.alt}
            src={section.image}
            container={children => (
              <SectionImage
                image={children}
                title={section.title}
                height={imageHeight}
              />
            )}
          />
          <SectionText>
            <ReactMarkdown source={section.text}/>
          </SectionText>
        </div>
      ))}
    </div>
  );
};
S2.propTypes = propTypes;
S2.defaultProps = defaultProps;
S2.whyDidYouRender = true;

export default S2;

/*
Todo:
  - Async load
  - Logs https://www.npmjs.com/package/address
  - Produits / Commandes / User DB
  - Mails https://stackabuse.com/how-to-send-emails-with-node-js/
  - Admin
  - Admin Insta
  - Admin Logs
  - Admin Produits
 */
