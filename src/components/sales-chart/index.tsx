"use client";
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Box } from '@mui/material';

const data = [
  { name: 'Jan', inflow: 38, mrr: 28, gmv: 15 },
  { name: 'Feb', inflow: 30, mrr: 25, gmv: 12 },
  { name: 'Mar', inflow: 18, mrr: 15, gmv: 10 },
  { name: 'Apr', inflow: 20, mrr: 18, gmv: 12 },
  { name: 'May', inflow: 15, mrr: 10, gmv: 8 },
  { name: 'Jun', inflow: 45, mrr: 48, gmv: 20 },
  { name: 'Jul', inflow: 35, mrr: 30, gmv: 18 },
  { name: 'Aug', inflow: 32, mrr: 28, gmv: 22 },
  { name: 'Sep', inflow: 42, mrr: 40, gmv: 15 },
];

const SalesChart = () => {
  return (
    <Box sx={{ width: '100%', height: 300, mt: 2 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
            data={data} 
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barGap={4} 
        >
          <CartesianGrid 
            vertical={false} 
            strokeDasharray="0" 
            stroke="#F2F4F7" 
          />
          
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#667085', fontSize: 12, fontWeight: 500 }} 
            dy={10}
          />

          <YAxis 
            axisLine={false} 
            tickLine={false} 
            domain={[0, 50]} 
            ticks={[0, 10, 20, 30, 40, 50]}
            tick={{ fill: '#667085', fontSize: 12 }} 
            tickFormatter={(value) => value === 0 ? '0' : `${value}m`}
          />

          <Tooltip cursor={{ fill: '#F9FAFB' }} />
          
          {/* Total Inflow - Blue */}
          <Bar 
            dataKey="inflow" 
            fill="#3538CD" 
            radius={[2, 2, 0, 0]} 
            barSize={7} 
          />
          {/* MRR - Green */}
          <Bar 
            dataKey="mrr" 
            fill="#12B76A" 
            radius={[2, 2, 0, 0]} 
            barSize={7} 
          />
          {/* GMV - Red/Orange */}
          <Bar 
            dataKey="gmv" 
            fill="#F04438" 
            radius={[2, 2, 0, 0]} 
            barSize={7} 
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SalesChart;