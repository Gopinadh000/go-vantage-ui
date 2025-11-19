import React from 'react';
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
  type SelectProps as MuiSelectProps,
  type FormControlProps,
} from '@mui/material';

export type SelectSize = 'small' | 'medium' | 'large';

export type SelectOption = {
  value: string | number;
  label: string;
  disabled?: boolean;
};

export type AppSelectProps = {
  size?: SelectSize;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  placeholder?: string;
  value?: string | number | (string | number)[];
  defaultValue?: string | number | (string | number)[];
  disabled?: boolean;
  required?: boolean;
  multiple?: boolean;
  options: SelectOption[];
  onChange?: (event: { target: { value: string | number | (string | number)[] } }) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  sx?: FormControlProps['sx'];
} & Omit<MuiSelectProps, 'size' | 'fullWidth' | 'error' | 'label' | 'value' | 'defaultValue' | 'disabled' | 'required' | 'multiple' | 'onChange' | 'onBlur' | 'onFocus'>;

const AppSelect: React.FC<AppSelectProps> = ({
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
  multiple = false,
  options,
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

  const handleChange = (event: { target: { value: unknown } }) => {
    if (onChange) {
      onChange(event as { target: { value: string | number | (string | number)[] } });
    }
  };

  return (
    <FormControl
      fullWidth={fullWidth}
      error={error}
      disabled={disabled}
      required={required}
      size={getSize()}
      sx={sx}
    >
      {label && <InputLabel id={`select-label-${label}`}>{label}</InputLabel>}
      <MuiSelect
        labelId={label ? `select-label-${label}` : undefined}
        label={label}
        value={value ?? (multiple ? [] : '')}
        defaultValue={defaultValue}
        multiple={multiple}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        displayEmpty={!!placeholder}
        renderValue={(selected) => {
          if (multiple) {
            const selectedArray = selected as (string | number)[];
            if (selectedArray.length === 0) {
              return <span style={{ color: '#999' }}>{placeholder || 'Select...'}</span>;
            }
            return selectedArray
              .map((val) => options.find((opt) => opt.value === val)?.label)
              .filter(Boolean)
              .join(', ');
          }
          if (!selected || selected === '') {
            return <span style={{ color: '#999' }}>{placeholder || 'Select...'}</span>;
          }
          return options.find((opt) => opt.value === selected)?.label || String(selected);
        }}
        {...otherProps}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default AppSelect;


