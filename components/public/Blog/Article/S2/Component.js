import React, { Fragment, useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

import Drawer from './Drawer';
import SectionImage from './SectionImage';
import {
  Container,
  SectionTitle,
  SectionText,
  Sections,
  ReturnBtn,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const defaultScrollInfos = {
  recordScroll: false,
  currentSection: 0,
};

const S2 = ({
  height,
  sections,
}) => {
  const third = Math.round(height / 3); // 33% of the page
  const imageHeight = third > 250 ? 250 : third; // Max 250px

  const [waypointStates, setWaypointStates] = useState([[], [], []]);
  const [scrollInfos, setScrollInfos] = useState(defaultScrollInfos);
  const {
    recordScroll,
    currentSection,
  } = scrollInfos;
  const scrollRef = useRef();

  const handleMobileWaypointEnter = (sectionId, waypointId) => () => {
    // Le premier point de la section SectionId viens d'entrer dans le viewport
    // Et le second est deja la. Nous venons de descendre le contenu
    // La section devrait etre la precedente.
    if (waypointId === 0 && waypointStates[sectionId][1] === true) {
      setScrollInfos({
        recordScroll: false,
        currentSection: sectionId - 1,
      });
    }
    // Le second point viens d'etre affiche mais le premier ne l'est pas.
    // On est en train de descendre l'affichage.
    // On doit ecouter le scroll et descendre l'image.
    if (waypointId === 1 && waypointStates[sectionId][0] === false) {
      setScrollInfos({
        recordScroll: true,
        currentSection: sectionId,
      });
    }
    waypointStates[sectionId][waypointId] = true;
    setWaypointStates(waypointStates);
  };
  const handleMobileWaypointLeave = (sectionId, waypointId) => () => {
    // Le premier point viens de quitter l'affichage et
    // Le second est toujours a l'ecran. On monte l'affichage
    // On doit ecouter le scroll et monter l'image
    if (waypointId === 0 && waypointStates[sectionId][1] === true) {
      setScrollInfos({
        recordScroll: true,
        currentSection: sectionId,
      });
    }
    // Le second point viens de quitter l'affichage et le premier n'etais plus affiche.
    // On doit garder l'etat tel qu'il est actuellement.
    if (waypointId === 1 && waypointStates[sectionId][0] === false) {
      setScrollInfos({
        ...scrollInfos,
        recordScroll: false,
      });
    }
    waypointStates[sectionId][waypointId] = false;
    setWaypointStates(waypointStates);
  };

  const handleChangeSection = (id) => {
    console.log('Should scroll to: ', sections[id].title);
  };

  return (
    <Container>
      <ReturnBtn>
        <a href="/blog/">
          <IconButton aria-label="menu">
            <ArrowBack />
          </IconButton>
        </a>
      </ReturnBtn>
      <Drawer
        sections={sections}
        selectedSection={currentSection}
        onArticleClick={handleChangeSection}
      />
      <SectionImage
        height={imageHeight}
        sections={sections}
        currentSection={currentSection}
        scrollRef={scrollRef}
        recordScroll={recordScroll}
      />
      <Sections
        marginTop={imageHeight}
        ref={scrollRef}
      >
        {sections.map((section, i) => (
          <Fragment key={section.title}>
            {Boolean(i) && <SectionTitle>{section.title}</SectionTitle>}
            <Waypoint
              topOffset={imageHeight}
              bottomOffset={-imageHeight}
              onEnter={handleMobileWaypointEnter(i, 0)}
              onLeave={handleMobileWaypointLeave(i, 0)}
            />
            <Waypoint
              onEnter={handleMobileWaypointEnter(i, 1)}
              onLeave={handleMobileWaypointLeave(i, 1)}
            />
            <SectionText>{section.text}</SectionText>
          </Fragment>
        ))}
      </Sections>
    </Container>
  );
};
S2.propTypes = propTypes;
S2.defaultProps = defaultProps;
S2.whyDidYouRender = true;

export default S2;

