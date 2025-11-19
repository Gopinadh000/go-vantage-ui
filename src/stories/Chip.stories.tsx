import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Box } from '@mui/material';
import {
  Face as FaceIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import AppChip from '../components/chip/Chip';

const meta: Meta<typeof AppChip> = {
  component: AppChip,
  title: 'Components/Chip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The content of the chip',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback fired when the chip is clicked',
    },
    onDelete: {
      action: 'deleted',
      description: 'Callback fired when the delete icon is clicked',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the chip is disabled',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the chip',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the chip',
    },
    customIcon: {
      control: false,
      description: 'Custom icon element to display at the start of the chip',
    },
    avatarChip: {
      control: false,
      description: 'Avatar configuration (src, alt, or children)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the chip',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'The variant to use',
    },
    shape: {
      control: 'select',
      options: ['rounded', 'square', 'rounded-corners'],
      description: 'The shape of the chip',
    },
    deleteIcon: {
      control: false,
      description: 'Custom delete icon element',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Basic Chip
export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Chip',
    variant: 'outlined',
  },
};

// Chip Shapes
export const Rounded: Story = {
  args: {
    label: 'Rounded Chip',
    shape: 'rounded',
  },
};

export const Square: Story = {
  args: {
    label: 'Square Chip',
    shape: 'square',
  },
};

export const RoundedCorners: Story = {
  args: {
    label: 'Rounded Corners Chip',
    shape: 'rounded-corners',
  },
};

export const SquareOutlined: Story = {
  args: {
    label: 'Square Outlined',
    shape: 'square',
    variant: 'outlined',
  },
};

export const RoundedCornersOutlined: Story = {
  args: {
    label: 'Rounded Corners Outlined',
    shape: 'rounded-corners',
    variant: 'outlined',
  },
};

// Chip Sizes
export const Small: Story = {
  args: {
    label: 'Small Chip',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Chip',
    size: 'medium',
  },
};

// Chip Colors
export const Primary: Story = {
  args: {
    label: 'Primary Chip',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Chip',
    color: 'secondary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Chip',
    color: 'success',
  },
};

export const Error: Story = {
  args: {
    label: 'Error Chip',
    color: 'error',
  },
};

export const Info: Story = {
  args: {
    label: 'Info Chip',
    color: 'info',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Chip',
    color: 'warning',
  },
};

// Chip Actions
export const Clickable: Story = {
  args: {
    label: 'Clickable Chip',
    onClick: () => alert('Chip clicked!'),
  },
};

export const Deletable: Story = {
  args: {
    label: 'Deletable Chip',
    onDelete: () => alert('Chip deleted!'),
  },
};

export const ClickableAndDeletable: Story = {
  args: {
    label: 'Clickable & Deletable',
    onClick: () => alert('Chip clicked!'),
    onDelete: () => alert('Chip deleted!'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Chip',
    disabled: true,
  },
};

export const DisabledClickable: Story = {
  args: {
    label: 'Disabled Clickable',
    onClick: () => alert('This should not fire'),
    disabled: true,
  },
};

export const DisabledDeletable: Story = {
  args: {
    label: 'Disabled Deletable',
    onDelete: () => alert('This should not fire'),
    disabled: true,
  },
};

// Custom Background Color
export const CustomBackgroundColor: Story = {
  args: {
    label: 'Custom Background',
    backgroundColor: '#9c27b0',
  },
};

export const CustomBackgroundColorOutlined: Story = {
  args: {
    label: 'Custom Background Outlined',
    backgroundColor: '#9c27b0',
    variant: 'outlined',
  },
};

// Custom Icon
export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    customIcon: <FaceIcon />,
  },
};

export const WithIconOutlined: Story = {
  args: {
    label: 'With Icon',
    customIcon: <FaceIcon />,
    variant: 'outlined',
  },
};

export const WithIconClickable: Story = {
  args: {
    label: 'Icon Clickable',
    customIcon: <FaceIcon />,
    onClick: () => alert('Icon chip clicked!'),
  },
};

export const WithIconDeletable: Story = {
  args: {
    label: 'Icon Deletable',
    customIcon: <FaceIcon />,
    onDelete: () => alert('Icon chip deleted!'),
  },
};

// Avatar Chip
export const AvatarWithLetter: Story = {
  args: {
    label: 'Avatar Chip',
    avatarChip: {
      children: 'A',
    },
  },
};

export const AvatarWithImage: Story = {
  args: {
    label: 'Avatar Chip',
    avatarChip: {
      src: 'https://avatar.iran.liara.run/public',
      alt: 'Avatar',
    },
  },
};

export const AvatarClickable: Story = {
  args: {
    label: 'Avatar Clickable',
    avatarChip: {
      children: 'JD',
    },
    onClick: () => alert('Avatar chip clicked!'),
  },
};

export const AvatarDeletable: Story = {
  args: {
    label: 'Avatar Deletable',
    avatarChip: {
      children: 'JD',
    },
    onDelete: () => alert('Avatar chip deleted!'),
  },
};

// Custom Delete Icon
export const CustomDeleteIcon: Story = {
  args: {
    label: 'Custom Delete Icon',
    onDelete: () => alert('Deleted with custom icon!'),
    deleteIcon: <DoneIcon />,
  },
};

export const CustomDeleteIconOutlined: Story = {
  args: {
    label: 'Custom Delete Icon',
    variant: 'outlined',
    onDelete: () => alert('Deleted with custom icon!'),
    deleteIcon: <DeleteIcon />,
  },
};

// Color Combinations
export const AllColors: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      <AppChip label="Default" color="default" />
      <AppChip label="Primary" color="primary" />
      <AppChip label="Secondary" color="secondary" />
      <AppChip label="Success" color="success" />
      <AppChip label="Error" color="error" />
      <AppChip label="Info" color="info" />
      <AppChip label="Warning" color="warning" />
    </Stack>
  ),
};

export const AllColorsOutlined: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      <AppChip label="Default" color="default" variant="outlined" />
      <AppChip label="Primary" color="primary" variant="outlined" />
      <AppChip label="Secondary" color="secondary" variant="outlined" />
      <AppChip label="Success" color="success" variant="outlined" />
      <AppChip label="Error" color="error" variant="outlined" />
      <AppChip label="Info" color="info" variant="outlined" />
      <AppChip label="Warning" color="warning" variant="outlined" />
    </Stack>
  ),
};

// Size Variants
export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={1} alignItems="center">
      <AppChip label="Small" size="small" />
      <AppChip label="Medium" size="medium" />
    </Stack>
  ),
};

// Shape Variants
export const AllShapes: Story = {
  render: () => (
    <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
      <AppChip label="Rounded" shape="rounded" />
      <AppChip label="Square" shape="square" />
      <AppChip label="Rounded Corners" shape="rounded-corners" />
    </Stack>
  ),
};

export const AllShapesOutlined: Story = {
  render: () => (
    <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
      <AppChip label="Rounded" shape="rounded" variant="outlined" />
      <AppChip label="Square" shape="square" variant="outlined" />
      <AppChip label="Rounded Corners" shape="rounded-corners" variant="outlined" />
    </Stack>
  ),
};

// Complex Examples
export const ComplexExample: Story = {
  args: {
    label: 'Complex Chip',
    color: 'primary',
    customIcon: <CheckCircleIcon />,
    onClick: () => alert('Complex chip clicked!'),
    onDelete: () => alert('Complex chip deleted!'),
    size: 'medium',
    variant: 'filled',
  },
};

export const ComplexExampleOutlined: Story = {
  args: {
    label: 'Complex Chip Outlined',
    color: 'success',
    customIcon: <CheckCircleIcon />,
    onClick: () => alert('Complex chip clicked!'),
    onDelete: () => alert('Complex chip deleted!'),
    size: 'medium',
    variant: 'outlined',
  },
};

// Chip Array Example
export const ChipArray: Story = {
  render: () => {
    const chips = ['React', 'Vue.js', 'Angular', 'Svelte', 'Next.js'];
    return (
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {chips.map((chip) => (
          <AppChip
            key={chip}
            label={chip}
            onDelete={() => alert(`${chip} deleted!`)}
            color="primary"
          />
        ))}
      </Stack>
    );
  },
};

// With Custom Background
export const CustomBackgroundExamples: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      <AppChip label="Purple" backgroundColor="#9c27b0" />
      <AppChip label="Teal" backgroundColor="#009688" />
      <AppChip label="Orange" backgroundColor="#ff9800" />
      <AppChip label="Purple Outlined" backgroundColor="#9c27b0" variant="outlined" />
      <AppChip label="Teal Outlined" backgroundColor="#009688" variant="outlined" />
      <AppChip label="Orange Outlined" backgroundColor="#ff9800" variant="outlined" />
    </Stack>
  ),
};

