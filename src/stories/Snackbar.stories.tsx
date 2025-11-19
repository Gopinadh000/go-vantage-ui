import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button, Stack, Box } from '@mui/material';
import AppSnackbar from '../components/snackbar/SnackBar';

const meta: Meta<typeof AppSnackbar> = {
  component: AppSnackbar,
  title: 'Components/Snackbar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls the visibility of the snackbar',
    },
    message: {
      control: 'text',
      description: 'The message to display',
    },
    severity: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning'],
      description: 'The severity/color of the snackbar',
    },
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined'],
      description: 'The variant of the alert inside snackbar',
    },
    autoHideDuration: {
      control: 'number',
      description: 'Duration in milliseconds before auto-hide (null to disable)',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
    },
    position: {
      control: 'object',
      description: 'Position of the snackbar',
    },
    anchorOrigin: {
      control: 'object',
      description: 'Anchor origin for positioning',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Helper component for interactive stories
const SnackbarWrapper = (args: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Snackbar
      </Button>
      <AppSnackbar
        {...args}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

// Basic Snackbars
export const Default: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'This is a default snackbar message',
    severity: 'info',
    variant: 'standard',
    autoHideDuration: 6000,
    showCloseButton: true,
  },
};

// Severity Variants
export const Success: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Operation completed successfully!',
    severity: 'success',
    variant: 'standard',
    autoHideDuration: 6000,
    showCloseButton: true,
  },
};

export const Error: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'An error occurred. Please try again.',
    severity: 'error',
    variant: 'standard',
    autoHideDuration: 6000,
    showCloseButton: true,
  },
};

export const Info: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Here is some information for you.',
    severity: 'info',
    variant: 'standard',
    autoHideDuration: 6000,
    showCloseButton: true,
  },
};

export const Warning: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Warning: Please review this action.',
    severity: 'warning',
    variant: 'standard',
    autoHideDuration: 6000,
    showCloseButton: true,
  },
};

// Variant Types
export const Standard: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Standard variant snackbar',
    severity: 'success',
    variant: 'standard',
    autoHideDuration: 6000,
    showCloseButton: true,
  },
};

export const Filled: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Filled variant snackbar',
    severity: 'success',
    variant: 'filled',
    autoHideDuration: 6000,
    showCloseButton: true,
  },
};

export const Outlined: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Outlined variant snackbar',
    severity: 'success',
    variant: 'outlined',
    autoHideDuration: 6000,
    showCloseButton: true,
  },
};

// All Severities with Standard Variant
export const AllSeveritiesStandard: Story = {
  render: () => {
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);

    return (
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="success" onClick={() => setOpenSuccess(true)}>
          Success
        </Button>
        <Button variant="contained" color="error" onClick={() => setOpenError(true)}>
          Error
        </Button>
        <Button variant="contained" color="info" onClick={() => setOpenInfo(true)}>
          Info
        </Button>
        <Button variant="contained" color="warning" onClick={() => setOpenWarning(true)}>
          Warning
        </Button>

        <AppSnackbar
          open={openSuccess}
          onClose={() => setOpenSuccess(false)}
          message="Success message!"
          severity="success"
          variant="standard"
        />
        <AppSnackbar
          open={openError}
          onClose={() => setOpenError(false)}
          message="Error message!"
          severity="error"
          variant="standard"
        />
        <AppSnackbar
          open={openInfo}
          onClose={() => setOpenInfo(false)}
          message="Info message!"
          severity="info"
          variant="standard"
        />
        <AppSnackbar
          open={openWarning}
          onClose={() => setOpenWarning(false)}
          message="Warning message!"
          severity="warning"
          variant="standard"
        />
      </Stack>
    );
  },
};

// All Variants with Success
export const AllVariantsSuccess: Story = {
  render: () => {
    const [openStandard, setOpenStandard] = useState(false);
    const [openFilled, setOpenFilled] = useState(false);
    const [openOutlined, setOpenOutlined] = useState(false);

    return (
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={() => setOpenStandard(true)}>
          Standard
        </Button>
        <Button variant="outlined" onClick={() => setOpenFilled(true)}>
          Filled
        </Button>
        <Button variant="outlined" onClick={() => setOpenOutlined(true)}>
          Outlined
        </Button>

        <AppSnackbar
          open={openStandard}
          onClose={() => setOpenStandard(false)}
          message="Standard variant"
          severity="success"
          variant="standard"
        />
        <AppSnackbar
          open={openFilled}
          onClose={() => setOpenFilled(false)}
          message="Filled variant"
          severity="success"
          variant="filled"
        />
        <AppSnackbar
          open={openOutlined}
          onClose={() => setOpenOutlined(false)}
          message="Outlined variant"
          severity="success"
          variant="outlined"
        />
      </Stack>
    );
  },
};

// Positions
export const TopLeft: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Top Left Position',
    severity: 'info',
    variant: 'standard',
    position: { vertical: 'top', horizontal: 'left' },
    autoHideDuration: 6000,
  },
};

export const TopCenter: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Top Center Position',
    severity: 'info',
    variant: 'standard',
    position: { vertical: 'top', horizontal: 'center' },
    autoHideDuration: 6000,
  },
};

export const TopRight: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Top Right Position',
    severity: 'info',
    variant: 'standard',
    position: { vertical: 'top', horizontal: 'right' },
    autoHideDuration: 6000,
  },
};

export const BottomLeft: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Bottom Left Position',
    severity: 'info',
    variant: 'standard',
    position: { vertical: 'bottom', horizontal: 'left' },
    autoHideDuration: 6000,
  },
};

export const BottomCenter: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Bottom Center Position',
    severity: 'info',
    variant: 'standard',
    position: { vertical: 'bottom', horizontal: 'center' },
    autoHideDuration: 6000,
  },
};

export const BottomRight: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Bottom Right Position',
    severity: 'info',
    variant: 'standard',
    position: { vertical: 'bottom', horizontal: 'right' },
    autoHideDuration: 6000,
  },
};

// Auto Hide Duration
export const AutoHide3Seconds: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'This will auto-hide in 3 seconds',
    severity: 'success',
    variant: 'standard',
    autoHideDuration: 3000,
    showCloseButton: true,
  },
};

export const AutoHide10Seconds: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'This will auto-hide in 10 seconds',
    severity: 'info',
    variant: 'standard',
    autoHideDuration: 10000,
    showCloseButton: true,
  },
};

export const NoAutoHide: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'This snackbar will not auto-hide',
    severity: 'warning',
    variant: 'standard',
    autoHideDuration: null,
    showCloseButton: true,
  },
};

// Without Close Button
export const WithoutCloseButton: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Snackbar without close button',
    severity: 'info',
    variant: 'standard',
    autoHideDuration: 6000,
    showCloseButton: false,
  },
};

// With Custom Action
export const WithCustomAction: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open with Custom Action
        </Button>
        <AppSnackbar
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          action={
            <Button color="inherit" size="small" onClick={() => setOpen(false)}>
              UNDO
            </Button>
          }
        />
      </>
    );
  },
  args: {
    message: 'Item archived',
    severity: 'success',
    variant: 'standard',
    autoHideDuration: 6000,
    showCloseButton: true,
  },
};

// Complex Examples
export const SuccessFilled: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Success! Your changes have been saved.',
    severity: 'success',
    variant: 'filled',
    autoHideDuration: 6000,
    showCloseButton: true,
    position: { vertical: 'bottom', horizontal: 'center' },
  },
};

export const ErrorOutlined: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Error! Failed to save changes. Please try again.',
    severity: 'error',
    variant: 'outlined',
    autoHideDuration: 8000,
    showCloseButton: true,
    position: { vertical: 'top', horizontal: 'right' },
  },
};

export const InfoStandard: Story = {
  render: (args) => <SnackbarWrapper {...args} />,
  args: {
    message: 'Information: New features are available.',
    severity: 'info',
    variant: 'standard',
    autoHideDuration: 5000,
    showCloseButton: true,
    position: { vertical: 'bottom', horizontal: 'left' },
  },
};


