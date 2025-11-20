# Input Fields Components

A unified input field system that supports all common input types in one easy-to-use component.

## Quick Start

```tsx
import { InputField } from './components/input-fields';

// Text input
<InputField 
  type="text" 
  label="Name" 
  placeholder="Enter your name"
  fullWidth
/>

// Password input
<InputField 
  type="password" 
  label="Password" 
  fullWidth
/>

// Select (single)
<InputField 
  type="select"
  label="Choose Option"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]}
  fullWidth
/>

// Select (multiple)
<InputField 
  type="select"
  label="Choose Options"
  multiple
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]}
  fullWidth
/>

// Date picker
<InputField 
  type="date" 
  label="Select Date"
  fullWidth
/>

// Time picker
<InputField 
  type="time" 
  label="Select Time"
  fullWidth
/>

// Textarea
<InputField 
  type="textarea" 
  label="Message"
  minRows={4}
  maxRows={8}
  fullWidth
/>

// Checkbox
<InputField 
  type="checkbox" 
  label="Accept terms"
/>

// Radio
<InputField 
  type="radio"
  label="Choose Option"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]}
/>

// Toggle
<InputField 
  type="toggle" 
  label="Enable notifications"
/>

// Rich Editor
<InputField 
  type="rich-editor" 
  label="Content"
  minRows={4}
  maxRows={10}
  fullWidth
/>
```

## Supported Input Types

- **Text inputs**: `text`, `password`, `number`, `email`, `tel`, `url`, `search`
- **Textarea**: `textarea`
- **Select**: `select` (supports single and multiple selection)
- **Date Picker**: `date`
- **Time Picker**: `time`
- **Checkbox**: `checkbox`
- **Radio**: `radio`
- **Toggle**: `toggle`
- **Rich Editor**: `rich-editor`

## Common Props

All input types support these common props:

- `type`: The input type (required)
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `fullWidth`: Boolean (default: `false`)
- `error`: Boolean (default: `false`)
- `helperText`: String
- `label`: String
- `placeholder`: String
- `disabled`: Boolean (default: `false`)
- `required`: Boolean (default: `false`)
- `value`: Current value
- `defaultValue`: Default value
- `onChange`: Change handler
- `onBlur`: Blur handler
- `onFocus`: Focus handler

## Individual Components

You can also import and use individual components directly:

```tsx
import { 
  AppInput, 
  AppTextarea, 
  AppSelect, 
  AppDatePicker, 
  AppTimePicker,
  AppCheckbox,
  AppRadio,
  AppToggle,
  AppRichEditor
} from './components/input-fields';
```

## Examples

See the Storybook stories for comprehensive examples of all input types and their configurations.



