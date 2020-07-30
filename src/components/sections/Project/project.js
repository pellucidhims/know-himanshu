import React, { useState } from 'react';
import { makeStyles, Typography, Link, Chip } from '@material-ui/core';
import classnames from 'classnames';
import GridList from '../../GridList/gridList';

import VisiblityWrapper from '../../VisiblityWrapper/visiblityWrapper';
import CustomModal from '../../CustomModal/customModal';

const projectList = [
  {
    img: `${process.env.PUBLIC_URL}/projectSolutionhubIcon.png`,
    title: 'Solution Hub: Cure to curiosity',
    subtitle: 'Question Answer Forum',
    author: 'Himanshu',
    published: 'April 2019',
    tags: [
      'QAForum',
      'Question',
      'Answer',
      'Forum',
      'Social',
      'Solution',
      'ReactJS',
      'NodeJS',
      'MongoDB',
    ],
    description: `<h4 class="MuiTypography-root-100 MuiTypography-h5-116 MuiTypography-gutterBottom-127">What is Solution Hub?</h4>
    <p class="MuiTypography-root-100 MuiTypography-subtitle1-118 MuiTypography-gutterBottom-127">It is a portal where users can ask (and answer) questions pertaining to system issues, common bugs, technical discussions etc. It enables users to find solution to common technical problems with a simple search thereby reducing the time and efforts to solve rare but recurring issues.</p>
    <h4 class="MuiTypography-root-100 MuiTypography-h5-116 MuiTypography-gutterBottom-127">How to use Solution Hub?</h4>
    <p class="MuiTypography-root-100 MuiTypography-subtitle1-118 MuiTypography-gutterBottom-127">Users first need to register themselves with Solution Hub using their Gmail id. Once registered, user can login to continue.<br />Once logged in, users can edit their profile section which has links to their facebook, linkedin, twitter profiles. In addition users can also upload their profile pictures.</p>
    <h4 class="MuiTypography-root-100 MuiTypography-h5-116 MuiTypography-gutterBottom-127">What's special about Solution Hub?</h4>
    <p class="MuiTypography-root-100 MuiTypography-subtitle1-118 MuiTypography-gutterBottom-127">Features include (but not limited to):</p>
    <ul>
    <li>Ask question by tagging one or more registered users if the user (one asking the question) feels some of the users know the answer to his/her question.</li>
    <li>See pool of questions/answers posted by other users on a common timeline.</li>
    <li>Users can maintain their individual profiles. The user is provided with the facility to edit various fields like Contact, DOB, SocialMedia Links. In addition to this, the user can also upload his/her profile picture</li>
    <li>The user can edit/remove questions and answers posted by him/her anytime.</li>
    <li>Users can also upvote a particular answer to a question which they find helpful which will be displayed as the top voted answer on timeline for that question.</li>
    <li>Users can bookmark their favourite questions which can be easily accessed later under "My Favourites" section.</li>
    </ul>`,
    link: 'http://www.solutionhub-ui.com',
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'NodeJS',
      'MongoDB',
      'Heroku',
    ],
  },
  {
    img: `${process.env.PUBLIC_URL}/projectHazaarCarobarIcon.png`,
    title: 'Hazaar Carobar: Buy righ car at right price',
    subtitle: 'Buy/Sell refurbished cars',
    author: 'Himanshu',
    published: 'June 2020',
    tags: [
      'Buy',
      'Sell',
      'Used cars',
      'Refurbished cars',
      'Car selling App',
      'Android',
      'React Native',
    ],
    description: `<h4 class="MuiTypography-root-100 MuiTypography-h5-116 MuiTypography-gutterBottom-127">What is Hazaar Carobar?</h4>
    <p class="MuiTypography-root-100 MuiTypography-subtitle1-118 MuiTypography-gutterBottom-127">An app(Android) that simplifies the art and commerce of buying and selling refurbished cars. It connects sellers to potential buyers.</p>
    <h4 class="MuiTypography-root-100 MuiTypography-h5-116 MuiTypography-gutterBottom-127">How to use Hazaar Carobar?</h4>
    <p class="MuiTypography-root-100 MuiTypography-subtitle1-118 MuiTypography-gutterBottom-127">Users can download the app and can search, sort and scroll through a list of cars available on the portal. To do additional activities like bookmarking favourites, adding post to sell car, contact seller for buying etc. user needs to register with the App. Once registered, user can login and avail the benifits at large.&nbsp;</p>
    <h4 class="MuiTypography-root-100 MuiTypography-h5-116 MuiTypography-gutterBottom-127">What's special about Hazaar Carobar?</h4>
    <p class="MuiTypography-root-100 MuiTypography-subtitle1-118 MuiTypography-gutterBottom-127">Features include (but not limited to):</p>
    <ul>
    <li>Users can search, sort and scroll through a list of available cars.</li>
    <li>Bookmark favourites.&nbsp;</li>
    <li>Seller(s) can post advertisements to sell cars.</li>
    <li>Buyers can contact the seller via call or texts.</li>
    <li>Users can maintain profiles.</li>
    <li>Seller can mark an advertisement post as draft to be edited and published later point of time.</li>
    <li>Seller can mark respective listed cars as sold once the deal is done, or can reactivate the deal in case the deal is cancelled after initiation.</li>
    <li>Users can share the app with others via text/WhatsApp</li>
    <li>Admin can attach offers with active advertising posts and can mark a post as 'pick-of-the-day'</li>
    </ul>`,
    link: 'https://play.google.com/store/apps/details?id=com.hazaarcarobarui',
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'React-Native',
      'Android',
      'NodeJS',
      'MongoDB',
      'Heroku',
    ],
  },
  {
    img: `${process.env.PUBLIC_URL}/projectMovieBuffIcon.png`,
    title: 'Movie Buff: Get movie suggestions',
    subtitle: 'Get movie suggestions',
    author: 'Himanshu',
    published: 'May 2019',
    tags: [
      'Buy',
      'Sell',
      'Used cars',
      'Refurbished cars',
      'Car selling App',
      'Android',
      'React Native',
    ],
    description: `<h4 class="MuiTypography-root-100 MuiTypography-h5-116 MuiTypography-gutterBottom-127">What is&nbsp;Movie Buff?</h4>
    <p class="MuiTypography-root-100 MuiTypography-subtitle1-118 MuiTypography-gutterBottom-127">A web app where user can search, sort movie(s) by its name and release date. User can add/remove listed movies to their favourites list and can get random movie suggestions to watch.</p>
    <h4 class="MuiTypography-root-100 MuiTypography-h5-116 MuiTypography-gutterBottom-127">How to use Movie Buff?</h4>
    <p class="MuiTypography-root-100 MuiTypography-subtitle1-118 MuiTypography-gutterBottom-127">User just needs to visit the website link. He/She can then just search and sort movies as per requirement.</p>
    <h4 class="MuiTypography-root-100 MuiTypography-h5-116 MuiTypography-gutterBottom-127">What's special about Movie Buff?</h4>
    <p class="MuiTypography-root-100 MuiTypography-subtitle1-118 MuiTypography-gutterBottom-127">This app is solely built using Vanilla(pure) JavaScript, HTML and CSS.</p>
    <p class="MuiTypography-root-100 MuiTypography-subtitle1-118 MuiTypography-gutterBottom-127">Features include:</p>
    <ul>
    <li>Searching movies with title.</li>
    <li>Sort movies by name and release date.</li>
    <li>Add/remove listed movies to/from their favourites section.</li>
    <li>Get random movie suggestions.&nbsp;</li>
    </ul>`,
    link: 'https://movie-buffed.herokuapp.com/',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Heroku'],
  },
];

const Project = () => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleProjectModal = (project) => {
    setModalContent(project);
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
    setModalContent({});
  };

  return (
    <VisiblityWrapper>
      <div className={classes.root}>
        <GridList
          tileData={projectList}
          listHeader="Recent Projects"
          onTileClick={handleProjectModal}
        />
        {showModal && (
          <CustomModal
            open={showModal}
            onClose={handleModalClose}
            title={modalContent.title}
            subtitle={`${modalContent.subtitle} | ${modalContent.published}`}
            closeButtonLabel="Close"
            fullScreen
          >
            <Link
              href={modalContent.link}
              target="__blank"
              style={{ textDecoration: 'none' }}
            >
              <Typography variant="h6" color="primary">
                Project Live Demo - {modalContent.link}
              </Typography>
            </Link>
            <div
              dangerouslySetInnerHTML={{ __html: modalContent.description }}
            />
            {!!modalContent.technologies && modalContent.technologies.length && (
              <div>
                <br />
                <Typography variant="h6">Technology Stack</Typography>
                <div className={classes.technologyContainer}>
                  {modalContent.technologies.map((tech) => {
                    return (
                      <Chip
                        color="secondary"
                        label={tech}
                        key={`${tech}`}
                        className={classes.chipTech}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            {!!modalContent.tags && modalContent.tags.length && (
              <div>
                <br />
                <>
                  <div
                    className={classnames(
                      classes.technologyContainer,
                      classes.tagsContainer
                    )}
                  >
                    <Chip
                      className={classes.tags}
                      label="Tags"
                      color="primary"
                    />
                    {modalContent.tags.map((tag) => {
                      return (
                        <Typography
                          key={`${tag}`}
                          className={classes.tags}
                          variant="body1"
                          color="primary"
                        >
                          {`#${tag}`}
                        </Typography>
                      );
                    })}
                  </div>
                </>
              </div>
            )}
          </CustomModal>
        )}
      </div>
    </VisiblityWrapper>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: '30px',
    overflow: 'hidden',
  },
  technologyContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    overflowX: 'scroll',
    overflowY: 'hidden',
    padding: '1%',
    paddingLeft: '0px',
    paddingRight: '0px',
    '&::-webkit-scrollbar': {
      height: '2px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '30%',
    },
  },
  chipTech: {
    margin: '0px 10px 0px 0px',
    transition: 'all 0.2s linear',
    '&:hover': {
      letterSpacing: '1px',
    },
  },
  tags: {
    margin: '0px 10px 0px 0px',
    whiteSpace: 'nowrap',
  },
  tagsContainer: {
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '30%',
    },
  },
}));

// Project.propTypes = {};

export default Project;
