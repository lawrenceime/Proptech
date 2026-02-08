"use client"; 

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Button, Stack, Container } from '@mui/material';
import { colors } from '@/theme/colors';


export type NavItem = {
  name: string;
  link: string;
  icon: React.ElementType;
  type?: "link" | "button"; 
}

export type SubNavbarProps = {
  options: NavItem[];
  action?: React.ReactNode;
}

const SubNavbar = ({ options, action }: SubNavbarProps) => {
  const pathname = usePathname();

  return (
    <Box 
      component="nav" 
      sx={{ 
        bgcolor: 'white', 
        borderBottom: `1px solid ${colors.grey.border}`,
        py: 1, 
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        
      }}
    >
      <Container maxWidth="xl">
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center"
        >
          <Stack direction="row" spacing={15} sx={{ overflowX: 'auto' }}>
            {options.map((item) => {

              const isActive = pathname === item.link;
              const Icon = item.icon;

              return (
                <Button
                  key={item.link}
                  component={Link} 
                  href={item.link}
                  startIcon={<Icon sx={{ fontSize: '20px !important' , color : 'inherit' }} />}
                  sx={{
                    textTransform: 'none',
                    borderRadius: '8px',
                    px: 3,
                    py: 1,
                    fontSize: '14px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    
                    // Logic for active vs inactive
                    color: isActive ? colors.green.activeText : colors.black.inactive,
                    bgcolor: isActive ? colors.green.activeBg : 'transparent',
                    
                    '&:hover': {
                      bgcolor: isActive ? colors.hover.bgActive : colors.hover.bgInactive,
                      color: isActive ? colors.hover.textActive : colors.hover.textInactive,
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  {item.name}
                </Button>
              );
            })}
          </Stack>

          {action && <Box>{action}</Box>}
        </Stack>
      </Container>
    </Box>
  );
};

export default SubNavbar;