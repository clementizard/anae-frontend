import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

import { Links } from '../Tools';
import {
  Container,
  Section,
  Title,
  Details,
  StyledA,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const S2 = () => {
  const [formattedLinks, setFormattedLinks] = useState([]);
  
  useEffect(() => {
    const out = [];
    Links.forEach((section, sectionId) => {
      const children = [];
      section.list.forEach((link) => {
        if (!link.type) {
          children.push(
            <Link href={link.link} key={link.name}>
              <StyledA>
                <Typography variant="body1">
                  {link.name}
                </Typography>
              </StyledA>
            </Link>
          );
        } else if (link.type === 'social') {
          children.push(
            <StyledA
              href={link.link}
              target="_blank"
            >
              <Typography variant="body1">
                {link.name}
              </Typography>
            </StyledA>);
        }
      });
      out.push(
        <Section key={sectionId}>
          <Title variant="h6">{section.title}</Title>
          <Details>
            {children}
          </Details>
        </Section>
      );
    });
    setFormattedLinks(out);
  }, []);
  
  return (
    <Container>
      {formattedLinks}
    </Container>
  );
};
S2.propTypes = propTypes;
S2.defaultProps = defaultProps;
S2.whyDidYouRender = true;

export default S2;

