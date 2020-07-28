import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { ListSubheader } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import PropTypes from 'prop-types';
import CustomizedTimeline from '../CustomizedTimeline/customizedTimeline';

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const CustomGridList = (props) => {
  const classes = useStyles();
  const { listHeader = '', tileData } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={2}
          rows={2}
          style={{
            height: 'auto',
            position: 'sticky',
            top: 0,
            zIndex: 999,
            backgroundColor: '#fff',
            boxShadow: '0px 0px 40px 1px gray',
          }}
        >
          <ListSubheader
            component="div"
            style={{ fontSize: '24px', textTransform: 'uppercase' }}
          >
            {listHeader}
          </ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={1}
            rows={2}
            className={classes.listTileRoot}
          >
            <div style={{ overflow: 'hidden' }}>
              <img
                src={tile.img}
                alt={tile.title}
                className={classes.listTileImage}
              />
            </div>
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
              className={classes.listTileBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '75%',
    height: window.innerHeight - 150,
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
      borderRadius: '30%',
    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  listTileRoot: {
    borderLeft: '0.1px solid gray',
    borderBottom: '0.1px solid gray',
    '&:hover $listTileImage': {
      transform: 'scale(1.2,1.2)',
    },
    '&:hover $listTileBar': {
      opacity: 1,
    },
  },
  listTileImage: {
    transition: 'transform 0.2s linear',
    width: '100%',
    height: '100%',
  },
  listTileBar: {
    opacity: 0,
    transition: 'opacity 0.2s linear',
  },
}));

CustomGridList.propTypes = {
  listHeader: PropTypes.string,
  tileData: PropTypes.arrayOf(PropTypes.object),
};

CustomGridList.defaultProps = {
  listHeader: '',
  tileData: [],
};

export default CustomizedTimeline;
