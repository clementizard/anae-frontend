import React, { Fragment, memo, useState, useEffect } from 'react';
import Scrollchor from 'react-scrollchor';
import { useRouter } from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import { buildDrawerItems } from '../Tools';
import Header from './Header';
import Footer from './Footer';
import {
	Btn,
	Overlay,
	Panel,
	Content,
} from './Styles';
import { propTypes, defaultProps } from './Props';
import { variants } from './Animations';

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const Drawer = ({
	sections,
	selectedSection,
}) => {
	const router = useRouter();

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);

	const [openArticle, setOpenArticle] = useState(true);
	const handleOpenArticle = () => setOpenArticle(!openArticle);
	const handleClick = href => () => {
		setOpen(false);
		router.push(href);
	};
	
	const [list, setList] = useState([]);
	useEffect(() => {
		const out = [];
		const DrawerItems = buildDrawerItems({ sections });

		DrawerItems.forEach((el) => {
			if (el.sub && el.sub.length) {
				out.push(
					<Fragment key={el.name}>
						<ListItem button onClick={handleOpenArticle} selected>
							<ListItemText primary={el.name} />
							{openArticle ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={openArticle} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								{el.sub.map(({ name }, id) => (
									<Scrollchor
										key={id}
										to={`#${el.target}${id}`}
										target={el.target}
										style={{ color: 'inherit', textDecoration: 'none' }}
									>
										<ListItem
											button
											style={{ paddingLeft: 32 }}
											selected={selectedSection === id}
											onClick={handleOpen}
										>
											<ListItemText primary={name} />
										</ListItem>
									</Scrollchor>
								))}
							</List>
						</Collapse>
						<Divider light />
					</Fragment>
				);
			} else {
				out.push(
					<Fragment key={el.name}>
						<ListItem
							button
							onClick={handleClick(el.link)}
							selected={router.pathname === el.link}
						>
							<ListItemText primary={el.name} />
						</ListItem>
						<Divider light />
					</Fragment>
				);
			}
		});
		setList(out);
	}, [sections, openArticle]);

	return (
		<>
			{open && <Overlay onClick={handleOpen} />}
			<Btn open={open}>
				<IconButton aria-label="menu" onClick={handleOpen}>
					{open ? <Close /> : <Menu />}
				</IconButton>
			</Btn>
			<Panel
				open={open}
				variants={variants}
				initial="hidden"
				animate={open ? 'visible' : 'hidden'}
				// drag={false}
				// dragConstraints={{
				// 	left: 0, right: 0, top: 0, bottom: 0,
				// }}
				// dragElastic={0.1}
				// onDragEnd={(e, { offset, velocity }) => {
				// 	const swipe = swipePower(offset.x, velocity.x);
				// 	if (swipe > swipeConfidenceThreshold) {
				// 		setOpen(false);
				// 	}
				// }}
			>
				<Content>
					<Header open={open} />
					<List
						component="nav"
						aria-labelledby="menu-list"
						style={{ padding: 0, maxHeight: 'calc(100vh - 72px - 56px)', overflow: 'auto' }}
					>
						{list}
					</List>
					<Footer />
				</Content>
			</Panel>
		</>
	);
};
Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;
Drawer.whyDidYouRender = true;

export default memo(Drawer);
