
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { 
  ArrowUpward as ArrowUpwardIcon, 
  ArrowDownward as ArrowDownwardIcon 
} from "@mui/icons-material";

interface MetricBoxProps {
  label: string;
  value: string;
  trend: string;
  color: string;
  up?: boolean;
}

export const MetricBox = ({ label, value, trend, color, up }: MetricBoxProps) => (
  <Grid size={{xs : 6}}>
    <Box 
      sx={{ 
        border: '1px solid #EAECF0', 
        borderRadius: '12px', 
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Typography variant="caption" sx={{ color: '#667085', fontWeight: 500, fontSize: '12px' }}>
        {label}
      </Typography>
      
      <Typography 
        variant="subtitle1" 
        sx={{ 
          fontWeight: 700, 
          color: color, 
          my: 0.5, 
          fontSize: '14px',
          whiteSpace: 'nowrap' 
        }}
      >
        {value}
      </Typography>

      <Stack direction="row" alignItems="center" spacing={0.5}>
        {up ? (
          <ArrowUpwardIcon sx={{ fontSize: 14, color: '#12B76A' }} />
        ) : (
          <ArrowDownwardIcon sx={{ fontSize: 14, color: '#F04438' }} />
        )}
        <Typography 
          variant="caption" 
          sx={{ color: up ? '#12B76A' : '#F04438', fontWeight: 600, fontSize: '12px' }}
        >
          {trend}
        </Typography>
      </Stack>
    </Box>
  </Grid>
);