import React from 'react';
import {
  makeStyles,
  Box,
  Link,
  Typography,
  useMediaQuery,
  IconButton,
} from '@material-ui/core';
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';
import classnames from 'classnames';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/navBar';

import Home from './components/sections/Home/home';
import Contact from './components/sections/Contact/contact';
import About from './components/sections/About/about';
import Skills from './components/sections/Skills/skills';
import Education from './components/sections/Education/education';
import Experience from './components/sections/Experience/experience';
import Project from './components/sections/Project/project';
import Blog from './components/sections/Blog/blog';
import AdminPanel from './components/AdminPanel';
import AppReferral from './components/AppReferral';

import { LINKS } from './constants';

function Copyright() {
  return (
    <Typography
      variant="body1"
      color="textPrimary"
      align="center"
      style={{ margin: '2% 1%' }}
    >
      Made with{' '}
      <span role="img" aria-label="heart">
        ❤️
      </span>{' '}
      and passion <br /> {' Copyright © '}
      <Link color="inherit" href={window.location.href}>
        Himanshu
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const sections = LINKS;

const MainPage = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:900px)');

  return (
    <div className={classes.appRoot}>
      <NavBar />
      {sections.map((section) => {
        switch (section.id) {
          case 'home': {
            return (
              <Box
                my={0}
                id={section.id}
                key={section.id}
                className={classnames(
                  classes.boxWrapper,
                  classes.boxWrapperSpclPadding,
                  { [classes.verticalBoxWrapper]: !matches }
                )}
              >
                <Home />
              </Box>
            );
          }
          case 'about': {
            return (
              <Box
                my={0}
                id={section.id}
                key={section.id}
                className={classnames(
                  classes.boxWrapper,
                  classes.boxWrapperBgSecondary,
                  { [classes.verticalBoxWrapper]: !matches }
                )}
              >
                <Typography
                  variant="h4"
                  className={classes.sectionTitleWrapper}
                >
                  {section.label}
                </Typography>
                <About />
              </Box>
            );
          }
          case 'skills': {
            return (
              <Box
                my={0}
                id={section.id}
                key={section.id}
                className={classnames(
                  classes.boxWrapper,
                  classes.boxWrapperBgDefault,
                  { [classes.verticalBoxWrapper]: !matches }
                )}
              >
                <Typography
                  variant="h4"
                  className={classes.sectionTitleWrapper}
                >
                  {section.label}
                </Typography>
                <Skills />
              </Box>
            );
          }
          case 'education': {
            return (
              <Box
                my={0}
                id={section.id}
                key={section.id}
                className={classnames(
                  classes.boxWrapper,
                  classes.boxWrapperBgPrimary,
                  { [classes.verticalBoxWrapper]: !matches }
                )}
              >
                <Typography
                  variant="h4"
                  className={classes.sectionTitleWrapper}
                >
                  {section.label}
                </Typography>
                <Education />
              </Box>
            );
          }
          case 'experience': {
            return (
              <Box
                my={0}
                id={section.id}
                key={section.id}
                className={classnames(
                  classes.boxWrapper,
                  classes.boxWrapperBgDefault,
                  { [classes.verticalBoxWrapper]: !matches }
                )}
              >
                <Typography
                  variant="h4"
                  className={classes.sectionTitleWrapper}
                >
                  {section.label}
                </Typography>
                <Experience />
              </Box>
            );
          }
          case 'project': {
            return (
              <Box
                my={0}
                id={section.id}
                key={section.id}
                className={classnames(
                  classes.boxWrapper,
                  classes.boxWrapperBgPrimary,
                  { [classes.verticalBoxWrapper]: !matches }
                )}
              >
                <Typography
                  variant="h4"
                  className={classes.sectionTitleWrapper}
                >
                  {section.label}
                </Typography>
                <Project />
              </Box>
            );
          }
          case 'blog': {
            return (
              <Box
                my={0}
                id={section.id}
                key={section.id}
                className={classnames(
                  classes.boxWrapper,
                  classes.boxWrapperBgDefault,
                  { [classes.verticalBoxWrapper]: !matches }
                )}
              >
                <Typography
                  variant="h4"
                  className={classes.sectionTitleWrapper}
                >
                  {section.label}
                </Typography>
                <Blog />
              </Box>
            );
          }
          case 'referral': {
            return (
              <Box
                my={0}
                id={section.id}
                key={section.id}
                className={classnames(
                  classes.boxWrapper,
                  classes.boxWrapperBgSecondary,
                  { [classes.verticalBoxWrapper]: !matches }
                )}
              >
                <Typography
                  variant="h4"
                  className={classes.sectionTitleWrapper}
                >
                  {section.label}
                  <Typography
                    variant="h5"
                    className={`${classes.sectionSubTitleWrapper}`}
                  >
                    <Link
                      color="inherit"
                      href={`${window.location.href}appReferral`}
                      target="_blank"
                      className={classes.linkText}
                    >
                      View All App Referrals
                      <IconButton
                        aria-label="view all referrals"
                        className={classes.linkText}
                      >
                        <OpenInNewOutlinedIcon />
                      </IconButton>
                    </Link>
                  </Typography>
                </Typography>
                <AppReferral singleLineList />
              </Box>
            );
          }
          case 'contact': {
            return (
              <Box
                my={0}
                id={section.id}
                key={section.id}
                className={classnames(
                  classes.boxWrapper,
                  classes.boxWrapperBgSecondary,
                  { [classes.verticalBoxWrapper]: !matches }
                )}
              >
                <Typography
                  variant="h4"
                  className={classes.sectionTitleWrapper}
                >
                  {section.label}
                </Typography>
                <Contact />
              </Box>
            );
          }
          default: {
            return (
              <Box
                my={0}
                id={section.id}
                key={section.id}
                className={classnames(classes.boxWrapper, {
                  [classes.verticalBoxWrapper]: !matches,
                })}
              >
                <Typography
                  variant="h4"
                  className={classes.sectionTitleWrapper}
                >
                  {section.label}
                </Typography>
                {[...new Array(1)].map((idx) => {
                  return (
                    <Box key={idx} style={{ marginBottom: '10px' }}>
                      This is some unexplored section and if you are seeing
                      this, please connect with the developer. Things needs to
                      be corrected!
                    </Box>
                  );
                })}
              </Box>
            );
          }
        }
      })}
      <footer>{Copyright()}</footer>
    </div>
  );
};

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/adminPanel">
          <AdminPanel />
        </Route>
        <Route exact path="/appReferral">
          <AppReferral />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

const useStyles = makeStyles((theme) => ({
  appRoot: {},
  boxWrapper: {
    padding: '2%',
    height: '100%',
  },
  boxWrapperSpclPadding: {
    paddingTop: '8%',
  },
  verticalBoxWrapper: {
    height: '100%',
  },
  boxWrapperBgPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText,
  },
  boxWrapperBgSecondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  boxWrapperBgDefault: {
    backgroundColor: 'white',
  },
  sectionTitleWrapper: {
    marginBottom: '2%',
    textTransform: 'uppercase',
  },
  sectionSubTitleWrapper: {
    textTransform: 'none',
  },
  linkText: {
    color: theme.palette.secondary.contrastText,
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
    },
  },
}));

export default App;
