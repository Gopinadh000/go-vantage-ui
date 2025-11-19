import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Stack } from '@mui/material';
import AppTypography from '../components/typography/Typography';

const meta: Meta<typeof AppTypography> = {
  component: AppTypography,
  title: 'Components/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['page-name', 'component-name', 'body-text', 'body-soft-text'],
      description: 'Type of typography',
    },
    children: {
      control: 'text',
      description: 'The text content',
    },
    className: {
      control: 'text',
      description: 'Custom CSS class name (for Tailwind CSS or custom styles)',
    },
    align: {
      control: 'select',
      options: ['inherit', 'left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    gutterBottom: {
      control: 'boolean',
      description: 'Add bottom margin',
    },
    noWrap: {
      control: 'boolean',
      description: 'Prevent text wrapping',
    },
    paragraph: {
      control: 'boolean',
      description: 'Render as paragraph',
    },
    component: {
      control: false,
      description: 'The component used for the root node',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Page Name
export const PageName: Story = {
  args: {
    type: 'page-name',
    children: 'Dashboard',
  },
};

export const PageNameLong: Story = {
  args: {
    type: 'page-name',
    children: 'User Management Dashboard',
  },
};

export const PageNameCentered: Story = {
  args: {
    type: 'page-name',
    children: 'Centered Page Title',
    align: 'center',
  },
};

// Component Name
export const ComponentName: Story = {
  args: {
    type: 'component-name',
    children: 'User Profile',
  },
};

export const ComponentNameLong: Story = {
  args: {
    type: 'component-name',
    children: 'User Profile Settings',
  },
};

export const ComponentNameWithGutter: Story = {
  args: {
    type: 'component-name',
    children: 'Component Title',
    gutterBottom: true,
  },
};

// Body Text
export const BodyText: Story = {
  args: {
    type: 'body-text',
    children: 'This is regular body text. It is used for normal content and paragraphs.',
  },
};

export const BodyTextParagraph: Story = {
  args: {
    type: 'body-text',
    children: 'This is a paragraph of body text. It provides information and context to the user. Body text should be readable and clear.',
    paragraph: true,
  },
};

export const BodyTextLong: Story = {
  args: {
    type: 'body-text',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
};

export const BodyTextJustified: Story = {
  args: {
    type: 'body-text',
    children: 'This is justified body text. It spreads the text evenly across the width of the container, creating a clean, aligned appearance on both sides.',
    align: 'justify',
  },
};

// Body Soft Text
export const BodySoftText: Story = {
  args: {
    type: 'body-soft-text',
    children: 'This is soft body text with lighter color. It is used for secondary information or less important content.',
  },
};

export const BodySoftTextParagraph: Story = {
  args: {
    type: 'body-soft-text',
    children: 'This is a paragraph of soft text. It appears in a lighter color to indicate secondary or supporting information.',
    paragraph: true,
  },
};

export const BodySoftTextLong: Story = {
  args: {
    type: 'body-soft-text',
    children: 'Soft text is perfect for helper text, descriptions, captions, or any content that should be less prominent than the main body text.',
  },
};

// All Types Comparison
export const AllTypes: Story = {
  render: () => (
    <Stack spacing={3}>
      <AppTypography type="page-name">
        Page Name Example
      </AppTypography>
      <AppTypography type="component-name">
        Component Name Example
      </AppTypography>
      <AppTypography type="body-text">
        This is regular body text used for main content and paragraphs.
      </AppTypography>
      <AppTypography type="body-soft-text">
        This is soft body text with lighter color for secondary information.
      </AppTypography>
    </Stack>
  ),
};

// Alignment Examples
export const AlignmentExamples: Story = {
  render: () => (
    <Stack spacing={3}>
      <AppTypography type="page-name" align="left">
        Left Aligned
      </AppTypography>
      <AppTypography type="page-name" align="center">
        Center Aligned
      </AppTypography>
      <AppTypography type="page-name" align="right">
        Right Aligned
      </AppTypography>
    </Stack>
  ),
};

// With Gutter Bottom
export const WithGutterBottom: Story = {
  render: () => (
    <Stack spacing={2}>
      <AppTypography type="page-name" gutterBottom>
        Page Title with Gutter
      </AppTypography>
      <AppTypography type="body-text">
        This text appears below the title with spacing.
      </AppTypography>
      <AppTypography type="component-name" gutterBottom>
        Component Title with Gutter
      </AppTypography>
      <AppTypography type="body-soft-text">
        This soft text appears below the component title.
      </AppTypography>
    </Stack>
  ),
};

// No Wrap
export const NoWrap: Story = {
  render: () => (
    <Box sx={{ width: 200, border: '1px solid', borderColor: 'divider', p: 1 }}>
      <AppTypography type="body-text" noWrap>
        This is a very long text that will not wrap and will be truncated with ellipsis
      </AppTypography>
    </Box>
  ),
};

// Custom Styling with sx prop
export const CustomStyling: Story = {
  args: {
    type: 'body-text',
    children: 'This text has custom styling applied',
    sx: {
      color: 'primary.main',
      fontWeight: 600,
      textDecoration: 'underline',
      fontStyle: 'italic',
    },
  },
};

export const CustomStylingPageName: Story = {
  args: {
    type: 'page-name',
    children: 'Custom Styled Page Title',
    sx: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
  },
};

// Real-world Examples
export const PageExample: Story = {
  render: () => (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <AppTypography type="page-name" gutterBottom>
        User Dashboard
      </AppTypography>
      <AppTypography type="body-soft-text" gutterBottom>
        Welcome back! Here's an overview of your account.
      </AppTypography>
      
      <Box sx={{ mt: 4 }}>
        <AppTypography type="component-name" gutterBottom>
          Recent Activity
        </AppTypography>
        <AppTypography type="body-text" paragraph>
          Your recent activity shows all the actions you've taken in the last 30 days. 
          This includes logins, profile updates, and other important changes.
        </AppTypography>
        <AppTypography type="body-soft-text">
          Last updated: 2 hours ago
        </AppTypography>
      </Box>
    </Box>
  ),
};

export const ComponentExample: Story = {
  render: () => (
    <Box sx={{ maxWidth: 600, p: 3 }}>
      <AppTypography type="component-name" gutterBottom>
        Settings Panel
      </AppTypography>
      <AppTypography type="body-text" paragraph>
        Configure your application settings here. You can customize various aspects 
        of your experience including notifications, privacy, and display preferences.
      </AppTypography>
      <AppTypography type="body-soft-text">
        Changes are saved automatically
      </AppTypography>
    </Box>
  ),
};

// Different Components
export const AsDifferentElements: Story = {
  render: () => (
    <Stack spacing={2}>
      <AppTypography type="page-name" component="h1">
        As H1 Element
      </AppTypography>
      <AppTypography type="component-name" component="h2">
        As H2 Element
      </AppTypography>
      <AppTypography type="body-text" component="p">
        As Paragraph Element
      </AppTypography>
      <AppTypography type="body-text" component="span">
        As Span Element
      </AppTypography>
      <AppTypography type="body-text" component="div">
        As Div Element
      </AppTypography>
    </Stack>
  ),
};

// Mixed Content
export const MixedContent: Story = {
  render: () => (
    <Box sx={{ maxWidth: 700, p: 3 }}>
      <AppTypography type="page-name" gutterBottom>
        Product Details
      </AppTypography>
      <AppTypography type="body-soft-text" gutterBottom>
        Category: Electronics
      </AppTypography>
      <AppTypography type="component-name" gutterBottom>
        Description
      </AppTypography>
      <AppTypography type="body-text" paragraph>
        This is a high-quality product designed to meet your needs. It features 
        advanced technology and comes with a comprehensive warranty.
      </AppTypography>
      <AppTypography type="body-soft-text">
        Price: $299.99 | In Stock: 15 units
      </AppTypography>
    </Box>
  ),
};


