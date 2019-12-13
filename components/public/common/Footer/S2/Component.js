import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Links } from '../Tools';
import {
  Title,
  StyledDetails,
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
        children.push(
          <Link href={link.link}>
            <StyledA>{link.name}</StyledA>
          </Link>
        );
      });
      out.push(
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${sectionId}-content`}
            id="panel1a-header"
          >
            <Title>{section.title}</Title>
          </ExpansionPanelSummary>
          <StyledDetails>
            {children}
          </StyledDetails>
        </ExpansionPanel>
      );
    });
    setFormattedLinks(out);
  }, []);
  
  return formattedLinks;
};
S2.propTypes = propTypes;
S2.defaultProps = defaultProps;
S2.whyDidYouRender = true;

export default S2;

