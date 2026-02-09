"use client";
import { Fab, Box, styled, Tooltip } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum'; 


const StyledFab = styled(Fab)(({ theme }) => ({
  backgroundColor: '#262626', 
  color: '#ffffff',
  width: 64,
  height: 64,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
  border: '2px solid #404040', 
  '&:hover': {
    backgroundColor: '#333333',
    transform: 'scale(1.05)',
  },
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  

  '& .MuiSvgIcon-root': {
    fontSize: 30,
  }
}));

const ChatWidget = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 32,
        right: 32,  
        zIndex: 2000, 
      }}
    >
      <Tooltip title="Support Chat" placement="left">
        <StyledFab aria-label="chat">
          <ForumIcon />
        </StyledFab>
      </Tooltip>
    </Box>
  );
};

export default ChatWidget;