import React from 'react';
import {
  CircularProgress,
  LinearProgress,
  Box,
  Typography,
  type CircularProgressProps,
  type LinearProgressProps,
} from '@mui/material';

type SpinnerType = 'circle' | 'linear';
type SpinnerSize = 'sm' | 'md' | 'xl';
type SpinnerColor = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';

type AppSpinnerProps = {
  type?: SpinnerType;
  size?: SpinnerSize;
  color?: SpinnerColor;
  label?: string;
  value?: number;
  variant?: 'determinate' | 'indeterminate' | 'buffer';
  thickness?: number;
  sx?: CircularProgressProps['sx'] | LinearProgressProps['sx'];
} & (
  | { type?: 'circle'; variant?: 'determinate' | 'indeterminate' }
  | { type: 'linear'; variant?: 'determinate' | 'indeterminate' | 'buffer' }
);

const AppSpinner: React.FC<AppSpinnerProps> = ({
  type = 'circle',
  size = 'md',
  color = 'primary',
  label,
  value,
  variant = 'indeterminate',
  thickness,
  sx,
}) => {
  // Size mappings for circular progress
  const circularSizeMap: Record<SpinnerSize, number> = {
    sm: 24,
    md: 40,
    xl: 64,
  };

  // Size mappings for linear progress (height)
  const linearSizeMap: Record<SpinnerSize, number> = {
    sm: 4,
    md: 6,
    xl: 8,
  };

  // Thickness for circular progress
  const getThickness = () => {
    if (thickness !== undefined) return thickness;
    switch (size) {
      case 'sm':
        return 3.6;
      case 'md':
        return 4;
      case 'xl':
        return 4.4;
      default:
        return 4;
    }
  };

  // Render circular progress
  const renderCircular = () => {
    const circularSize = circularSizeMap[size];
    const circularThickness = getThickness();
    // CircularProgress only supports 'determinate' | 'indeterminate'
    const circularVariant = variant === 'buffer' ? 'indeterminate' : (variant as 'determinate' | 'indeterminate' | undefined);

    const progress = (
      <CircularProgress
        size={circularSize}
        color={color}
        value={value}
        variant={circularVariant}
        thickness={circularThickness}
        sx={sx}
      />
    );

    if (label) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {progress}
          <Typography
            variant={size === 'sm' ? 'caption' : size === 'md' ? 'body2' : 'body1'}
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            {label}
          </Typography>
        </Box>
      );
    }

    return progress;
  };

  // Render linear progress
  const renderLinear = () => {
    const linearHeight = linearSizeMap[size];

    const progress = (
      <LinearProgress
        color={color}
        value={value}
        variant={variant}
        sx={{
          height: linearHeight,
          borderRadius: 1,
          ...sx,
        }}
      />
    );

    if (label) {
      return (
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 0.5,
            }}
          >
            <Typography
              variant={size === 'sm' ? 'caption' : size === 'md' ? 'body2' : 'body1'}
              color="text.secondary"
            >
              {label}
            </Typography>
            {variant === 'determinate' && value !== undefined && (
              <Typography
                variant={size === 'sm' ? 'caption' : size === 'md' ? 'body2' : 'body1'}
                color="text.secondary"
              >
                {Math.round(value)}%
              </Typography>
            )}
          </Box>
          {progress}
        </Box>
      );
    }

    return progress;
  };

  return type === 'circle' ? renderCircular() : renderLinear();
};

export default AppSpinner;
