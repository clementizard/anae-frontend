import React, { Fragment, useRef, useState, useEffect, memo } from 'react';
import { Waypoint } from 'react-waypoint';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';

import IconButton from 'CommonComponents/IconButton';
import SectionImage from './SectionImage';
import {
  Container,
  SectionTitle,
  SectionText,
  Sections,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const defaultScrollInfos = {
  recordScroll: false,
  currentSection: 0,
};
const IconContainerStyles = {
  position: 'fixed',
  top: 12,
  left: 12,
};

const S1 = ({
  article,
  loading,
}) => {
  const articleReady = Boolean(!loading && article && article.sections);
  
  const getHeight = () => process.browser ? window.innerHeight : undefined;
  const [imageHeight, setImageHeight] = useState(0);
  useEffect(() => {
    setImageHeight(Math.round(getHeight() / 3));
  }, []);

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

  return (
    <Container>
      <IconButton
        href="/blog"
        ariaLabel="back"
        Icon={ArrowBack}
        containerStyles={IconContainerStyles}
      />
      {/*<Drawer*/}
      {/*  sections={articleReady && article.sections}*/}
      {/*  selectedSection={currentSection}*/}
      {/*/>*/}
      <SectionImage
        height={imageHeight}
        sections={articleReady && article.sections}
        currentSection={currentSection}
        scrollRef={scrollRef}
        recordScroll={recordScroll}
      />
      <Sections
        id="sections"
        ref={scrollRef}
      >
        {articleReady && article.sections.map((section, i) => (
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
            <SectionText id={`section${i}`}>
              <ReactMarkdown source={section.text}/>
            </SectionText>
          </Fragment>
        ))}
      </Sections>
    </Container>
  );
};
S1.propTypes = propTypes;
S1.defaultProps = defaultProps;
S1.whyDidYouRender = true;

export default memo(S1);

