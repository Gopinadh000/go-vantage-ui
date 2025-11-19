import React, { type ReactNode } from 'react';
import {
  Popover as MuiPopover,
  Box,
  type PopoverProps as MuiPopoverProps,
  type SxProps,
  type Theme,
} from '@mui/material';

type PopoverAnchorOrigin = {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
};

type PopoverTransformOrigin = {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
};

type AppPopoverProps = {
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
  children: ReactNode;
  arrow?: boolean;
  anchorOrigin?: PopoverAnchorOrigin;
  transformOrigin?: PopoverTransformOrigin;
  paperProps?: {
    elevation?: number;
    sx?: SxProps<Theme>;
  };
  maxWidth?: number | string;
  minWidth?: number | string;
  maxHeight?: number | string;
  disableAutoFocus?: boolean;
  disableEnforceFocus?: boolean;
  disableRestoreFocus?: boolean;
  sx?: MuiPopoverProps['sx'];
};

const AppPopover: React.FC<AppPopoverProps> = ({
  open,
  onClose,
  anchorEl,
  children,
  arrow = false,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin = {
    vertical: 'top',
    horizontal: 'left',
  },
  paperProps,
  maxWidth,
  minWidth,
  maxHeight,
  disableAutoFocus = false,
  disableEnforceFocus = false,
  disableRestoreFocus = false,
  sx,
}) => {
  // Arrow component
  const renderArrow = () => {
    if (!arrow) return null;

    const getArrowPosition = () => {
      const vertical = anchorOrigin.vertical;
      const horizontal = anchorOrigin.horizontal;

      if (vertical === 'top') {
        return {
          bottom: '-8px',
          left: horizontal === 'left' ? '16px' : horizontal === 'right' ? 'calc(100% - 16px)' : '50%',
          transform: horizontal === 'center' ? 'translateX(-50%)' : 'none',
        };
      } else if (vertical === 'bottom') {
        return {
          top: '-8px',
          left: horizontal === 'left' ? '16px' : horizontal === 'right' ? 'calc(100% - 16px)' : '50%',
          transform: horizontal === 'center' ? 'translateX(-50%)' : 'none',
        };
      } else {
        // center vertical
        if (horizontal === 'left') {
          return {
            right: '-8px',
            top: '50%',
            transform: 'translateY(-50%)',
          };
        } else if (horizontal === 'right') {
          return {
            left: '-8px',
            top: '50%',
            transform: 'translateY(-50%)',
          };
        }
      }

      return {};
    };

    const arrowPosition = getArrowPosition();
    const isVertical = anchorOrigin.vertical === 'top' || anchorOrigin.vertical === 'bottom';

    return (
      <Box
        sx={{
          position: 'absolute',
          width: 0,
          height: 0,
          ...arrowPosition,
          ...(isVertical
            ? {
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: anchorOrigin.vertical === 'top' ? '8px solid' : 'none',
                borderBottom: anchorOrigin.vertical === 'bottom' ? '8px solid' : 'none',
                borderTopColor: 'background.paper',
                borderBottomColor: 'background.paper',
              }
            : {
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                borderLeft: anchorOrigin.horizontal === 'left' ? '8px solid' : 'none',
                borderRight: anchorOrigin.horizontal === 'right' ? '8px solid' : 'none',
                borderLeftColor: 'background.paper',
                borderRightColor: 'background.paper',
              }),
        }}
      />
    );
  };

  return (
    <MuiPopover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      disableAutoFocus={disableAutoFocus}
      disableEnforceFocus={disableEnforceFocus}
      disableRestoreFocus={disableRestoreFocus}
      sx={sx}
      slotProps={{
        paper: {
          elevation: paperProps?.elevation ?? 8,
          sx: {
            position: 'relative',
            ...(maxWidth && { maxWidth }),
            ...(minWidth && { minWidth }),
            ...(maxHeight && { maxHeight, overflow: 'auto' }),
            ...paperProps?.sx,
          },
        },
      }}
    >
      {arrow && renderArrow()}
      <Box sx={{ p: 2 }}>{children}</Box>
    </MuiPopover>
  );
};

export default AppPopover;
