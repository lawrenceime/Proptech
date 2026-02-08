import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { ArrowUpward as ArrowUpwardIcon, ArrowDownward as ArrowDownwardIcon } from "@mui/icons-material";
import Grid from "@mui/material/Grid";

const SalesOverviewCard = () => {
  return (
    <Card sx={{ borderRadius: '16px', p: 3, boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1)' }}>
      {/* Card Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={4}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Sales Overview</Typography>
          <Typography variant="body2" color="text.secondary">Showing overview Jan 2022 - Sep 2022</Typography>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button variant="outlined" sx={{ borderRadius: '100px', textTransform: 'none', px: 3, borderColor: '#EAECF0', color: '#344054' }}>
            View Transactions
          </Button>
          <Box sx={{ bgcolor: '#F2F4F7', borderRadius: '8px', p: 0.5, display: 'flex' }}>
            {['1 Week', '1 Month', '1 Year'].map((t) => (
              <Button key={t} size="small" sx={{ 
                textTransform: 'none', 
                color: t === '1 Year' ? '#101828' : '#667085',
                bgcolor: t === '1 Year' ? 'white' : 'transparent',
                boxShadow: t === '1 Year' ? '0px 1px 2px rgba(16, 24, 40, 0.05)' : 'none',
                px: 2,
                '&:hover': { bgcolor: t === '1 Year' ? 'white' : 'rgba(0,0,0,0.04)' }
              }}>{t}</Button>
            ))}
          </Box>
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {/* Placeholder for Chart - In a real app, use Recharts or Chart.js here */}
        <Grid size={{xs : 12 , md : 6}}>
            <Box sx={{ height: 250, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', pb: 2 }}>
                {/* Visual Placeholder for the bar chart */}
                {[40, 70, 30, 50, 20, 90, 60, 45, 80].map((h, i) => (
                    <Box key={i} sx={{ width: 8, height: `${h}%`, bgcolor: i % 2 === 0 ? '#3B82F6' : '#10B981', borderRadius: '4px 4px 0 0' }} />
                ))}
            </Box>
        </Grid>

        {/* Currency Metrics Grid */}
        <Grid size={{xs : 12 , md : 6}}>
          <Grid container spacing={2}>
             <MetricBox label="Total Inflow" value="₦120,000,000.00" trend="2.5%" color="#3538CD" up />
             <MetricBox label="MRR" value="₦50,000,000.00" trend="2.5%" color="#027A48" up />
             <MetricBox label="Commission Revenue" value="₦200,000,000.00" trend="0.5%" color="#027A48" />
             <MetricBox label="GMV" value="₦100,000,000.00" trend="0.5%" color="#B42318" />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

interface MetricBoxProps {
  label: string;
  value: string;
  trend: string;
  color: string;
  up?: boolean;
}

const MetricBox = ({ label, value, trend, color, up }: MetricBoxProps) => (
  <Grid size={{xs : 6}}>
    <Box sx={{ border: '1px solid #EAECF0', borderRadius: '12px', p: 2 }}>
      <Typography variant="caption" color="text.secondary" fontWeight={500}>{label}</Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: color, my: 0.5, fontSize: '14px' }}>{value}</Typography>
      <Stack direction="row" alignItems="center" spacing={0.5}>
        {up ? <ArrowUpwardIcon sx={{ fontSize: 12, color: '#12B76A' }} /> : <ArrowDownwardIcon sx={{ fontSize: 12, color: '#F04438' }} />}
        <Typography variant="caption" sx={{ color: up ? '#12B76A' : '#F04438', fontWeight: 600 }}>{trend}</Typography>
      </Stack>
    </Box>
  </Grid>
);

export default SalesOverviewCard;