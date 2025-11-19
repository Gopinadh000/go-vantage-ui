import React, { useState } from 'react';
import {
  Tabs as MuiTabs,
  Tab as MuiTab,
  Box,
  Badge,
  type SxProps,
  type Theme,
} from '@mui/material';
import type { ReactElement } from 'react';

export type TabData = {
  id: string;
  tabname: string;
  displayName: string;
  iconName?: ReactElement | string;
  disabled?: boolean;
  tabCount?: number;
};

type TabVariant = 'standard' | 'fullColor' | 'fullWidth' | 'scrollable';

type AppTabsProps = {
  tabs: TabData[];
  variant?: TabVariant;
  orientation?: 'horizontal' | 'vertical';
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number, tab: TabData) => void;
  textColor?: 'primary' | 'secondary' | 'inherit';
  indicatorColor?: 'primary' | 'secondary';
  centered?: boolean;
  scrollButtons?: boolean | 'auto';
  allowScrollButtonsMobile?: boolean;
  sx?: SxProps<Theme>;
};

const AppTabs: React.FC<AppTabsProps> = ({
  tabs,
  variant = 'standard',
  orientation = 'horizontal',
  value: controlledValue,
  defaultValue,
  onChange,
  textColor = 'primary',
  indicatorColor = 'primary',
  centered = false,
  scrollButtons = 'auto',
  allowScrollButtonsMobile = false,
  sx,
}) => {
  const [internalValue, setInternalValue] = useState<string | number>(
    defaultValue ?? tabs[0]?.id ?? 0
  );

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleChange = (_event: React.SyntheticEvent, newValue: string | number) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }

    const selectedTab = tabs.find((tab) => tab.id === newValue || tabs.indexOf(tab) === newValue);
    if (selectedTab && onChange) {
      onChange(newValue, selectedTab);
    }
  };

  // Determine MUI variant and props based on our variant
  const getVariantProps = () => {
    switch (variant) {
      case 'fullWidth':
        return {
          variant: 'fullWidth' as const,
          centered: false,
        };
      case 'scrollable':
        return {
          variant: 'scrollable' as const,
          scrollButtons: scrollButtons,
          allowScrollButtonsMobile: allowScrollButtonsMobile,
        };
      case 'fullColor':
        return {
          variant: 'standard' as const,
        };
      case 'standard':
      default:
        return {
          variant: 'standard' as const,
          centered: centered,
        };
    }
  };

  // Render tab content with icon, label, and badge
  const renderTabContent = (tab: TabData) => {
    const hasCount = tab.tabCount !== undefined && tab.tabCount > 0;

    // If icon is a string, we'll need to handle it differently
    // For now, assuming iconName is a ReactElement
    const iconElement =
      typeof tab.iconName === 'string' ? null : (tab.iconName as ReactElement | undefined);

    const labelContent = (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          textTransform: 'none',
        }}
      >
        {iconElement && <Box sx={{ display: 'flex', alignItems: 'center' }}>{iconElement}</Box>}
        <Box component="span">{tab.displayName || tab.tabname}</Box>
        {hasCount && (
          <Badge
            badgeContent={tab.tabCount}
            color="primary"
            sx={{
              '& .MuiBadge-badge': {
                fontSize: '0.65rem',
                minWidth: '18px',
                height: '18px',
                padding: '0 4px',
              },
            }}
          />
        )}
      </Box>
    );

    return labelContent;
  };

  const variantProps = getVariantProps();

  // Custom styles for fullColor variant
  const fullColorStyles =
    variant === 'fullColor'
      ? {
          '& .MuiTab-root': {
            minHeight: 48,
            textTransform: 'none',
            '&.Mui-selected': {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              borderRadius: '4px 4px 0 0',
            },
            '&:not(.Mui-selected)': {
              color: 'text.primary',
            },
          },
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        }
      : undefined;

  return (
    <Box sx={{ width: '100%' }}>
      <MuiTabs
        value={currentValue}
        onChange={handleChange}
        textColor={textColor}
        indicatorColor={indicatorColor}
        orientation={orientation}
        sx={[fullColorStyles, sx].filter(Boolean) as SxProps<Theme>}
        {...variantProps}
      >
        {tabs.map((tab, index) => {
          const tabValue = tab.id || index;
          return (
            <MuiTab
              key={tab.id || index}
              value={tabValue}
              label={renderTabContent(tab)}
              disabled={tab.disabled}
              icon={typeof tab.iconName === 'string' ? undefined : (tab.iconName as ReactElement)}
              iconPosition="start"
              sx={{
                textTransform: 'none',
                minHeight: variant === 'fullColor' ? 48 : undefined,
              }}
            />
          );
        })}
      </MuiTabs>
    </Box>
  );
};

export default AppTabs;
