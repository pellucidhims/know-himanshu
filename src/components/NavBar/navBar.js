import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Link, animateScroll as scroll } from 'react-scroll';

import { LINKS } from '../../constants';

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger(undefined);

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
      style={{ boxShadow: '0px 0px 40px 1px purple' }}
    >
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const NavBar = () => {
  const classes = useStyles();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <HideOnScroll>
        <AppBar>
          <div className={classes.root}>
            <Toolbar>
              <div
                role="link"
                onClick={scrollToTop}
                onKeyDown={scrollToTop}
                tabIndex={0}
                className={classes.navToolbarRoot}
              >
                <Typography
                  variant="h6"
                  className={classes.navBarLeftTitleStyle}
                >
                  Himanshu
                </Typography>
              </div>
            </Toolbar>
            <div className={classes.linkRoot}>
              <Toolbar>
                {LINKS.map((link) => {
                  return (
                    <Typography
                      key={link.id}
                      variant="h6"
                      className={classes.linkStyleRoot}
                    >
                      <Link
                        activeClass={classes.linkActive}
                        to={link.to}
                        spy
                        smooth
                        offset={-60}
                        duration={500}
                      >
                        {link.label}
                      </Link>
                    </Typography>
                  );
                })}
              </Toolbar>
            </div>
          </div>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.palette.primary.contrastText,
    textTransform: 'uppercase',
    userSelect: 'none',
    cursor: 'pointer',
  },
  navToolbarRoot: {
    outline: 'none',
  },
  navBarLeftTitleStyle: {
    '&:hover': {
      fontWeight: 'bold',
      color: theme.palette.secondary.main,
    },
  },
  linkRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflowX: 'scroll',
    maxWidth: '70%',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  linkStyleRoot: {
    margin: '0px 10px 0px 10px',
    '&:hover': {
      fontWeight: 'bold',
      color: theme.palette.secondary.main,
    },
  },
  linkActive: {
    // background: 'orange',
    // borderRadius: '5px',
    // color: theme.palette.primary.main,
    // padding: '10px'
  },
}));

export default NavBar;
