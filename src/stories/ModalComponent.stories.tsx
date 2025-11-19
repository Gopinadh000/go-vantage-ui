import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { ComponentProps } from 'react';
import { Button, Box, Typography, Stack } from '@mui/material';
import ModalComponent from '../components/modal/ModalComponent';

type ModalComponentProps = ComponentProps<typeof ModalComponent>;
type ModalStoryProps = Omit<ModalComponentProps, 'open' | 'onClose'>;

// Helper component for interactive stories
const ModalWrapper = (args: ModalStoryProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <ModalComponent
        {...args}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

const meta: Meta<ModalStoryProps> = {
  title: 'Components/ModalComponent',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    modalType: {
      control: 'select',
      options: ['side', 'center'],
      description: 'Type of modal: side (drawer from right) or center (dialog)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'Size of the modal',
    },
    title: {
      control: 'text',
      description: 'Title displayed in the header',
    },
    children: {
      control: false,
      description: 'Content displayed in the modal body',
    },
    footer: {
      control: false,
      description: 'Optional footer content',
    },
    header: {
      control: false,
      description: 'Optional custom header (replaces default header with title)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Center Modal
export const Default: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'center',
    size: 'md',
    title: 'Default Modal',
    children: (
      <Typography>
        This is a default center modal with medium size. The body content is
        scrollable when it overflows.
      </Typography>
    ),
  },
};

// Side Modal
export const SideModal: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'side',
    size: 'md',
    title: 'Side Modal',
    children: (
      <Typography>
        This is a side modal that slides in from the right side of the screen.
      </Typography>
    ),
  },
};

// Center Modal Sizes
export const SmallCenter: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'center',
    size: 'sm',
    title: 'Small Center Modal',
    children: (
      <Typography>
        This is a small center modal (400px width).
      </Typography>
    ),
  },
};

export const MediumCenter: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'center',
    size: 'md',
    title: 'Medium Center Modal',
    children: (
      <Typography>
        This is a medium center modal (600px width).
      </Typography>
    ),
  },
};

export const LargeCenter: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'center',
    size: 'lg',
    title: 'Large Center Modal',
    children: (
      <Typography>
        This is a large center modal (800px width).
      </Typography>
    ),
  },
};

export const ExtraLargeCenter: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'center',
    size: 'xl',
    title: 'Extra Large Center Modal',
    children: (
      <Typography>
        This is an extra large center modal (1000px width).
      </Typography>
    ),
  },
};

export const ExtraExtraLargeCenter: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'center',
    size: 'xxl',
    title: 'Extra Extra Large Center Modal',
    children: (
      <Typography>
        This is an extra extra large center modal (1200px width).
      </Typography>
    ),
  },
};

// Side Modal Sizes
export const SmallSide: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'side',
    size: 'sm',
    title: 'Small Side Modal',
    children: (
      <Typography>
        This is a small side modal (320px width).
      </Typography>
    ),
  },
};

export const MediumSide: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'side',
    size: 'md',
    title: 'Medium Side Modal',
    children: (
      <Typography>
        This is a medium side modal (480px width).
      </Typography>
    ),
  },
};

export const LargeSide: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'side',
    size: 'lg',
    title: 'Large Side Modal',
    children: (
      <Typography>
        This is a large side modal (640px width).
      </Typography>
    ),
  },
};

export const ExtraLargeSide: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'side',
    size: 'xl',
    title: 'Extra Large Side Modal',
    children: (
      <Typography>
        This is an extra large side modal (800px width).
      </Typography>
    ),
  },
};

export const ExtraExtraLargeSide: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'side',
    size: 'xxl',
    title: 'Extra Extra Large Side Modal',
    children: (
      <Typography>
        This is an extra extra large side modal (960px width).
      </Typography>
    ),
  },
};

// Modal with Footer
export const WithFooter: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'center',
    size: 'md',
    title: 'Modal with Footer',
    children: (
      <Typography>
        This modal has a footer with action buttons.
      </Typography>
    ),
    footer: (
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="outlined" onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="contained" onClick={() => {}}>
          Save
        </Button>
      </Stack>
    ),
  },
};

// Modal without Footer
export const WithoutFooter: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'center',
    size: 'md',
    title: 'Modal without Footer',
    children: (
      <Typography>
        This modal does not have a footer. The footer is optional.
      </Typography>
    ),
  },
};

// Scrollable Content
export const ScrollableContent: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'center',
    size: 'md',
    title: 'Scrollable Content Modal',
    children: (
      <Box>
        {Array.from({ length: 50 }, (_, i) => (
          <Typography key={i} sx={{ marginBottom: 2 }}>
            This is paragraph {i + 1}. The body content is scrollable when it
            overflows. Try scrolling to see more content.
          </Typography>
        ))}
      </Box>
    ),
    footer: (
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Submit</Button>
      </Stack>
    ),
  },
};

// Side Modal with Footer
export const SideModalWithFooter: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'side',
    size: 'md',
    title: 'Side Modal with Footer',
    children: (
      <Typography>
        This is a side modal with a footer. The content is scrollable when it
        overflows.
      </Typography>
    ),
    footer: (
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Confirm</Button>
      </Stack>
    ),
  },
};

// Custom Header
export const CustomHeader: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'center',
    size: 'md',
    header: (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
        }}
      >
        <Typography variant="h6" component="h2">
          Custom Header
        </Typography>
        <Button
          variant="text"
          onClick={() => {}}
          sx={{ color: 'primary.contrastText' }}
        >
          Close
        </Button>
      </Box>
    ),
    children: (
      <Typography>
        This modal has a custom header with a different style.
      </Typography>
    ),
  },
};

// Complex Content
export const ComplexContent: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    modalType: 'center',
    size: 'lg',
    title: 'Complex Content Modal',
    children: (
      <Box>
        <Typography variant="h6" gutterBottom>
          Form Example
        </Typography>
        <Stack spacing={2}>
          <Typography>
            This modal contains complex content with multiple sections.
          </Typography>
          <Box
            sx={{
              padding: 2,
              backgroundColor: 'action.hover',
              borderRadius: 1,
            }}
          >
            <Typography variant="body2">
              This is a content section with background color.
            </Typography>
          </Box>
          <Typography>
            You can add any React components as children to the modal.
          </Typography>
        </Stack>
      </Box>
    ),
    footer: (
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Button variant="text">Help</Button>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained">Save Changes</Button>
        </Stack>
      </Stack>
    ),
  },
};

