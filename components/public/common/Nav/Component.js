import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Scrollchor from 'react-scrollchor';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

import {
	getArticleByTitleId,
} from 'Services/Articles';
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

const Nav = () => {
	const router = useRouter();
	const { id } = router.query;
	const {
		loading,
		error,
		data,
	} = getArticleByTitleId(id);

	const NavItems = useCallback(buildNavItems({ article: data }), []);

	const shouldAnimate = useAnimate();
	const animate = shouldAnimate ? 'visible' : 'hidden';
	
	// Menu - MenuItems
	const [menuOpen, setMenuOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const handleMenuClick = index => (e) => {
		if (NavItems[index]
			&& (!NavItems[index].sub || !NavItems[index].sub.length)) router.push(NavItems[index].link);
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
		// router.push(link);
	};
	const isItemSelected = item => {
		if (id && item.type === 'article') return true;
		if (!id && item.link && router.pathname.includes(item.link)) return true;
		else if (item.sub && item.sub.length) {
			item.sub.forEach((subItem) => {
				if (router.pathname.includes(subItem.link)) return true;
			});
		}
		return false;
	};

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
						selected={isItemSelected(item)}
					>
						<LinkButton
							onClick={handleMenuClick(index)}
							aria-controls={menuOpen === index ? 'menu-list-fade' : undefined}
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
								target="section"
								style={{ color: 'inherit', textDecoration: 'none' }}
								animate={{ offset: -72 }}
							>
								<MenuItem>
									{subItem.name}
								</MenuItem>
							</Scrollchor>
					) : (
						<MenuItem
							key={`link-sub-${menuOpen}-${subIndex}`}
							onClick={handleSubMenuClick(subItem.link)}
							selected={subItem.link === router.pathname}
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
