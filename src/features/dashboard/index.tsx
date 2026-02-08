import React from 'react'
import Header from '@/components/header'
import { Box,  Typography, Card, Button, Stack, Chip, Divider, Avatar } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Grid from "@mui/material/Grid";
import SalesOverviewCard from '../sales-overview-card';
import { OverviewStatsCard } from '@/components/shared/overview-stat-card';
import { FeaturedCard } from '@/components/shared/feature-card';

const Dashboard = () => {
   return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#F9FAFB' }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, color: '#101828' }}>
        Welcome, Ahmed
      </Typography>

      <Grid container spacing={3}>
        {/* LEFT COLUMN: Sales Overview */}
        <Grid size={{xs : 12 , lg : 8}}>
          <SalesOverviewCard />
        </Grid>

        {/* RIGHT COLUMN: Listings and Users Summary */}
        <Grid size={{xs : 12 , lg : 4}}>
          <Stack spacing={3}>
            <OverviewStatsCard 
              title="Listings Overview" 
              stats={[
                { label: 'Total', value: '1.8k' },
                { label: 'Active', value: '80' },
                { label: 'Archived', value: '1k' }
              ]} 
            />
            <OverviewStatsCard 
              title="Users Overview" 
              stats={[
                { label: 'Total', value: '20.7k' },
                { label: 'Riders', value: '8.5k' },
                { label: 'Subscribers', value: '7.5k' }
              ]} 
            />
          </Stack>
        </Grid>

        {/* BOTTOM ROW: Featured Listing Cards */}
        <Grid size={{xs : 12 , md : 4}}>
          <FeaturedCard tag="MOST CLICKED" title="Urban Prime Plaza Premiere" image="/listing1.jpg" />
        </Grid>
        <Grid size={{xs : 12 , md : 4}}>
          <FeaturedCard tag="MOST WATCHLISTED" title="Urban Prime Plaza Premiere" image="/listing2.jpg" />
        </Grid>
        <Grid size={{xs : 12 , md : 4}}>
          <FeaturedCard tag="HOTTEST LISTING" title="Urban Prime Plaza Premiere" image="/listing3.jpg" />
        </Grid>
      </Grid>
    </Box>
  );

}

export default Dashboard