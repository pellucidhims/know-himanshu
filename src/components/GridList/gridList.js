import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { ListSubheader } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import PropTypes from 'prop-types';

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
  const { listHeader = '', tileData, onTileClick } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={2}
          style={{
            height: 'fit-content',
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
            rows={1}
            className={classes.listTileRoot}
            onClick={() => onTileClick(tile)}
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
              subtitle={<span>{tile.subtitle}</span>}
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
    '&:hover $listTileImage': {
      transform: 'scale(1.2,1.2)',
    },
  },
  listTileImage: {
    transition: 'transform 0.2s linear',
    width: '100%',
    height: '100%',
  },
  listTileBar: {
    transition: 'opacity 0.2s linear',
    cursor: 'pointer',
  },
}));

CustomGridList.propTypes = {
  listHeader: PropTypes.string,
  tileData: PropTypes.arrayOf(PropTypes.object),
  onTileClick: PropTypes.func,
};

CustomGridList.defaultProps = {
  listHeader: '',
  tileData: [],
  onTileClick: () => {},
};

export default CustomGridList;
