import React, { useState, useEffect, useCallback } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useRouter } from 'next/router';

import { getLayout } from 'Layouts/public';
import { getArticles } from 'Services/Articles';
import { Title } from './Article/S1/SectionImage/Styles';
import {
  Container,
  StyledCard,
  StyledCardMedia
} from './Styles';

const Landing = () => {
  const router = useRouter();
  const { loading, error, data } = getArticles();
  const [formattedCards, setFormattedCards] = useState([]);
  
  const handleClick = useCallback(id => () => {
    router.push(`/blog/article/${id || 42}`);
  });
  useEffect(() => {
    if (!loading) {
      const out = [];
      data.forEach((article, index) => {
        out.push(
          <StyledCard elevation={6} key={index}>
            <CardActionArea onClick={handleClick(article.id)}>
              <StyledCardMedia
                image={article.image}
                title={article.alt}
              />
              <Title variant="h5">
                {article.title}
              </Title>
            </CardActionArea>
          </StyledCard>
        );
      });
      setFormattedCards(out);
    }
  }, [data, loading]);

  return (
    <Container>
      {formattedCards}
    </Container>
  );
};
Landing.getLayout = getLayout;
Landing.whyDidYouRender = true;

export default Landing;
