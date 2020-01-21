import React, { useState, useEffect, useCallback } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useRouter } from 'next/router';

import { useDevice } from 'Services/Device';
import { initUser } from 'Services/User';
import { getLayout } from 'Layouts/public';
import { getArticles } from 'Services/Articles';
import { Title } from './Article/S1/SectionImage/Styles';
import {
	Container,
	StyledCard,
	StyledCardMedia,
} from './Styles';

const Landing = () => {
	const router = useRouter();
	const { data: device } = useDevice();
	const callInit = initUser();
	const { loading, error, data } = getArticles();
	const [formattedCards, setFormattedCards] = useState([]);

	// Init user
	useEffect(() => {
		if (!device.id) {
			callInit({ variables: device, ssr: false });
		}
	}, []);

	const handleClick = useCallback(id => () => {
		router.push(`/blog/article/${id || 42}`);
	}, []);
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
					</StyledCard>,
				);
			});
			setFormattedCards(out);
		}
	}, [data, loading]);
	
	return (
		<Container>
			{/*{formattedCards}*/}
		</Container>
	);
};
Landing.getLayout = getLayout;
// Landing.whyDidYouRender = true;

export default Landing;
