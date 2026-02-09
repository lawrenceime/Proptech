"use client";
import React, { useState } from 'react';
import { 
  Box, 
  Typography,
  Menu, 
  MenuItem, 
  Divider, 
  ListItemIcon, 
  Avatar,  
} from '@mui/material';


import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ConstructionIcon from '@mui/icons-material/Construction';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { ProfileTooltip } from '@/components/custom-tooltip';
import { colors } from '@/theme/colors';


const menuItems = [
  { label: 'Teams', icon: <PeopleOutlineIcon fontSize="small" /> },
  { label: 'Snagging', icon: <ConstructionIcon fontSize="small" /> },
  { label: 'Feedback', icon: <ChatBubbleOutlineIcon fontSize="small" /> },
  { label: 'Geo-Bucket', icon: <MapOutlinedIcon fontSize="small" /> },
  { label: 'Change password', icon: <LockOutlinedIcon fontSize="small" /> },
];

const UserHeaderProfile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>

      <ProfileTooltip
        title={
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Dylan Frank</Typography>
            <Typography variant="caption" sx={{ color: '#667085' }}>dylanfran96@gmail.com</Typography>
          </Box>
        }
        placement="bottom"
      >
        <Box 
          onClick={handleClick} 
          sx={{ cursor: 'pointer', transition: '0.2s', '&:hover': { opacity: 0.8 } }}
        >
          <Avatar sx={{ bgcolor: colors.white.main, fontWeight: 600 , color : colors.green.main }}>D</Avatar>
        </Box>
      </ProfileTooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          elevation: 0,
          sx: {
            width: 300,
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
            mt: 1.5,
            borderRadius: '16px',
            p: 1,
            '& .MuiMenuItem-root': {
                px: 2,
                py: 1.5,
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 500,
                color: '#344054',
            },
          },
        }}
      >
        <Box sx={{ p: 1 }}>
          <Box sx={{ 
            bgcolor: '#F9FAFB', 
            borderRadius: '12px', 
            p: 2, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            border: '1px solid #EAECF0'
          }}>
            <Avatar sx={{ bgcolor: '#115E59', width: 48, height: 48 }}>D</Avatar>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>Dylan Frank</Typography>
              <Typography variant="body2" sx={{ color: '#667085' }}>dylan96@mail.com</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 1 }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <MenuItem onClick={handleClose}>
                <ListItemIcon sx={{ color: '#344054', minWidth: '40px !important' }}>
                  {item.icon}
                </ListItemIcon>
                {item.label}
              </MenuItem>

              <Divider sx={{ mx: 2, my: 0.5, borderColor: '#F2F4F7' }} />
            </React.Fragment>
          ))}

          <MenuItem onClick={handleClose} sx={{ color: '#F04438 !important' }}>
            <ListItemIcon sx={{ color: '#F04438', minWidth: '40px !important' }}>
              <LogoutOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
};

export default UserHeaderProfile;