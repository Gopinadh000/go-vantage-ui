import { useState, useEffect } from "react";
import { Badge, Box } from "@mui/material";

type AvatarSize = 'sm' | 'md' | 'lg';
type AvatarShape = 'rounded' | 'square' | 'rounded-corners';
type AvatarStatus = 'online' | 'offline' | 'away' | 'inactive' | null;

type AppAvatarProps = {
  src?: string;
  imgname?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  alt?: string;
};

const AppAvatar = ({
  src,
  imgname,
  size = 'md',
  shape = 'rounded',
  status = null,
  alt,
}: AppAvatarProps) => {
  const [imageError, setImageError] = useState(false);

  // Reset error state when src changes
  useEffect(() => {
    setImageError(false);
  }, [src]);

  const sizeMap: Record<AvatarSize, number> = {
    sm: 32,
    md: 48,
    lg: 64,
  };

  const statusColorMap: Record<Exclude<AvatarStatus, null>, string> = {
    online: '#4caf50',
    offline: '#9e9e9e',
    away: '#ff9800',
    inactive: '#f44336',
  };

  const getBorderRadius = () => {
    switch (shape) {
      case 'rounded':
        return '50%';
      case 'square':
        return '0px';
      case 'rounded-corners':
        return '8px';
      default:
        return '50%';
    }
  };

  const avatarSize = sizeMap[size];
  const borderRadius = getBorderRadius();
  const displayInitial = imgname?.[0]?.toUpperCase() || 'A';

  const avatar = (
    <Box
      sx={{
        width: avatarSize,
        height: avatarSize,
        borderRadius: borderRadius,
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'action.selected',
        color: 'text.primary',
        fontSize: avatarSize * 0.4,
        fontWeight: 500,
        position: 'relative',
      }}
    >
      {src && !imageError ? (
        <Box
          component="img"
          src={src}
          alt={alt || imgname || 'Avatar'}
          onError={() => setImageError(true)}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: borderRadius,
          }}
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {displayInitial}
        </Box>
      )}
    </Box>
  );

  if (status) {
    const badgeSize = size === 'sm' ? 10 : size === 'md' ? 14 : 16;
    return (
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <Box
            sx={{
              width: badgeSize,
              height: badgeSize,
              borderRadius: '50%',
              backgroundColor: statusColorMap[status],
              border: '2px solid white',
              boxSizing: 'border-box',
            }}
          />
        }
      >
        {avatar}
      </Badge>
    );
  }

  return avatar;
};

export default AppAvatar;
