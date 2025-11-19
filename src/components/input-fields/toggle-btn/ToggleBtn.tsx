import React from 'react';
import {
  FormControlLabel,
  Switch,
  FormHelperText,
  FormControl,
  type SwitchProps,
} from '@mui/material';

export type ToggleSize = 'small' | 'medium' | 'large';

export type AppToggleProps = {
  size?: ToggleSize;
  label?: string;
  labelPlacement?: 'start' | 'end' | 'top' | 'bottom';
  value?: boolean;
  defaultValue?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  sx?: SwitchProps['sx'];
} & Omit<SwitchProps, 'size' | 'checked' | 'defaultChecked' | 'disabled' | 'required' | 'color' | 'onChange'>;

const AppToggle: React.FC<AppToggleProps> = ({
  size = 'medium',
  label,
  labelPlacement = 'end',
  value,
  defaultValue,
  disabled = false,
  required = false,
  error = false,
  helperText,
  color = 'primary',
  onChange,
  sx,
  ...otherProps
}) => {
  const getSize = (): 'small' | 'medium' => {
    if (size === 'large') return 'medium';
    return size;
  };

  const switchComponent = (
    <Switch
      size={getSize()}
      checked={value ?? false}
      defaultChecked={defaultValue}
      disabled={disabled}
      required={required}
      color={color}
      onChange={onChange}
      sx={sx}
      {...otherProps}
    />
  );

  if (label) {
    return (
      <FormControl error={error} required={required} disabled={disabled}>
        <FormControlLabel
          control={switchComponent}
          label={label}
          labelPlacement={labelPlacement}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }

  return switchComponent;
};

export default AppToggle;


