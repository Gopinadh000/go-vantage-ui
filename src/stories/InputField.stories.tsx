import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import InputField from '../components/input-fields/InputField';

type StoryProps = ComponentProps<typeof InputField>;

const meta: Meta<StoryProps> = {
  component: InputField,
  tags: ['autodocs'],
  title: 'Components/InputField',
  argTypes: {
    type: {
      options: [
        'text',
        'password',
        'number',
        'email',
        'tel',
        'url',
        'search',
        'textarea',
        'select',
        'date',
        'time',
        'checkbox',
        'radio',
        'toggle',
        'rich-editor',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onFocus: { action: 'focused' },
  },
  args: {
    onChange: () => {},
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

// Text Input
export const TextInput: Story = {
  args: {
    type: 'text',
    label: 'Text Input',
    placeholder: 'Enter text',
    size: 'medium',
    fullWidth: true,
  },
};

// Password Input
export const PasswordInput: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    size: 'medium',
    fullWidth: true,
  },
};

// Number Input
export const NumberInput: Story = {
  args: {
    type: 'number',
    label: 'Number',
    placeholder: 'Enter number',
    size: 'medium',
    fullWidth: true,
  },
};

// Email Input
export const EmailInput: Story = {
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    size: 'medium',
    fullWidth: true,
  },
};

// Textarea
export const Textarea: Story = {
  args: {
    type: 'textarea',
    label: 'Message',
    placeholder: 'Enter your message',
    size: 'medium',
    fullWidth: true,
    minRows: 4,
    maxRows: 8,
  },
};

// Single Select
export const SingleSelect: Story = {
  args: {
    type: 'select',
    label: 'Select Option',
    placeholder: 'Choose an option',
    size: 'medium',
    fullWidth: true,
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

// Multi Select
export const MultiSelect: Story = {
  args: {
    type: 'select',
    label: 'Select Multiple Options',
    placeholder: 'Choose options',
    size: 'medium',
    fullWidth: true,
    multiple: true,
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
    ],
  },
};

// Date Picker
export const DatePicker: Story = {
  args: {
    type: 'date',
    label: 'Select Date',
    placeholder: 'Select date',
    size: 'medium',
    fullWidth: true,
  },
};

// Time Picker
export const TimePicker: Story = {
  args: {
    type: 'time',
    label: 'Select Time',
    placeholder: 'Select time',
    size: 'medium',
    fullWidth: true,
  },
};

// Checkbox
export const Checkbox: Story = {
  args: {
    type: 'checkbox',
    label: 'Accept terms and conditions',
    size: 'medium',
  },
};

// Radio
export const Radio: Story = {
  args: {
    type: 'radio',
    label: 'Choose Option',
    size: 'medium',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

// Radio Row
export const RadioRow: Story = {
  args: {
    type: 'radio',
    label: 'Choose Option',
    size: 'medium',
    row: true,
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

// Toggle
export const Toggle: Story = {
  args: {
    type: 'toggle',
    label: 'Enable notifications',
    size: 'medium',
  },
};

// Rich Editor
export const RichEditor: Story = {
  args: {
    type: 'rich-editor',
    label: 'Rich Text Editor',
    placeholder: 'Start typing...',
    size: 'medium',
    fullWidth: true,
    minRows: 4,
    maxRows: 10,
  },
};

// With Error
export const WithError: Story = {
  args: {
    type: 'text',
    label: 'Email',
    placeholder: 'Enter email',
    size: 'medium',
    fullWidth: true,
    error: true,
    helperText: 'Please enter a valid email address',
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    type: 'text',
    label: 'Disabled Input',
    placeholder: 'This is disabled',
    size: 'medium',
    fullWidth: true,
    disabled: true,
    value: 'Disabled value',
  },
};

// Required
export const Required: Story = {
  args: {
    type: 'text',
    label: 'Required Field',
    placeholder: 'This field is required',
    size: 'medium',
    fullWidth: true,
    required: true,
  },
};

// Different Sizes
export const SmallSize: Story = {
  args: {
    type: 'text',
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'small',
    fullWidth: true,
  },
};

export const MediumSize: Story = {
  args: {
    type: 'text',
    label: 'Medium Input',
    placeholder: 'Medium size',
    size: 'medium',
    fullWidth: true,
  },
};

export const LargeSize: Story = {
  args: {
    type: 'text',
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'large',
    fullWidth: true,
  },
};



