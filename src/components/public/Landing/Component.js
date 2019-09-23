import React, { useContext, useMemo } from 'react';
import Img from 'react-image';

import SizeContext from '../../../contexts/Size';
import Logo from './Logo';
import Background from './Background';
import Links from './Links';
import {
  Container,
  LogoContainer,
  Credit,
} from './Styles';
import { useHover } from './Tools';
import { propTypes, defaultProps } from './Props';
import BackgroundImage from '../../../static/Public/Landing/background.jpg';

const Landing = () => {
  const { width, height } = useContext(SizeContext);
  const [
    hovering,
    {
      handleTapCircle,
      handleHoverCircle,
      handleHoverSvg,
      handleHoverBackground,
    },
  ] = useHover();
  const isMobile = width < 400;

  return useMemo(() => (
    <Container height={height}>
      <Img
        alt="Fragment de Cristal de roche naturel tenu du bout des doigts, sur fond violet"
        src={BackgroundImage}
        container={(children) => <Background children={children} onHover={handleHoverBackground} />}
      />
      <LogoContainer>
        <Logo
          active={hovering}
          onTapCircle={handleTapCircle}
          onHoverCircle={!isMobile ? handleHoverCircle : undefined}
          onHoverSvg={!isMobile ? handleHoverSvg : undefined}
        />
        <Links active={hovering}/>
      </LogoContainer>
      <Credit href="https://unsplash.com/@sharonmccutcheon?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer">
        Crédit photo: Sharon McCutcheon
      </Credit>
    </Container>
  ), [
    hovering,
  ]);
};
// Landing.whyDidYouRender = true;

export default Landing;
