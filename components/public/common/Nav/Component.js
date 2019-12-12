import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Scrollchor from 'react-scrollchor';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import gql from 'graphql-tag';
// import { useQuery } from '@apollo/react-hooks';

import useAnimate from 'Hooks/animate';
import {
	LettersAnimated,
	Wrapper,
} from 'PublicComponents/Landing/Logo/Parts';
import {
	Container,
	LogoContainer,
	Links,
	ItemContainer,
	LinkButton,
} from './Styles';
import { propTypes, defaultProps } from './Props';
import {
	letterVariants,
	linkVariants,
} from './Animations';
import { buildNavItems } from './Tools';

const GET_ARTICLE = gql`
    {
        getArticle(id: "5d949e13c31d83415c1bd39b") {
            title
            description
            created
        }
    }
`;

const Nav = () => {
	// const { loading, error, data } = useQuery(GET_ARTICLE);
	// console.log('GQL: ', loading, error, data);
	
	const NavItems = useCallback(buildNavItems({
		article: {
			sections: [
				{
					title: 'Title1',
				},
				{
					title: 'Title2',
				},
				{
					title: 'Title3',
				},
			],
		},
	}), []);

	const shouldAnimate = useAnimate();
	const animate = shouldAnimate ? 'visible' : 'hidden';

	const router = useRouter();
	const { id } = router.query;
	
	const [menuOpen, setMenuOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const handleMenuClick = index => (e) => {
		if (NavItems[index]
			&& (!NavItems[index].sub
			|| !NavItems[index].sub.length)) router.push(NavItems[index].link);
		else {
			if (index === false) {
				setMenuOpen(false);
				setAnchorEl(null);
			} else {
				setMenuOpen(index);
				setAnchorEl(e.currentTarget);
			}
		}
	};
	const handleSubMenuClick = link => () => {
		setMenuOpen(false);
		router.push(link);
	};

	console.log(anchorEl);
	return (
		<Container>
			<LogoContainer>
				<Wrapper>
					{LettersAnimated.map((Letter, index) => (
						<Letter
							initial="hidden"
							key={`letter-animated-${index}`}
							variants={letterVariants}
							animate={animate}
							transition={{ delay: 0.3 * index }}
						/>
					))}
				</Wrapper>
			</LogoContainer>
			<Links>
				{NavItems.map((item, index) => (
					<ItemContainer
						initial="hidden"
						key={`link-animated-${index}`}
						variants={linkVariants}
						animate={animate}
						transition={{ delay: 0.2 * index }}
					>
						<LinkButton
							onClick={handleMenuClick(index)}
							// ref={anchorRefArray[index]}
							aria-controls={menuOpen === index ? 'menu-list-grow' : undefined}
							aria-haspopup={(item.sub && item.sub.length) ? 'true' : 'false'}
						>
							{item.name}
						</LinkButton>
					</ItemContainer>
				))}
			</Links>
			{(NavItems[menuOpen] && NavItems[menuOpen].sub) && (
				<Menu
					anchorEl={anchorEl}
					anchorOrigin={{
						horizontal: 'center',
						vertical: 'bottom',
					}}
					transformOrigin={{
						horizontal: 'center',
						vertical: 'bottom',
					}}
					PaperProps={{
						style: { transform: 'translate(0px, 42px)' }
					}}
					TransitionComponent={Fade}
					open={menuOpen !== false}
					onClose={handleMenuClick(false)}
				>
					{NavItems[menuOpen].sub.map((subItem, subIndex) => NavItems[menuOpen].type === 'article' ? (
							<Scrollchor
								key={`link-sub-${menuOpen}-${subIndex}`}
								to={`#section${subIndex}`}
								target="page"
								style={{ color: 'inherit', textDecoration: 'none' }}
							>
								{subItem.name}
							</Scrollchor>
					) : (
						<MenuItem
							key={`link-sub-${menuOpen}-${subIndex}`}
							onClick={handleSubMenuClick(subItem.link)}
						>
							{subItem.name}
						</MenuItem>
					))}
				</Menu>
			)}
		</Container>
	);
};
Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
Nav.whyDidYouRender = true;

export default Nav;
