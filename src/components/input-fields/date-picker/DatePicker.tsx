import React from 'react';
import { TextField, type TextFieldProps } from '@mui/material';

export type DatePickerSize = 'small' | 'medium' | 'large';

export type AppDatePickerProps = {
  size?: DatePickerSize;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  minDate?: string;
  maxDate?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  sx?: TextFieldProps['sx'];
} & Omit<TextFieldProps, 'type' | 'size' | 'fullWidth' | 'error' | 'helperText' | 'label' | 'placeholder' | 'value' | 'defaultValue' | 'disabled' | 'required' | 'onChange' | 'onBlur' | 'onFocus'>;

const AppDatePicker: React.FC<AppDatePickerProps> = ({
  size = 'medium',
  fullWidth = false,
  error = false,
  helperText,
  label,
  placeholder = 'Select date',
  value,
  defaultValue,
  disabled = false,
  required = false,
  minDate,
  maxDate,
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
      type="date"
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
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min: minDate,
        max: maxDate,
      }}
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

export default AppDatePicker;



