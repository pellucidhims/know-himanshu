import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Typography,
  Tooltip,
  useMediaQuery,
  IconButton,
  Chip,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import VisiblityWrapper from '../../VisiblityWrapper/visiblityWrapper';
import { api } from '../../../utils';

const StoryCard = ({ link, title, thumbnail, description, categories }) => {
  const classes = useStyles();

  const handleReadMore = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className={classes.storyCardRoot}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={thumbnail}
          title={title}
          className={classes.cardMediaRoot}
        />
        <CardContent className={classes.cardContentRoot}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${description.slice(0, 100)}...`}
          </Typography>
          <div className={classes.tagsRoot}>
            {categories.map((tag) => {
              return (
                <Chip
                  label={tag}
                  variant="outlined"
                  color="primary"
                  key={tag}
                />
              );
            })}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleReadMore}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

StoryCard.defaultProps = {
  link: '',
  title: '',
  thumbnail: '',
  description: '',
  categories: [],
};

StoryCard.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
};

const StoryCarousel = ({ stories = [] }) => {
  const classes = useStyles();

  return (
    <div className={classes.storyCarouselRoot}>
      {stories.map((story) => {
        return <StoryCard key={story.guid} {...story} />;
      })}
    </div>
  );
};

StoryCarousel.defaultProps = {
  stories: [],
};

StoryCarousel.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.object),
};

const Blog = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:900px)');
  const [mediumStoriesData, setMediumStoriesData] = useState({});

  useEffect(() => {
    api
      .get(
        `${process.env.REACT_APP_MEDIUM_BLOG_URI}/${process.env.REACT_APP_MEDIUM_BLOG_USER_NAME}`
      )
      .then((response) => {
        setMediumStoriesData(response.data);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.error('Something went wrong fetching medium stories: ', err);
      });
  }, []);

  if (mediumStoriesData.items && mediumStoriesData.items.length) {
    const { feed, items } = mediumStoriesData;
    return (
      <VisiblityWrapper>
        <div className={classes.root}>
          <a
            href={feed.link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.headerIconLinkRoot}
          >
            <div className={classes.headerIcon}>
              <Typography variant="h5">{feed.title}</Typography>
              <IconButton
                aria-label="medium profile link"
                className={classes.icon}
              >
                <OpenInNewOutlinedIcon />
              </IconButton>
            </div>
          </a>
          <StoryCarousel stories={items} />
        </div>
      </VisiblityWrapper>
    );
  }
  return (
    <VisiblityWrapper>
      <div className={classes.root}>
        <div className={classes.innerRoot}>
          <div>
            <Typography variant="h3">Work in progress...</Typography>
            <Typography variant="h5">
              Watchout this space for some awesome content!
            </Typography>
          </div>
          <div>
            <Tooltip
              title="Yep! that's me coding..."
              placement="top-start"
              arrow
              className={classes.tooltip}
            >
              <img
                src={`${process.env.PUBLIC_URL}/workInProgressIcon.png`}
                className={classnames(classes.wipIcon, {
                  [classes.verticalWipIcon]: !matches,
                })}
                alt="blog"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </VisiblityWrapper>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%'
  },
  innerRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  wipIcon: {
    width: window.innerWidth / 3,
    height: window.innerHeight - 150,
    borderRadius: '30px',
    objectFit: 'cover',
  },
  verticalWipIcon: {
    width: window.innerWidth - 50,
  },
  tooltip: {
    backgroundColor: 'primary',
  },
  headerIconLinkRoot: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
    },
  },
  headerIcon: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '10px',
    textTransform: 'capitalize',
  },
  icon: {
    color: theme.palette.primary.main,
    width: '24px',
    height: '24px',
  },
  storyCarouselRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'scroll',
    padding: '10px',
    '&::-webkit-scrollbar': {},
    '&::-webkit-scrollbar-thumb': {},
  },
  storyCardRoot: {
    maxWidth: 250,
  },
  cardMediaRoot: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
  },
  cardContentRoot: {
    maxHeight: '300px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '5px',
      height: '5px',
      borderRadius: '50px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '50px',
    },
  },
  tagsRoot: {
    margin: '10px 0px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '5px',
  },
}));

export default Blog;
