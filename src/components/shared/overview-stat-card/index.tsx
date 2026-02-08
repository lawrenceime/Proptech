import { Button, Card, Stack, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Grid from "@mui/material/Grid";

export const OverviewStatsCard = ({ title, stats }: { title: string, stats: any[] }) => (
  <Card sx={{ borderRadius: '16px', p: 3, boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1)' }}>
    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{title}</Typography>
      <Button endIcon={<ChevronRightIcon />} sx={{ textTransform: 'none', color: '#475467', fontSize: '12px' }}>View all</Button>
    </Stack>
    <Grid container>
      {stats.map((stat, index) => (
        <Grid size={{xs : 4}} key={index}>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>{stat.label}</Typography>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>{stat.value}</Typography>
        </Grid>
      ))}
    </Grid>
  </Card>
);

