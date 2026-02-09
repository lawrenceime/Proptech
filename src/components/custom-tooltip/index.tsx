import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Zoom } from '@mui/material';

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip 
    {...props} 
    classes={{ popper: className }} 
    TransitionComponent={Zoom} 
    arrow 
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#1A1A1A',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 500,
    padding: '10px 24px',
    borderRadius: '16px', 
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
    fontFamily: 'inherit',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#1A1A1A', 
    '&::before': {
        borderRadius: '2px', 
    }
  },
}));

export const ProfileTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} arrow />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    color: '#101828',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid #EAECF0',
    boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
    maxWidth: 250,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#ffffff',
    '&::before': {
      border: '1px solid #EAECF0',
    },
  },
}));