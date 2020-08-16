import React from 'react';
import {
  makeStyles,
  Box,
  Link,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import classnames from 'classnames';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      <Link color="inherit" href="http://www.knowhimanshu.in/">
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
                {[...new Array(5)].map((idx) => {
                  return (
                    <Box key={idx} style={{ marginBottom: '10px' }}>
                      You can also type a keyword to search online for the video
                      that best fits your document. To make your document look
                      professionally produced, Word provides header, footer,
                      cover page, and text box designs that complement each
                      other. For example, you can add a matching cover page,
                      header, and sidebar. Click Insert and then choose the
                      elements you want from the different galleries. Themes and
                      styles also help keep your document coordinated. When you
                      click Design and choose a new Theme, the pictures, charts,
                      and SmartArt graphics change to match your new theme. When
                      you apply styles, your headings change to match the new
                      theme. Save time in Word with new buttons that show up
                      where you need them.
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
    <Router>
      <div>
        <Switch>
          <Route exact path="/adminPanel">
            <AdminPanel />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
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
}));

export default App;
