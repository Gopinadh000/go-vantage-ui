import React from 'react';
import AppInput, { type AppInputProps, type InputType } from './Input/Input';
import AppTextarea, { type AppTextareaProps } from './textarea/Textarea';
import AppSelect, { type AppSelectProps, type SelectOption } from './select/Select';
import AppDatePicker, { type AppDatePickerProps } from './date-picker/DatePicker';
import AppTimePicker, { type AppTimePickerProps } from './time-picker/TimePicker';
import AppCheckbox, { type AppCheckboxProps } from './checkbox/Checkbox';
import AppRadio, { type AppRadioProps, type RadioOption } from './radio/Radio';
import AppToggle, { type AppToggleProps } from './toggle-btn/ToggleBtn';
import AppRichEditor, { type AppRichEditorProps } from './rich-editor/RichEditor';

export type InputFieldType =
  | 'text'
  | 'password'
  | 'number'
  | 'email'
  | 'tel'
  | 'url'
  | 'search'
  | 'textarea'
  | 'select'
  | 'date'
  | 'time'
  | 'checkbox'
  | 'radio'
  | 'toggle'
  | 'rich-editor';

export type InputFieldSize = 'small' | 'medium' | 'large';

// Base props shared by all input types
type BaseInputFieldProps = {
  type: InputFieldType;
  size?: InputFieldSize;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  value?: any;
  defaultValue?: any;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
};

// Type-specific props
type TextInputFieldProps = BaseInputFieldProps & {
  type: 'text' | 'password' | 'number' | 'email' | 'tel' | 'url' | 'search';
  inputType?: InputType;
} & Omit<AppInputProps, 'type' | 'size' | 'fullWidth' | 'error' | 'helperText' | 'label' | 'placeholder' | 'disabled' | 'required' | 'value' | 'defaultValue' | 'onChange' | 'onBlur' | 'onFocus'>;

type TextareaInputFieldProps = BaseInputFieldProps & {
  type: 'textarea';
  rows?: number;
  minRows?: number;
  maxRows?: number;
} & Omit<AppTextareaProps, 'size' | 'fullWidth' | 'error' | 'helperText' | 'label' | 'placeholder' | 'disabled' | 'required' | 'value' | 'defaultValue' | 'rows' | 'minRows' | 'maxRows' | 'onChange' | 'onBlur' | 'onFocus'>;

type SelectInputFieldProps = BaseInputFieldProps & {
  type: 'select';
  options: SelectOption[];
  multiple?: boolean;
} & Omit<AppSelectProps, 'size' | 'fullWidth' | 'error' | 'helperText' | 'label' | 'placeholder' | 'disabled' | 'required' | 'value' | 'defaultValue' | 'multiple' | 'options' | 'onChange' | 'onBlur' | 'onFocus'>;

type DateInputFieldProps = BaseInputFieldProps & {
  type: 'date';
  minDate?: string;
  maxDate?: string;
} & Omit<AppDatePickerProps, 'size' | 'fullWidth' | 'error' | 'helperText' | 'label' | 'placeholder' | 'disabled' | 'required' | 'value' | 'defaultValue' | 'minDate' | 'maxDate' | 'onChange' | 'onBlur' | 'onFocus'>;

type TimeInputFieldProps = BaseInputFieldProps & {
  type: 'time';
  minTime?: string;
  maxTime?: string;
} & Omit<AppTimePickerProps, 'size' | 'fullWidth' | 'error' | 'helperText' | 'label' | 'placeholder' | 'disabled' | 'required' | 'value' | 'defaultValue' | 'minTime' | 'maxTime' | 'onChange' | 'onBlur' | 'onFocus'>;

type CheckboxInputFieldProps = BaseInputFieldProps & {
  type: 'checkbox';
  indeterminate?: boolean;
} & Omit<AppCheckboxProps, 'size' | 'label' | 'value' | 'defaultValue' | 'disabled' | 'required' | 'error' | 'helperText' | 'indeterminate' | 'onChange'>;

type RadioInputFieldProps = BaseInputFieldProps & {
  type: 'radio';
  options: RadioOption[];
  row?: boolean;
} & Omit<AppRadioProps, 'size' | 'label' | 'options' | 'value' | 'defaultValue' | 'disabled' | 'required' | 'error' | 'helperText' | 'row' | 'onChange'>;

type ToggleInputFieldProps = BaseInputFieldProps & {
  type: 'toggle';
  labelPlacement?: 'start' | 'end' | 'top' | 'bottom';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
} & Omit<AppToggleProps, 'size' | 'label' | 'labelPlacement' | 'value' | 'defaultValue' | 'disabled' | 'required' | 'error' | 'helperText' | 'color' | 'onChange'>;

type RichEditorInputFieldProps = BaseInputFieldProps & {
  type: 'rich-editor';
  minRows?: number;
  maxRows?: number;
} & Omit<AppRichEditorProps, 'size' | 'fullWidth' | 'error' | 'helperText' | 'label' | 'placeholder' | 'disabled' | 'required' | 'value' | 'defaultValue' | 'minRows' | 'maxRows' | 'onChange' | 'onBlur' | 'onFocus'>;

export type InputFieldProps =
  | TextInputFieldProps
  | TextareaInputFieldProps
  | SelectInputFieldProps
  | DateInputFieldProps
  | TimeInputFieldProps
  | CheckboxInputFieldProps
  | RadioInputFieldProps
  | ToggleInputFieldProps
  | RichEditorInputFieldProps;

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    type,
    size = 'medium',
    fullWidth = false,
    error = false,
    helperText,
    label,
    placeholder,
    disabled = false,
    required = false,
    value,
    defaultValue,
    onChange,
    onBlur,
    onFocus,
  } = props;

  // Text inputs (text, password, number, email, tel, url, search)
  if (
    type === 'text' ||
    type === 'password' ||
    type === 'number' ||
    type === 'email' ||
    type === 'tel' ||
    type === 'url' ||
    type === 'search'
  ) {
    const textProps = props as TextInputFieldProps;
    const { type: _, inputType, ...restProps } = textProps;
    return (
      <AppInput
        type={inputType || type}
        size={size}
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
        {...restProps}
      />
    );
  }

  // Textarea
  if (type === 'textarea') {
    const textareaProps = props as TextareaInputFieldProps;
    const { type: _, rows, minRows, maxRows, ...restProps } = textareaProps;
    return (
      <AppTextarea
        size={size}
        fullWidth={fullWidth}
        error={error}
        helperText={helperText}
        label={label}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        rows={rows}
        minRows={minRows}
        maxRows={maxRows}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        {...restProps}
      />
    );
  }

  // Select
  if (type === 'select') {
    const selectProps = props as SelectInputFieldProps;
    const { type: _, multiple, options, ...restProps } = selectProps;
    return (
      <AppSelect
        size={size}
        fullWidth={fullWidth}
        error={error}
        helperText={helperText}
        label={label}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        multiple={multiple}
        options={options}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        {...restProps}
      />
    );
  }

  // Date picker
  if (type === 'date') {
    const dateProps = props as DateInputFieldProps;
    const { type: _, minDate, maxDate, ...restProps } = dateProps;
    return (
      <AppDatePicker
        size={size}
        fullWidth={fullWidth}
        error={error}
        helperText={helperText}
        label={label}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        minDate={minDate}
        maxDate={maxDate}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        {...restProps}
      />
    );
  }

  // Time picker
  if (type === 'time') {
    const timeProps = props as TimeInputFieldProps;
    const { type: _, minTime, maxTime, ...restProps } = timeProps;
    return (
      <AppTimePicker
        size={size}
        fullWidth={fullWidth}
        error={error}
        helperText={helperText}
        label={label}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        minTime={minTime}
        maxTime={maxTime}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        {...restProps}
      />
    );
  }

  // Checkbox
  if (type === 'checkbox') {
    const checkboxProps = props as CheckboxInputFieldProps;
    const { type: _, indeterminate, ...restProps } = checkboxProps;
    return (
      <AppCheckbox
        size={size}
        label={label}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        error={error}
        helperText={helperText}
        indeterminate={indeterminate}
        onChange={onChange}
        {...restProps}
      />
    );
  }

  // Radio
  if (type === 'radio') {
    const radioProps = props as RadioInputFieldProps;
    const { type: _, options, row, ...restProps } = radioProps;
    return (
      <AppRadio
        size={size}
        label={label}
        options={options}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        error={error}
        helperText={helperText}
        row={row}
        onChange={onChange}
        {...restProps}
      />
    );
  }

  // Toggle
  if (type === 'toggle') {
    const toggleProps = props as ToggleInputFieldProps;
    const { type: _, labelPlacement, color, ...restProps } = toggleProps;
    return (
      <AppToggle
        size={size}
        label={label}
        labelPlacement={labelPlacement}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        error={error}
        helperText={helperText}
        color={color}
        onChange={onChange}
        {...restProps}
      />
    );
  }

  // Rich editor
  if (type === 'rich-editor') {
    const richEditorProps = props as RichEditorInputFieldProps;
    const { type: _, minRows, maxRows, ...restProps } = richEditorProps;
    return (
      <AppRichEditor
        size={size}
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
        {...restProps}
      />
    );
  }

  return null;
};

export default InputField;

