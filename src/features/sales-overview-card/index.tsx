"use client";
import React from "react";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import SalesChart from "@/components/sales-chart";
import Grid from "@mui/material/Grid";
import { MetricBox } from "@/components/metric-box";

const SalesOverviewCard = () => {
  return (
    <Card 
      sx={{ 
        borderRadius: '16px', 
        p: 3, 
        boxShadow: 'none', 
        border: '1px solid #EAECF0' 
      }}
    >

      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        justifyContent="space-between" 
        spacing={2} 
        sx={{borderBottom: `1px solid #E4E4E4`}}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#101828' }}>
            Sales Overview
          </Typography>
          <Typography variant="body2" sx={{ color: '#667085' }}>
            Showing overview Jan 2022 - Sep 2022
          </Typography>
        </Box>

        <Stack direction="column" spacing={2} alignItems="center" sx={{mb : 2}}>
          <Button 
            variant="outlined" 
            sx={{ 
              borderRadius: '100px', 
              textTransform: 'none', 
              px: 3,
              py : 1, 
              borderColor: '#EAECF0', 
              color: '#344054',
              fontWeight: 600,
              fontSize: '14px',
              '&:hover': { borderColor: '#D0D5DD', bgcolor: '#F9FAFB' }
            }}
          >
            View Transactions
          </Button>

          {/* Time Filter Tabs */}
          <Box sx={{  p: 0.5, display: 'flex'  }}>
            {['1 Week', '1 Month', '1 Year'].map((t) => {
              const isActive = t === '1 Year';
              return (
                <Button 
                  key={t} 
                  size="small" 
                  sx={{ 
                    textTransform: 'none', 
                    fontSize: '13px',
                    fontWeight: 600,
                    px: 2,
                    borderRadius: '8px',
                    color: isActive ? '#101828' : '#667085',
                    bgcolor: isActive ? 'white' : 'transparent',
                    boxShadow: isActive ? '0px 1px 2px rgba(16, 24, 40, 0.06)' : 'none',
                    '&:hover': { bgcolor: isActive ? 'white' : 'transparent' }
                  }}
                >
                  {t}
                </Button>
              );
            })}
          </Box>
          
        </Stack>
      </Stack>

      {/* 2. Main Content Grid */}
      <Grid container spacing={4} alignItems="center">

        <Grid size={{xs : 12 , md : 7.5}}>
          <SalesChart />
        </Grid>


        <Grid size={{xs : 12 , md : 4.5}}>
          <Grid container spacing={2}>
             <MetricBox label="Total Inflow" value="₦120,000,000.00" trend="2.5%" color="#3538CD" up />
             <MetricBox label="MRR" value="₦50,000,000.00" trend="2.5%" color="#027A48" up />
             {/* Note: In image, these are red (down) */}
             <MetricBox label="Commission Revenue" value="₦200,000,000.00" trend="0.5%" color="#027A48" />
             <MetricBox label="GMV" value="₦100,000,000.00" trend="0.5%" color="#B42318" />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};



export default SalesOverviewCard;






