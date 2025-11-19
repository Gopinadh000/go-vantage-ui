import React, { type ReactNode } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Slide,
  Dialog,
  DialogContent,
  DialogActions,
  type SlideProps,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

type ModalType = 'side' | 'center';
type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type ModalComponentProps = {
  open: boolean;
  onClose: () => void;
  modalType?: ModalType;
  size?: ModalSize;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
};

const ModalComponent: React.FC<ModalComponentProps> = ({
  open,
  onClose,
  modalType = 'center',
  size = 'md',
  title,
  children,
  footer,
  header,
}) => {
  // Size mappings for center modal
  const centerSizeMap: Record<ModalSize, string> = {
    sm: '400px',
    md: '600px',
    lg: '800px',
    xl: '1000px',
    xxl: '1200px',
  };

  // Size mappings for side drawer (width)
  const sideSizeMap: Record<ModalSize, string> = {
    sm: '320px',
    md: '480px',
    lg: '640px',
    xl: '800px',
    xxl: '960px',
  };

  // Render header with title and close button
  const renderHeader = () => {
    if (header) {
      return header;
    }

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          minHeight: 64,
        }}
      >
        {title && (
          <Typography variant="h6" component="h2" sx={{ flex: 1 }}>
            {title}
          </Typography>
        )}
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            marginLeft: title ? 2 : 'auto',
            borderRadius: '0%',

            '&:hover': {
            border : '0.5px solid #888'
          }}}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Box>
    );
  };

  // Render body with scrollable content
  const renderBody = () => {
    return (
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          padding: 2,
          minHeight: 0,
        }}
      >
        {children}
      </Box>
    );
  };

  // Render footer
  const renderFooter = () => {
    if (!footer) return null;

    return (
      <Box
        sx={{
          padding: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          minHeight: 64,
        }}
      >
        {footer}
      </Box>
    );
  };

  // Side modal (Drawer from right)
  if (modalType === 'side') {
    return (
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        SlideProps={{
          direction: 'left',
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: sideSizeMap[size],
            maxWidth: '100vw',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          },
        }}
      >
        {renderHeader()}
        {renderBody()}
        {renderFooter()}
      </Drawer>
    );
  }

  // Center modal (Dialog)
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: centerSizeMap[size],
          maxWidth: '90vw',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          margin: 2,
        },
      }}
      TransitionComponent={Slide}
      TransitionProps={
        {
          direction: 'up',
        } as SlideProps
      }
    >
      {renderHeader()}
      <DialogContent
        sx={{
          flex: 1,
          overflow: 'auto',
          padding: 0,
          minHeight: 0,
          '&.MuiDialogContent-root': {
            paddingTop: 0,
          },
        }}
      >
        <Box sx={{ padding: 2 }}>{children}</Box>
      </DialogContent>
      {footer && (
        <DialogActions
          sx={{
            padding: 0,
            borderTop: '1px solid',
            borderColor: 'divider',
            minHeight: 64,
          }}
        >
          <Box sx={{ width: '100%', padding: 2 }}>{footer}</Box>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default ModalComponent;

