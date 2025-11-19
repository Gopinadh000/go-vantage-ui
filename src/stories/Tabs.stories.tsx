import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import {
  Phone as PhoneIcon,
  Favorite as FavoriteIcon,
  PersonPin as PersonPinIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import AppTabs, { type TabData } from '../components/tabs/Tabs';

const meta: Meta<typeof AppTabs> = {
  component: AppTabs,
  title: 'Components/Tabs',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: false,
      description: 'Array of tab data objects',
    },
    variant: {
      control: 'select',
      options: ['standard', 'fullColor', 'fullWidth', 'scrollable'],
      description: 'Type of tabs variant',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of tabs',
    },
    value: {
      control: false,
      description: 'Controlled value of the selected tab',
    },
    defaultValue: {
      control: false,
      description: 'Default selected tab value',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when tab changes',
    },
    textColor: {
      control: 'select',
      options: ['primary', 'secondary', 'inherit'],
      description: 'Color of the tab text',
    },
    indicatorColor: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Color of the tab indicator',
    },
    centered: {
      control: 'boolean',
      description: 'Whether tabs are centered (standard variant only)',
    },
    scrollButtons: {
      control: 'select',
      options: [true, false, 'auto'],
      description: 'Scroll buttons behavior (scrollable variant)',
    },
    allowScrollButtonsMobile: {
      control: 'boolean',
      description: 'Allow scroll buttons on mobile (scrollable variant)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Sample tab data
const basicTabs: TabData[] = [
  {
    id: '1',
    tabname: 'item-one',
    displayName: 'Item One',
    disabled: false,
  },
  {
    id: '2',
    tabname: 'item-two',
    displayName: 'Item Two',
    disabled: false,
  },
  {
    id: '3',
    tabname: 'item-three',
    displayName: 'Item Three',
    disabled: false,
  },
];

const tabsWithIcons: TabData[] = [
  {
    id: '1',
    tabname: 'phone',
    displayName: 'RECENTS',
    iconName: <PhoneIcon />,
    disabled: false,
  },
  {
    id: '2',
    tabname: 'favorite',
    displayName: 'FAVORITES',
    iconName: <FavoriteIcon />,
    disabled: false,
  },
  {
    id: '3',
    tabname: 'person',
    displayName: 'NEARBY',
    iconName: <PersonPinIcon />,
    disabled: false,
  },
];

const tabsWithCounts: TabData[] = [
  {
    id: '1',
    tabname: 'home',
    displayName: 'Home',
    iconName: <HomeIcon />,
    tabCount: 5,
    disabled: false,
  },
  {
    id: '2',
    tabname: 'settings',
    displayName: 'Settings',
    iconName: <SettingsIcon />,
    tabCount: 12,
    disabled: false,
  },
  {
    id: '3',
    tabname: 'info',
    displayName: 'Info',
    iconName: <InfoIcon />,
    tabCount: 23,
    disabled: false,
  },
];

const manyTabs: TabData[] = Array.from({ length: 10 }, (_, i) => ({
  id: `${i + 1}`,
  tabname: `item-${i + 1}`,
  displayName: `Item ${i + 1}`,
  disabled: false,
}));

// Helper component for tab panels
const TabPanel = ({ children, value, index }: { children: React.ReactNode; value: number | string; index: number | string }) => {
  return (
    <div role="tabpanel" hidden={value !== index} style={{ padding: '16px' }}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

// Standard Tabs (tabname under bar)
export const Standard: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>(args.defaultValue ?? args.tabs[0]?.id ?? 0);
    return (
      <Box>
        <AppTabs
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <Box sx={{ borderTop: 1, borderColor: 'divider', p: 2 }}>
          <TabPanel value={value} index={args.tabs[0]?.id ?? 0}>
            <Typography>Content for {args.tabs[0]?.displayName}</Typography>
          </TabPanel>
          <TabPanel value={value} index={args.tabs[1]?.id ?? 1}>
            <Typography>Content for {args.tabs[1]?.displayName}</Typography>
          </TabPanel>
          <TabPanel value={value} index={args.tabs[2]?.id ?? 2}>
            <Typography>Content for {args.tabs[2]?.displayName}</Typography>
          </TabPanel>
        </Box>
      </Box>
    );
  },
  args: {
    tabs: basicTabs,
    variant: 'standard',
    textColor: 'primary',
    indicatorColor: 'primary',
  },
};

export const StandardCentered: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>(args.defaultValue ?? args.tabs[0]?.id ?? 0);
    return (
      <Box>
        <AppTabs
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </Box>
    );
  },
  args: {
    tabs: basicTabs,
    variant: 'standard',
    centered: true,
    textColor: 'primary',
    indicatorColor: 'primary',
  },
};

// Full Color Active Tab
export const FullColor: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>(args.defaultValue ?? args.tabs[0]?.id ?? 0);
    return (
      <Box>
        <AppTabs
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <Box sx={{ borderTop: 1, borderColor: 'divider', p: 2 }}>
          <TabPanel value={value} index={args.tabs[0]?.id ?? 0}>
            <Typography>Content for {args.tabs[0]?.displayName}</Typography>
          </TabPanel>
          <TabPanel value={value} index={args.tabs[1]?.id ?? 1}>
            <Typography>Content for {args.tabs[1]?.displayName}</Typography>
          </TabPanel>
          <TabPanel value={value} index={args.tabs[2]?.id ?? 2}>
            <Typography>Content for {args.tabs[2]?.displayName}</Typography>
          </TabPanel>
        </Box>
      </Box>
    );
  },
  args: {
    tabs: basicTabs,
    variant: 'fullColor',
    textColor: 'primary',
    indicatorColor: 'primary',
  },
};

// Full Width Tabs
export const FullWidth: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>(args.defaultValue ?? args.tabs[0]?.id ?? 0);
    return (
      <Box>
        <AppTabs
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <Box sx={{ borderTop: 1, borderColor: 'divider', p: 2 }}>
          <TabPanel value={value} index={args.tabs[0]?.id ?? 0}>
            <Typography>Content for {args.tabs[0]?.displayName}</Typography>
          </TabPanel>
          <TabPanel value={value} index={args.tabs[1]?.id ?? 1}>
            <Typography>Content for {args.tabs[1]?.displayName}</Typography>
          </TabPanel>
          <TabPanel value={value} index={args.tabs[2]?.id ?? 2}>
            <Typography>Content for {args.tabs[2]?.displayName}</Typography>
          </TabPanel>
        </Box>
      </Box>
    );
  },
  args: {
    tabs: basicTabs,
    variant: 'fullWidth',
    textColor: 'primary',
    indicatorColor: 'primary',
  },
};

// Scrollable Tabs
export const Scrollable: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>(args.defaultValue ?? args.tabs[0]?.id ?? 0);
    return (
      <Box>
        <AppTabs
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </Box>
    );
  },
  args: {
    tabs: manyTabs,
    variant: 'scrollable',
    scrollButtons: 'auto',
    allowScrollButtonsMobile: false,
    textColor: 'primary',
    indicatorColor: 'primary',
  },
};

// Tabs with Icons
export const WithIcons: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>(args.defaultValue ?? args.tabs[0]?.id ?? 0);
    return (
      <Box>
        <AppTabs
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </Box>
    );
  },
  args: {
    tabs: tabsWithIcons,
    variant: 'standard',
    textColor: 'primary',
    indicatorColor: 'primary',
  },
};

// Tabs with Counts
export const WithCounts: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>(args.defaultValue ?? args.tabs[0]?.id ?? 0);
    return (
      <Box>
        <AppTabs
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </Box>
    );
  },
  args: {
    tabs: tabsWithCounts,
    variant: 'standard',
    textColor: 'primary',
    indicatorColor: 'primary',
  },
};

// Disabled Tab
export const WithDisabled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>(args.defaultValue ?? args.tabs[0]?.id ?? 0);
    return (
      <Box>
        <AppTabs
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </Box>
    );
  },
  args: {
    tabs: [
      {
        id: '1',
        tabname: 'active',
        displayName: 'Active',
        disabled: false,
      },
      {
        id: '2',
        tabname: 'disabled',
        displayName: 'Disabled',
        disabled: true,
      },
      {
        id: '3',
        tabname: 'active-2',
        displayName: 'Active',
        disabled: false,
      },
    ],
    variant: 'standard',
    textColor: 'primary',
    indicatorColor: 'primary',
  },
};

// Secondary Color
export const SecondaryColor: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>(args.defaultValue ?? args.tabs[0]?.id ?? 0);
    return (
      <Box>
        <AppTabs
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </Box>
    );
  },
  args: {
    tabs: basicTabs,
    variant: 'standard',
    textColor: 'secondary',
    indicatorColor: 'secondary',
  },
};

// Vertical Tabs
export const Vertical: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>(args.defaultValue ?? args.tabs[0]?.id ?? 0);
    return (
      <Box sx={{ display: 'flex', height: 300 }}>
        <AppTabs
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <Box sx={{ borderLeft: 1, borderColor: 'divider', p: 2, flex: 1 }}>
          <TabPanel value={value} index={args.tabs[0]?.id ?? 0}>
            <Typography>Content for {args.tabs[0]?.displayName}</Typography>
          </TabPanel>
          <TabPanel value={value} index={args.tabs[1]?.id ?? 1}>
            <Typography>Content for {args.tabs[1]?.displayName}</Typography>
          </TabPanel>
          <TabPanel value={value} index={args.tabs[2]?.id ?? 2}>
            <Typography>Content for {args.tabs[2]?.displayName}</Typography>
          </TabPanel>
        </Box>
      </Box>
    );
  },
  args: {
    tabs: basicTabs,
    variant: 'standard',
    orientation: 'vertical',
    textColor: 'primary',
    indicatorColor: 'primary',
  },
};

// Complex Example
export const ComplexExample: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>(args.defaultValue ?? args.tabs[0]?.id ?? 0);
    return (
      <Box>
        <AppTabs
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <Box sx={{ borderTop: 1, borderColor: 'divider', p: 3, minHeight: 200 }}>
          <TabPanel value={value} index={args.tabs[0]?.id ?? 0}>
            <Typography variant="h6">{args.tabs[0]?.displayName} Content</Typography>
            <Typography>This is the content for the first tab.</Typography>
          </TabPanel>
          <TabPanel value={value} index={args.tabs[1]?.id ?? 1}>
            <Typography variant="h6">{args.tabs[1]?.displayName} Content</Typography>
            <Typography>This is the content for the second tab.</Typography>
          </TabPanel>
          <TabPanel value={value} index={args.tabs[2]?.id ?? 2}>
            <Typography variant="h6">{args.tabs[2]?.displayName} Content</Typography>
            <Typography>This is the content for the third tab.</Typography>
          </TabPanel>
        </Box>
      </Box>
    );
  },
  args: {
    tabs: tabsWithCounts,
    variant: 'fullColor',
    textColor: 'primary',
    indicatorColor: 'primary',
  },
};


