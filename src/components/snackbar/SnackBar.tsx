import React, { type ReactNode } from 'react';
import {
  Snackbar as MuiSnackbar,
  Alert,
  IconButton,
  type SnackbarProps as MuiSnackbarProps,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

type SnackbarSeverity = 'success' | 'error' | 'info' | 'warning';
type SnackbarVariant = 'standard' | 'filled' | 'outlined';
type SnackbarPosition = {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
};

type AppSnackbarProps = {
  open: boolean;
  onClose?: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  message: string;
  severity?: SnackbarSeverity;
  variant?: SnackbarVariant;
  autoHideDuration?: number | null;
  position?: SnackbarPosition;
  showCloseButton?: boolean;
  action?: ReactNode;
  anchorOrigin?: SnackbarPosition;
  sx?: MuiSnackbarProps['sx'];
};

const AppSnackbar: React.FC<AppSnackbarProps> = ({
  open,
  onClose,
  message,
  severity = 'info',
  variant = 'standard',
  autoHideDuration = 6000,
  position,
  showCloseButton = true,
  action,
  anchorOrigin,
  sx,
}) => {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    if (onClose) {
      onClose(event, reason);
    }
  };

  // Determine anchor origin
  const finalAnchorOrigin: SnackbarPosition = anchorOrigin || position || {
    vertical: 'bottom',
    horizontal: 'left',
  };

  // Render close button if enabled
  const renderCloseButton = () => {
    if (!showCloseButton) return null;

    return (
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        sx={{ marginLeft: 1 }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    );
  };

  // Render action (custom action or close button)
  const renderAction = () => {
    if (action) {
      return (
        <>
          {action}
          {showCloseButton && renderCloseButton()}
        </>
      );
    }
    return showCloseButton ? renderCloseButton() : undefined;
  };

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={finalAnchorOrigin}
      sx={sx}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant={variant}
        action={renderAction()}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default AppSnackbar;
