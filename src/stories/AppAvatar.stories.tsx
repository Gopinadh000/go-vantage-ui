import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import AppAvatar from '../components/avatar/AppAvatar';

const meta = {
  component: AppAvatar,
  title: 'Components/AppAvatar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL. Use https://avatar.iran.liara.run/public for random avatars',
    },
    imgname: {
      control: 'text',
      description: 'Name for fallback display (shows first letter if no image)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the avatar',
    },
    shape: {
      control: 'select',
      options: ['rounded', 'square', 'rounded-corners'],
      description: 'Shape variant of the avatar',
    },
    status: {
      control: 'select',
      options: [null, 'online', 'offline', 'away', 'inactive'],
      description: 'Status badge to display',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the avatar image',
    },
  },
} satisfies Meta<typeof AppAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://avatar.iran.liara.run/public',
    imgname: 'Avatar',
    size: 'md',
    shape: 'rounded',
    status: null,
  },
};

// Size Variants
export const Small: Story = {
  args: {
    size: "lg",
    src: 'https://avatar.iran.liara.run/public',
    imgname: 'Small Avatar',
    shape: "square",
    status: null,
    alt: "asd"
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    src: 'https://avatar.iran.liara.run/public',
    imgname: 'Medium Avatar',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    src: 'https://avatar.iran.liara.run/public',
    imgname: 'Large Avatar',
  },
};

// Shape Variants
export const Rounded: Story = {
  args: {
    shape: 'rounded',
    size: 'md',
    src: 'https://avatar.iran.liara.run/public',
    imgname: 'Rounded Avatar',
  },
};

export const Square: Story = {
  args: {
    shape: 'square',
    size: 'md',
    src: 'https://avatar.iran.liara.run/public',
    imgname: 'Square Avatar',
  },
};

export const RoundedCorners: Story = {
  args: {
    shape: 'rounded-corners',
    size: 'md',
    src: 'https://avatar.iran.liara.run/public',
    imgname: 'Rounded Corners Avatar',
  },
};

// Status Badges
export const Online: Story = {
  args: {
    size: 'md',
    status: 'online',
    src: 'https://avatar.iran.liara.run/public',
    imgname: 'Online User',
  },
};

export const Offline: Story = {
  args: {
    size: 'md',
    status: 'offline',
    src: 'https://avatar.iran.liara.run/public',
    imgname: 'Offline User',
  },
};

export const Away: Story = {
  args: {
    size: 'md',
    status: 'away',
    src: 'https://avatar.iran.liara.run/public',
    imgname: 'Away User',
  },
};

export const Inactive: Story = {
  args: {
    size: 'md',
    status: 'inactive',
    src: 'https://avatar.iran.liara.run/public',
    imgname: 'Inactive User',
  },
};

// Combined Examples
export const AllSizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <AppAvatar size="sm" src="https://avatar.iran.liara.run/public" imgname="Small" />
      <AppAvatar size="md" src="https://avatar.iran.liara.run/public" imgname="Medium" />
      <AppAvatar size="lg" src="https://avatar.iran.liara.run/public" imgname="Large" />
    </Box>
  ),
};

export const AllShapes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <AppAvatar shape="rounded" size="md" src="https://avatar.iran.liara.run/public" imgname="Rounded" />
      <AppAvatar shape="square" size="md" src="https://avatar.iran.liara.run/public" imgname="Square" />
      <AppAvatar shape="rounded-corners" size="md" src="https://avatar.iran.liara.run/public" imgname="Rounded Corners" />
    </Box>
  ),
};

export const AllStatuses: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <AppAvatar status="online" size="md" src="https://avatar.iran.liara.run/public" imgname="Online" />
      <AppAvatar status="offline" size="md" src="https://avatar.iran.liara.run/public" imgname="Offline" />
      <AppAvatar status="away" size="md" src="https://avatar.iran.liara.run/public" imgname="Away" />
      <AppAvatar status="inactive" size="md" src="https://avatar.iran.liara.run/public" imgname="Inactive" />
    </Box>
  ),
};

// Avatar API Examples
export const RandomAvatar: Story = {
  args: {
    src: 'https://avatar.iran.liara.run/public',
    imgname: 'Random Avatar',
    size: 'md',
  },
};

export const MaleAvatar: Story = {
  args: {
    src: 'https://avatar.iran.liara.run/public/boy',
    imgname: 'Male Avatar',
    size: 'md',
  },
};

export const FemaleAvatar: Story = {
  args: {
    src: 'https://avatar.iran.liara.run/public/girl',
    imgname: 'Female Avatar',
    size: 'md',
  },
};

export const AvatarWithName: Story = {
  args: {
    src: 'https://avatar.iran.liara.run/username?username=John+Doe',
    imgname: 'John Doe',
    size: 'md',
  },
};

export const WithoutImage: Story = {
  args: {
    size: 'md',
    imgname: 'John Doe',
    shape: 'rounded',
  },
};