import React, { type ReactNode, type ReactElement } from 'react';
import { Chip as MuiChip, Avatar } from '@mui/material';
import type { ChipProps as MuiChipProps } from '@mui/material';

type ChipColor = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
type ChipSize = 'small' | 'medium';
type ChipVariant = 'filled' | 'outlined';
type ChipShape = 'rounded' | 'square' | 'rounded-corners';

type AppChipProps = {
  label: string;
  onClick?: () => void;
  onDelete?: () => void;
  disabled?: boolean;
  color?: ChipColor;
  backgroundColor?: string;
  customIcon?: ReactElement;
  avatarChip?: {
    src?: string;
    alt?: string;
    children?: ReactNode;
  };
  size?: ChipSize;
  variant?: ChipVariant;
  shape?: ChipShape;
  deleteIcon?: ReactElement;
  sx?: MuiChipProps['sx'];
};

const AppChip: React.FC<AppChipProps> = ({
  label,
  onClick,
  onDelete,
  disabled = false,
  color = 'default',
  backgroundColor,
  customIcon,
  avatarChip,
  size = 'medium',
  variant = 'filled',
  shape = 'rounded',
  deleteIcon,
  sx,
}) => {
  // Get border radius based on shape
  const getBorderRadius = () => {
    switch (shape) {
      case 'square':
        return '0px';
      case 'rounded-corners':
        return '4px';
      case 'rounded':
      default:
        return '16px'; // Default MUI chip border radius
    }
  };

  // Build custom sx styles
  const customSx = {
    borderRadius: getBorderRadius(),
    ...(backgroundColor && {
      backgroundColor: variant === 'outlined' ? 'transparent' : backgroundColor,
      ...(variant === 'outlined' && {
        borderColor: backgroundColor,
        color: backgroundColor,
      }),
    }),
    ...sx,
  };

  // Render avatar if provided
  const renderAvatar = () => {
    if (!avatarChip) return undefined;

    if (avatarChip.src) {
      return (
        <Avatar
          src={avatarChip.src}
          alt={avatarChip.alt || label}
          sx={{ width: size === 'small' ? 20 : 24, height: size === 'small' ? 20 : 24 }}
        />
      );
    }

    if (avatarChip.children) {
      return (
        <Avatar sx={{ width: size === 'small' ? 20 : 24, height: size === 'small' ? 20 : 24 }}>
          {avatarChip.children}
        </Avatar>
      );
    }

    return undefined;
  };

  return (
    <MuiChip
      label={label}
      onClick={onClick}
      onDelete={onDelete}
      disabled={disabled}
      color={color}
      icon={customIcon}
      avatar={renderAvatar()}
      size={size}
      variant={variant}
      deleteIcon={deleteIcon}
      sx={customSx}
    />
  );
};

export default AppChip;
