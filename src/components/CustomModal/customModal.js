import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Slide } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle
      disableTypography
      className={classnames(classes.root)}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const CustomModal = (props) => {
  const {
    title,
    subtitle,
    closeButtonLabel,
    children,
    open,
    onClose,
    ...otherProps
  } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        {...otherProps}
        TransitionComponent={Transition}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant="h6">{title}</Typography>
          {!!subtitle && subtitle && (
            <>
              <br />
              <Typography variant="subtitle1" color="textSecondary">
                {subtitle}
              </Typography>
            </>
          )}
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            {closeButtonLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

CustomModal.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  closeButtonLabel: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

CustomModal.defaultProps = {
  subtitle: '',
  closeButtonLabel: 'Close',
};

export default CustomModal;
