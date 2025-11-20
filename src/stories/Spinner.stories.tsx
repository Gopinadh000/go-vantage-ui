import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Stack } from '@mui/material';
import AppSpinner from '../components/spinner/Spinner';

const meta: Meta<typeof AppSpinner> = {
  component: AppSpinner,
  title: 'Components/Spinner',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['circle', 'linear'],
      description: 'Type of spinner: circle or linear',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'xl'],
      description: 'Size of the spinner',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'],
      description: 'Color of the spinner',
    },
    label: {
      control: 'text',
      description: 'Optional label text to display',
    },
    value: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100) for determinate variant',
    },
    variant: {
      control: 'select',
      options: ['determinate', 'indeterminate', 'buffer'],
      description: 'Variant of the progress indicator',
    },
    thickness: {
      control: { type: 'number', min: 1, max: 10, step: 0.1 },
      description: 'Thickness of the circular progress (circle type only)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Circular Spinners
export const CircularDefault: Story = {
  args: {
    type: 'circle',
    size: 'md',
    color: 'primary',
  },
};

export const CircularSmall: Story = {
  args: {
    type: 'circle',
    size: 'sm',
    color: 'primary',
  },
};

export const CircularMedium: Story = {
  args: {
    type: 'circle',
    size: 'md',
    color: 'primary',
  },
};

export const CircularLarge: Story = {
  args: {
    type: 'circle',
    size: 'xl',
    color: 'primary',
  },
};

// Circular with Labels
export const CircularWithLabel: Story = {
  args: {
    type: 'circle',
    size: 'md',
    color: 'primary',
    label: 'Loading...',
  },
};

export const CircularSmallWithLabel: Story = {
  args: {
    type: 'circle',
    size: 'sm',
    color: 'primary',
    label: 'Loading',
  },
};

export const CircularLargeWithLabel: Story = {
  args: {
    type: 'circle',
    size: 'xl',
    color: 'primary',
    label: 'Please wait...',
  },
};

// Circular Colors
export const CircularPrimary: Story = {
  args: {
    type: 'circle',
    size: 'md',
    color: 'primary',
  },
};

export const CircularSecondary: Story = {
  args: {
    type: 'circle',
    size: 'md',
    color: 'secondary',
  },
};

export const CircularSuccess: Story = {
  args: {
    type: 'circle',
    size: 'md',
    color: 'success',
  },
};

export const CircularError: Story = {
  args: {
    type: 'circle',
    size: 'md',
    color: 'error',
  },
};

export const CircularInfo: Story = {
  args: {
    type: 'circle',
    size: 'md',
    color: 'info',
  },
};

export const CircularWarning: Story = {
  args: {
    type: 'circle',
    size: 'md',
    color: 'warning',
  },
};

// Circular Determinate
export const CircularDeterminate: Story = {
  args: {
    type: 'circle',
    size: 'md',
    color: 'primary',
    variant: 'determinate',
    value: 75,
  },
};

export const CircularDeterminateWithLabel: Story = {
  args: {
    type: 'circle',
    size: 'md',
    color: 'primary',
    variant: 'determinate',
    value: 60,
    label: '60% Complete',
  },
};

// Linear Spinners
export const LinearDefault: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'md',
    color: 'primary',
  },
};

export const LinearSmall: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'sm',
    color: 'primary',
  },
};

export const LinearMedium: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'md',
    color: 'primary',
  },
};

export const LinearLarge: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'xl',
    color: 'primary',
  },
};

// Linear with Labels
export const LinearWithLabel: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'md',
    color: 'primary',
    label: 'Loading...',
  },
};

export const LinearSmallWithLabel: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'sm',
    color: 'primary',
    label: 'Processing',
  },
};

export const LinearLargeWithLabel: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'xl',
    color: 'primary',
    label: 'Please wait...',
  },
};

// Linear Colors
export const LinearPrimary: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'md',
    color: 'primary',
  },
};

export const LinearSecondary: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'md',
    color: 'secondary',
  },
};

export const LinearSuccess: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'md',
    color: 'success',
  },
};

export const LinearError: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'md',
    color: 'error',
  },
};

export const LinearInfo: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'md',
    color: 'info',
  },
};

export const LinearWarning: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'md',
    color: 'warning',
  },
};

// Linear Determinate
export const LinearDeterminate: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'md',
    color: 'primary',
    variant: 'determinate',
    value: 75,
  },
};

export const LinearDeterminateWithLabel: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'md',
    color: 'primary',
    variant: 'determinate',
    value: 60,
    label: 'Upload Progress',
  },
};

// All Sizes Comparison
export const AllCircularSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <AppSpinner type="circle" size="sm" color="primary" />
      <AppSpinner type="circle" size="md" color="primary" />
      <AppSpinner type="circle" size="xl" color="primary" />
    </Stack>
  ),
};

export const AllLinearSizes: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner type="linear" size="sm" color="primary" />
      <AppSpinner type="linear" size="md" color="primary" />
      <AppSpinner type="linear" size="xl" color="primary" />
    </Stack>
  ),
};

// All Colors Comparison
export const AllCircularColors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
      <AppSpinner type="circle" size="md" color="primary" />
      <AppSpinner type="circle" size="md" color="secondary" />
      <AppSpinner type="circle" size="md" color="success" />
      <AppSpinner type="circle" size="md" color="error" />
      <AppSpinner type="circle" size="md" color="info" />
      <AppSpinner type="circle" size="md" color="warning" />
    </Stack>
  ),
};

export const AllLinearColors: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: '100%', maxWidth: 400 }}>
      <AppSpinner type="linear" size="md" color="primary" />
      <AppSpinner type="linear" size="md" color="secondary" />
      <AppSpinner type="linear" size="md" color="success" />
      <AppSpinner type="linear" size="md" color="error" />
      <AppSpinner type="linear" size="md" color="info" />
      <AppSpinner type="linear" size="md" color="warning" />
    </Stack>
  ),
};

// Complex Examples
export const CircularProgressExample: Story = {
  args: {
    type: 'circle',
    size: 'xl',
    color: 'success',
    variant: 'determinate',
    value: 85,
    label: '85% Complete',
  },
};

export const LinearProgressExample: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <AppSpinner {...args} />
    </Box>
  ),
  args: {
    type: 'linear',
    size: 'md',
    color: 'primary',
    variant: 'determinate',
    value: 70,
    label: 'Downloading...',
  },
};



