import React from 'react';
import { TextField, type TextFieldProps } from '@mui/material';

export type TextareaSize = 'small' | 'medium' | 'large';

export type AppTextareaProps = {
  size?: TextareaSize;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  rows?: number;
  minRows?: number;
  maxRows?: number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  sx?: TextFieldProps['sx'];
} & Omit<TextFieldProps, 'multiline' | 'size' | 'fullWidth' | 'error' | 'helperText' | 'label' | 'placeholder' | 'value' | 'defaultValue' | 'disabled' | 'required' | 'autoFocus' | 'rows' | 'minRows' | 'maxRows' | 'onChange' | 'onBlur' | 'onFocus'>;

const AppTextarea: React.FC<AppTextareaProps> = ({
  size = 'medium',
  fullWidth = false,
  error = false,
  helperText,
  label,
  placeholder,
  value,
  defaultValue,
  disabled = false,
  required = false,
  autoFocus = false,
  rows,
  minRows = 3,
  maxRows,
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
      autoFocus={autoFocus}
      rows={rows}
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
        ...sx,
      }}
      {...otherProps}
    />
  );
};

export default AppTextarea;



