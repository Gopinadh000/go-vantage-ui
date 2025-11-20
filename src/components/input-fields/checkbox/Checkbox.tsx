import React from 'react';
import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  FormHelperText,
  FormControl,
  type CheckboxProps as MuiCheckboxProps,
} from '@mui/material';

export type CheckboxSize = 'small' | 'medium' | 'large';

export type AppCheckboxProps = {
  size?: CheckboxSize;
  label?: string;
  value?: boolean;
  defaultValue?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  indeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  sx?: MuiCheckboxProps['sx'];
} & Omit<MuiCheckboxProps, 'size' | 'checked' | 'defaultChecked' | 'disabled' | 'required' | 'indeterminate' | 'onChange'>;

const AppCheckbox: React.FC<AppCheckboxProps> = ({
  size = 'medium',
  label,
  value,
  defaultValue,
  disabled = false,
  required = false,
  error = false,
  helperText,
  indeterminate = false,
  onChange,
  sx,
  ...otherProps
}) => {
  const getSize = (): 'small' | 'medium' => {
    if (size === 'large') return 'medium';
    return size;
  };

  const checkbox = (
    <MuiCheckbox
      size={getSize()}
      checked={value ?? false}
      defaultChecked={defaultValue}
      disabled={disabled}
      required={required}
      indeterminate={indeterminate}
      onChange={onChange}
      sx={sx}
      {...otherProps}
    />
  );

  if (label) {
    return (
      <FormControl error={error} required={required} disabled={disabled}>
        <FormControlLabel
          control={checkbox}
          label={label}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }

  return checkbox;
};

export default AppCheckbox;



