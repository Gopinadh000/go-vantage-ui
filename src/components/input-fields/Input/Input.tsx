import React from 'react';
import { TextField, type TextFieldProps } from '@mui/material';

export type InputType = 'text' | 'password' | 'number' | 'email' | 'tel' | 'url' | 'search';

export type InputSize = 'small' | 'medium' | 'large';

export type AppInputProps = {
  type?: InputType;
  size?: InputSize;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  sx?: TextFieldProps['sx'];
} & Omit<TextFieldProps, 'type' | 'size' | 'fullWidth' | 'error' | 'helperText' | 'label' | 'placeholder' | 'value' | 'defaultValue' | 'disabled' | 'required' | 'autoFocus' | 'autoComplete' | 'onChange' | 'onBlur' | 'onFocus'>;

const AppInput: React.FC<AppInputProps> = ({
  type = 'text',
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
  autoComplete,
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
      type={type}
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
      autoComplete={autoComplete}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      sx={{
        ...(size === 'large' && {
          '& .MuiInputBase-input': {
            padding: '16.5px 14px',
            fontSize: '1rem',
          },
        }),
        ...sx,
      }}
      {...otherProps}
    />
  );
};

export default AppInput;



