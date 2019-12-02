import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useList from 'react-use/lib/useList';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

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

const letterVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};
const linkVariants = {
	hidden: {
		opacity: 0,
		y: -20,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

const Nav = () => {
	const [animate, setAnimate] = useState('hidden');
	useEffect(() => setAnimate('visible'), []);

	const router = useRouter();
	const { id } = router.query;
	const MenuItems = [
		{
			name: 'Article',
			sub: [
				{
					name: 'Le cristal de roche',
					link: '#section0',
				},
				{
					name: 'Le cristal de roche 1',
					link: '#section1',
				},
				{
					name: 'Le cristal de roche 2',
					link: '#section2',
				},
			],
		},
		{
			name: 'Blog',
			link: '/blog',
		},
		{
			name: 'Produits',
			sub: [
				{
					name: 'Tous les produits',
					link: '/products',
				},
				{
					name: 'Nouveautes',
					link: '/products/news',
				},
				{
					name: 'Collections',
					link: '/products/collections',
				},
				{
					name: 'Bracelets',
					link: '/products/bracelets',
				},
				{
					name: "Boucles d'oreilles",
					link: '/products/earrings',
				},
				{
					name: 'Pour enfants',
					link: '/products/kids',
				},
				{
					name: 'Autres',
					link: '/products/others',
				},
			],
		},
	];
	if (router.pathname.includes('article')) {
		console.log('Im in article');
	}

	const [listOpen, { updateAt }] = useList([]);
	const handleMenuClick = index => () => {
		updateAt(index, !listOpen[index]);
	};
	const handleSubMenuClick = (itemIndex, subIndex) => () => {
		console.log(itemIndex, subIndex);
		updateAt(itemIndex, !listOpen[itemIndex]);
	};

	const anchorRefArray = new Array(MenuItems.length).fill(useRef(null));


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
				{MenuItems.map((item, index) => (
					<ItemContainer
						initial="hidden"
						key={`link-animated-${index}`}
						variants={linkVariants}
						animate={animate}
						transition={{ delay: 0.2 * index }}
					>
						<LinkButton
							onClick={handleMenuClick(index)}
							ref={anchorRefArray[index]}
							aria-controls={listOpen[index] ? 'menu-list-grow' : undefined}
							aria-haspopup={(item.sub && item.sub.length) ? 'true' : 'false'}
						>
							{item.name}
						</LinkButton>
						{(item.sub && item.sub.length) && (
							<Popper
								open={listOpen[index]}
								anchorEl={anchorRefArray[index].current}
								role={undefined}
								transition
								disablePortal
							>
								{({ TransitionProps, placement }) => (
									<Grow
										{...TransitionProps}
										style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
									>
										<Paper>
											<ClickAwayListener onClickAway={handleMenuClick(index)}>
												<MenuList
													autoFocusItem={open}
													id="menu-list-grow"
													// onKeyDown={handleListKeyDown}
												>
													{item.sub.map((subItem, subIndex) => (
														<MenuItem
															key={`link-sub-${index}-${subIndex}`}
															onClick={handleSubMenuClick(index, subIndex)}
														>
															{subItem.name}
														</MenuItem>
													))}
												</MenuList>
											</ClickAwayListener>
										</Paper>
									</Grow>
								)}
							</Popper>
						)}
					</ItemContainer>
				))}
			</Links>
		</Container>
	);
};
Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
Nav.whyDidYouRender = true;

export default Nav;
