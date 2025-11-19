import React, { type ReactNode } from 'react';
import { Typography as MuiTypography, type TypographyProps as MuiTypographyProps } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

type TypographyType = 'page-name' | 'component-name' | 'body-text' | 'body-soft-text';

type AppTypographyProps = {
  children: ReactNode;
  type: TypographyType;
  className?: string;
  sx?: SxProps<Theme>;
  component?: React.ElementType;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  variant?: MuiTypographyProps['variant'];
};

const AppTypography: React.FC<AppTypographyProps> = ({
  children,
  type,
  className,
  sx,
  component,
  align,
  gutterBottom,
  noWrap,
  paragraph,
  variant,
}) => {
  // Get base styles based on type
  const getTypeStyles = (): SxProps<Theme> => {
    switch (type) {
      case 'page-name':
        return {
          fontSize: '2rem', // 32px
          fontWeight: 700,
          lineHeight: 1.2,
          color: 'text.primary',
          letterSpacing: '-0.02em',
        };
      case 'component-name':
        return {
          fontSize: '1.5rem', // 24px
          fontWeight: 600,
          lineHeight: 1.3,
          color: 'text.primary',
          letterSpacing: '-0.01em',
        };
      case 'body-text':
        return {
          fontSize: '1rem', // 16px
          fontWeight: 400,
          lineHeight: 1.5,
          color: 'text.primary',
        };
      case 'body-soft-text':
        return {
          fontSize: '1rem', // 16px
          fontWeight: 400,
          lineHeight: 1.5,
          color: 'text.secondary',
          opacity: 0.7,
        };
      default:
        return {};
    }
  };

  // Determine MUI variant based on type if not explicitly provided
  const getMuiVariant = (): MuiTypographyProps['variant'] => {
    if (variant) return variant;
    
    switch (type) {
      case 'page-name':
        return 'h1';
      case 'component-name':
        return 'h2';
      case 'body-text':
      case 'body-soft-text':
        return 'body1';
      default:
        return 'body1';
    }
  };

  const typeStyles = getTypeStyles();
  const muiVariant = getMuiVariant();

  const typographyProps: MuiTypographyProps = {
    variant: muiVariant,
    align,
    gutterBottom,
    noWrap,
    paragraph,
    className,
    sx: [typeStyles, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])],
  };

  if (component) {
    typographyProps.component = component;
  }

  return (
    <MuiTypography {...typographyProps}>
      {children}
    </MuiTypography>
  );
};

export default AppTypography;

