import React, { useState } from 'react';
import { TextField, type TextFieldProps } from '@mui/material';

export type RichEditorSize = 'small' | 'medium' | 'large';

export type AppRichEditorProps = {
  size?: RichEditorSize;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  minRows?: number;
  maxRows?: number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  sx?: TextFieldProps['sx'];
} & Omit<TextFieldProps, 'multiline' | 'size' | 'fullWidth' | 'error' | 'helperText' | 'label' | 'placeholder' | 'value' | 'defaultValue' | 'disabled' | 'required' | 'minRows' | 'maxRows' | 'onChange' | 'onBlur' | 'onFocus'>;

const AppRichEditor: React.FC<AppRichEditorProps> = ({
  size = 'medium',
  fullWidth = false,
  error = false,
  helperText,
  label,
  placeholder = 'Start typing...',
  value,
  defaultValue,
  disabled = false,
  required = false,
  minRows = 4,
  maxRows = 10,
  onChange,
  onBlur,
  onFocus,
  sx,
  ...otherProps
}) => {
  const getSize = (): 'small' | 'medium' => {
    if (size === 'large') return 'medium';
    return size;
  };

  // For now, using a styled textarea. In production, you might want to integrate
  // a rich text editor library like Draft.js, Slate, or Quill
  return (
    <TextField
      multiline
      size={getSize()}
      fullWidth={fullWidth}
      error={error}
      helperText={helperText}
      label={label}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      required={required}
      minRows={minRows}
      maxRows={maxRows}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      sx={{
        ...(size === 'large' && {
          '& .MuiInputBase-input': {
            fontSize: '1rem',
          },
        }),
        '& .MuiInputBase-input': {
          fontFamily: 'monospace',
        },
        ...sx,
      }}
      {...otherProps}
    />
  );
};

export default AppRichEditor;


