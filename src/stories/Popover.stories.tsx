import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, useRef } from 'react';
import {
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Badge,
  Avatar,
  TextField,
  Stack,
  MenuItem,
} from '@mui/material';
import {
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';
import AppPopover from '../components/popover/Popover';

const meta: Meta<typeof AppPopover> = {
  component: AppPopover,
  title: 'Components/Popover',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls the visibility of the popover',
    },
    arrow: {
      control: 'boolean',
      description: 'Whether to show an arrow pointing to the anchor',
    },
    anchorOrigin: {
      control: 'object',
      description: 'Anchor point for the popover',
    },
    transformOrigin: {
      control: 'object',
      description: 'Transform origin for the popover',
    },
    maxWidth: {
      control: 'number',
      description: 'Maximum width of the popover',
    },
    minWidth: {
      control: 'number',
      description: 'Minimum width of the popover',
    },
    maxHeight: {
      control: 'number',
      description: 'Maximum height of the popover',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Helper component for interactive stories
const PopoverWrapper = (args: any, content: React.ReactNode) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <AppPopover
        {...args}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {content}
      </AppPopover>
    </>
  );
};

// Basic Popover
export const Basic: Story = {
  render: (args) =>
    PopoverWrapper(
      args,
      <Typography>This is a basic popover content.</Typography>
    ),
  args: {
    arrow: false,
  },
};

export const WithArrow: Story = {
  render: (args) =>
    PopoverWrapper(
      args,
      <Typography>This popover has an arrow pointing to the anchor.</Typography>
    ),
  args: {
    arrow: true,
  },
};

// User Menu (Navbar use case)
export const UserMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography>John Doe</Typography>
          <IconButton onClick={handleClick} size="small">
            <Avatar sx={{ width: 32, height: 32 }}>JD</Avatar>
          </IconButton>
        </Box>
        <AppPopover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          arrow={true}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          minWidth={200}
        >
          <Box>
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
              <Typography variant="subtitle2" fontWeight="bold">
                John Doe
              </Typography>
              <Typography variant="caption" color="text.secondary">
                john.doe@example.com
              </Typography>
            </Box>
            <List dense>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </AppPopover>
      </>
    );
  },
};

// Notifications (Notification use case)
export const Notifications: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const notifications = [
      { id: 1, title: 'New message', message: 'You have a new message from John', time: '2 min ago' },
      { id: 2, title: 'Task completed', message: 'Your task has been completed', time: '1 hour ago' },
      { id: 3, title: 'System update', message: 'System will be updated tonight', time: '3 hours ago' },
      { id: 4, title: 'Reminder', message: 'Don\'t forget the meeting at 3 PM', time: '5 hours ago' },
    ];

    return (
      <>
        <IconButton onClick={handleClick}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <AppPopover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          arrow={true}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          maxWidth={350}
          maxHeight={400}
        >
          <Box>
            <Typography variant="h6" sx={{ p: 2, pb: 1, fontWeight: 'bold' }}>
              Notifications
            </Typography>
            <Divider />
            <List sx={{ maxHeight: 300, overflow: 'auto' }}>
              {notifications.map((notification) => (
                <ListItem key={notification.id} disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={notification.title}
                      secondary={
                        <>
                          <Typography component="span" variant="body2" color="text.primary">
                            {notification.message}
                          </Typography>
                          <br />
                          <Typography variant="caption" color="text.secondary">
                            {notification.time}
                          </Typography>
                        </>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <Box sx={{ p: 1, textAlign: 'center' }}>
              <Button size="small" fullWidth>
                View All
              </Button>
            </Box>
          </Box>
        </AppPopover>
      </>
    );
  },
};

// Inline Editing (Table use case)
export const InlineEditing: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [editValue, setEditValue] = useState('Product Name');
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleSave = () => {
      // Save logic here
      handleClose();
    };

    return (
      <>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            p: 1,
            border: 1,
            borderColor: 'divider',
            borderRadius: 1,
            cursor: 'pointer',
            '&:hover': { bgcolor: 'action.hover' },
          }}
          onClick={handleClick}
        >
          <Typography>{editValue}</Typography>
          <EditIcon fontSize="small" color="action" />
        </Box>
        <AppPopover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          arrow={true}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          minWidth={300}
        >
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Edit Product Name
            </Typography>
            <TextField
              fullWidth
              size="small"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Stack direction="row" spacing={1} justifyContent="flex-end">
              <Button size="small" onClick={handleClose} startIcon={<CancelIcon />}>
                Cancel
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={handleSave}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </Stack>
          </Box>
        </AppPopover>
      </>
    );
  },
};

// Position Examples
export const TopLeft: Story = {
  render: (args) =>
    PopoverWrapper(
      { ...args, anchorOrigin: { vertical: 'top', horizontal: 'left' } },
      <Typography>Top Left Position</Typography>
    ),
  args: {
    arrow: true,
  },
};

export const TopCenter: Story = {
  render: (args) =>
    PopoverWrapper(
      { ...args, anchorOrigin: { vertical: 'top', horizontal: 'center' } },
      <Typography>Top Center Position</Typography>
    ),
  args: {
    arrow: true,
  },
};

export const TopRight: Story = {
  render: (args) =>
    PopoverWrapper(
      { ...args, anchorOrigin: { vertical: 'top', horizontal: 'right' } },
      <Typography>Top Right Position</Typography>
    ),
  args: {
    arrow: true,
  },
};

export const BottomLeft: Story = {
  render: (args) =>
    PopoverWrapper(
      { ...args, anchorOrigin: { vertical: 'bottom', horizontal: 'left' } },
      <Typography>Bottom Left Position</Typography>
    ),
  args: {
    arrow: true,
  },
};

export const BottomCenter: Story = {
  render: (args) =>
    PopoverWrapper(
      { ...args, anchorOrigin: { vertical: 'bottom', horizontal: 'center' } },
      <Typography>Bottom Center Position</Typography>
    ),
  args: {
    arrow: true,
  },
};

export const BottomRight: Story = {
  render: (args) =>
    PopoverWrapper(
      { ...args, anchorOrigin: { vertical: 'bottom', horizontal: 'right' } },
      <Typography>Bottom Right Position</Typography>
    ),
  args: {
    arrow: true,
  },
};

// With Custom Content
export const CustomContent: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <Button variant="outlined" onClick={handleClick}>
          Show Custom Content
        </Button>
        <AppPopover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          arrow={true}
          minWidth={250}
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              Custom Popover
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              This popover contains custom content with various elements.
            </Typography>
            <Stack spacing={1}>
              <Button variant="contained" fullWidth size="small">
                Action 1
              </Button>
              <Button variant="outlined" fullWidth size="small">
                Action 2
              </Button>
            </Stack>
          </Box>
        </AppPopover>
      </>
    );
  },
};

// Menu Style
export const MenuStyle: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <Button variant="contained" onClick={handleClick}>
          Open Menu
        </Button>
        <AppPopover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          arrow={true}
          minWidth={180}
        >
          <List dense>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Option 1" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Option 2" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Delete" />
              </ListItemButton>
            </ListItem>
          </List>
        </AppPopover>
      </>
    );
  },
};

// With Form
export const WithForm: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <Button variant="contained" onClick={handleClick}>
          Open Form
        </Button>
        <AppPopover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          arrow={true}
          minWidth={300}
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              User Form
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Name"
                size="small"
                fullWidth
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <TextField
                label="Email"
                size="small"
                fullWidth
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <TextField
                select
                label="Role"
                size="small"
                fullWidth
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="guest">Guest</MenuItem>
              </TextField>
              <Stack direction="row" spacing={1} justifyContent="flex-end">
                <Button size="small" onClick={handleClose}>
                  Cancel
                </Button>
                <Button size="small" variant="contained">
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        </AppPopover>
      </>
    );
  },
};

// Scrollable Content
export const ScrollableContent: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <Button variant="contained" onClick={handleClick}>
          Open Scrollable Popover
        </Button>
        <AppPopover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          arrow={true}
          maxWidth={300}
          maxHeight={300}
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              Scrollable Content
            </Typography>
            <List>
              {Array.from({ length: 20 }, (_, i) => (
                <ListItem key={i}>
                  <ListItemText primary={`Item ${i + 1}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        </AppPopover>
      </>
    );
  },
};



