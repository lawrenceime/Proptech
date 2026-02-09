
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  Box, 
  Typography, 
  Button, 
  Stack, 
  IconButton 
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import InsightsIcon from '@mui/icons-material/Insights';
import BarChartIcon from '@mui/icons-material/BarChart';
import CloseIcon from '@mui/icons-material/Close';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureProps) => (
  <Stack direction="row" spacing={2} sx={{ mb: 3, alignItems: 'flex-start' }}>
    <Box sx={{ 
      color: '#344054', 
      mt: 0.5,
      '& svg': { fontSize: 24 } 
    }}>
      {icon}
    </Box>
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#101828', lineHeight: 1.2 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: '#667085', mt: 0.5, lineHeight: 1.5 }}>
        {description}
      </Typography>
    </Box>
  </Stack>
);

type BudgetModalProps = {
  open: boolean;
  onClose: () => void;
}

const BudgetModal = ({ open, onClose }: BudgetModalProps) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: { borderRadius: '24px', overflow: 'hidden' }
      }}
    >
      <DialogContent sx={{ p: 0 }}>

        <Box sx={{ 
          bgcolor: '#06192C', 
          height: 200, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          position: 'relative'
        }}>
          <IconButton 
            onClick={onClose}
            sx={{ position: 'absolute', top: 12, right: 12, color: 'white', opacity: 0.7 }}
          >
            <CloseIcon />
          </IconButton>
          

          <Box sx={{ 
            width: 80, 
            height: 80, 
            border: '3px solid rgba(255,255,255,0.8)', 
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1
          }}>
             <Box sx={{ width: 30, height: 15, border: '2px solid white', borderRadius: '4px' }} />
             <GridDots />
          </Box>
        </Box>


        <Box sx={{ p: 4, bgcolor: 'white' }}>
          <FeatureItem 
            icon={<TuneIcon />}
            title="Set up annual budgets by account category"
            description="Allocate funds across income and expense lines with full visibility."
          />
          <FeatureItem 
            icon={<InsightsIcon />}
            title="Track actuals vs budget in real time"
            description="See how your community is performing against plan, month by month."
          />
          <FeatureItem 
            icon={<BarChartIcon />}
            title="Adjust figures and forecast with ease"
            description="Edit amounts, apply percentage changes, or roll forward last year's data—all in one place."
          />

          <Button 
            fullWidth 
            variant="contained" 
            sx={{ 
              bgcolor: '#1D1D1D', 
              color: 'white', 
              borderRadius: '100px', 
              py: 1.8,
              mt: 2,
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 600,
              '&:hover': { bgcolor: '#000' }
            }}
          >
            Create Budget
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};


const GridDots = () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0.5 }}>
        {[...Array(6)].map((_, i) => (
            <Box key={i} sx={{ width: 4, height: 4, bgcolor: 'white', borderRadius: '50%' }} />
        ))}
    </Box>
);

export default BudgetModal;