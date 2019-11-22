import React, { memo, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import Book from '@material-ui/icons/Book';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Header from './Header';
import Footer from './Footer';
import {
  Btn,
  Overlay,
  Panel,
  Content,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const variants = {
  visible: {
    right: -50,
    boxShadow: '-3px 0 6px rgba(0, 0, 0, 0.3)',
    transition: { when: "beforeChildren" }
  },
  hidden: {
    right: -350,
    boxShadow: '-3px 0 6px rgba(0, 0, 0, 0)',
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Drawer = ({
  sections,
  selectedSection,
  onArticleClick,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [openArticle, setOpenArticle] = useState(true);
  const handleOpenArticle = () => setOpenArticle(!openArticle);
  const handleArticleClicked = id => () => {
    setOpen(false);
    onArticleClick(id);
  };
  const handleClick = id => () => {
    console.log('Should redirect to: ', `/${id}/`)
  };

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
        drag={false}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe > swipeConfidenceThreshold) {
            setOpen(false);
          }
        }}
      >
        <Content>
          <Header />
          <List
            component="nav"
            aria-labelledby="menu-list"
            style={{ padding: 0, maxHeight: 'calc(100vh - 72px - 56px)', overflow: 'auto' }}
          >
            <ListItem button onClick={handleOpenArticle}>
              <ListItemIcon>
                <Book />
              </ListItemIcon>
              <ListItemText primary="Article" />
              {openArticle ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openArticle} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {sections.map(({ title }, id) => (
                  <ListItem
                    button
                    style={{ paddingLeft: 32 }}
                    selected={selectedSection === id}
                    onClick={handleArticleClicked(id)}
                  >
                      <ListItemText primary={title}/>
                  </ListItem>
                ))}
              </List>
            </Collapse>
            <Divider light />
            <ListItem button onClick={handleClick('blog')}>
              <ListItemIcon>
                {/* ICON */}
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
            <Divider light />
            <ListItem button onClick={handleClick('products/collections')}>
              <ListItemIcon>
                {/* ICON */}
              </ListItemIcon>
              <ListItemText primary="Collections" />
            </ListItem>
            <Divider light />
            <ListItem button onClick={handleClick('products/bracelets')}>
              <ListItemIcon>
                {/* ICON */}
              </ListItemIcon>
              <ListItemText primary="Bracelets" />
            </ListItem>
            <Divider light />
            <ListItem button onClick={handleClick('products/earrings')}>
              <ListItemIcon>
                {/* ICON */}
              </ListItemIcon>
              <ListItemText primary="Boucles d'oreilles" />
            </ListItem>
            <Divider light />
            <ListItem button onClick={handleClick('products/necklaces')}>
              <ListItemIcon>
                {/* ICON */}
              </ListItemIcon>
              <ListItemText primary="Malas" />
            </ListItem>
            <Divider light />
            <ListItem button onClick={handleClick('products/kids')}>
              <ListItemIcon>
                {/* ICON */}
              </ListItemIcon>
              <ListItemText primary="Enfants" />
            </ListItem>
            <Divider light />
            <ListItem button onClick={handleClick('products/others')}>
              <ListItemIcon>
                {/* ICON */}
              </ListItemIcon>
              <ListItemText primary="Autres" />
            </ListItem>
            <Divider light />
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

