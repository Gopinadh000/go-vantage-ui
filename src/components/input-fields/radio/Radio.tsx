import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio as MuiRadio,
  FormHelperText,
  type RadioProps as MuiRadioProps,
} from '@mui/material';

export type RadioSize = 'small' | 'medium' | 'large';

export type RadioOption = {
  value: string | number;
  label: string;
  disabled?: boolean;
};

export type AppRadioProps = {
  size?: RadioSize;
  label?: string;
  options: RadioOption[];
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  row?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  sx?: MuiRadioProps['sx'];
} & Omit<MuiRadioProps, 'size' | 'checked' | 'defaultChecked' | 'disabled' | 'required' | 'onChange'>;

const AppRadio: React.FC<AppRadioProps> = ({
  size = 'medium',
  label,
  options,
  value,
  defaultValue,
  disabled = false,
  required = false,
  error = false,
  helperText,
  row = false,
  onChange,
  sx,
  ...otherProps
}) => {
  const getSize = (): 'small' | 'medium' => {
    if (size === 'large') return 'medium';
    return size;
  };

  return (
    <FormControl
      component="fieldset"
      error={error}
      required={required}
      disabled={disabled}
      sx={sx}
    >
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup
        row={row}
        value={value ?? ''}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<MuiRadio size={getSize()} {...otherProps} />}
            label={option.label}
            disabled={option.disabled || disabled}
          />
        ))}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default AppRadio;



