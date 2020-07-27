import React from 'react';
import { makeStyles, Box, Link, Typography } from '@material-ui/core';

import NavBar from './components/NavBar/navBar';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import { LINKS } from './constants';

function Copyright() {
  return (
    <Typography
      variant="body1"
      color="black"
      align="center"
      style={{ marginBottom: '10px' }}
    >
      {'Made with ❤️ and passion | Copyright © '}
      <Link color="inherit" href="http://www.knowhimanshu.in/">
        Himanshu
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const sections = LINKS;

const App = () => {
  const classes = useStyles();

  // const handleMouseMove = (e) => {
  //   const cursor = document.querySelector('#customCursor')
  //   cursor.style.left = `${e.pageX}px`
  //   cursor.style.top = `${e.pageY}px`
  // }

  return (
    <div className={classes.appRoot}>
      <NavBar />
      {sections.map((section) => {
        if (section.id === 'home') {
          return (
            <Box my={10} id={section.id} key={section.id}>
              <Home />
            </Box>
          );
        }
        if (section.id === 'contact') {
          return (
            <Box my={10} id={section.id} key={section.id}>
              <Typography variant="h4">{section.label}</Typography>
              <Contact />
            </Box>
          );
        }
        return (
          <Box my={10} id={section.id} key={section.id}>
            <Typography variant="h4">{section.label}</Typography>
            {[...new Array(5)].map((idx) => {
              return (
                <Box key={idx} style={{ marginBottom: '10px' }}>
                  You can also type a keyword to search online for the video
                  that best fits your document. To make your document look
                  professionally produced, Word provides header, footer, cover
                  page, and text box designs that complement each other. For
                  example, you can add a matching cover page, header, and
                  sidebar. Click Insert and then choose the elements you want
                  from the different galleries. Themes and styles also help keep
                  your document coordinated. When you click Design and choose a
                  new Theme, the pictures, charts, and SmartArt graphics change
                  to match your new theme. When you apply styles, your headings
                  change to match the new theme. Save time in Word with new
                  buttons that show up where you need them.
                </Box>
              );
            })}
          </Box>
        );
      })}
      <footer>{Copyright()}</footer>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  appRoot: {
    // position: 'fixed',
    // padding: 0,
    // margin: 0,
    // top: 0,
    // left: 0,
    // height: '100%',
    // width: '100%',
    // '&::selection': {
    //   color: 'red',
    //   background: 'yellow'
    // }
  },
}));

export default App;
