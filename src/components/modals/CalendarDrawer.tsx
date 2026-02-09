// components/modals/CalendarDrawer.tsx
import React from 'react';
import { Drawer, Box, Typography, IconButton, Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import dayjs, { Dayjs } from 'dayjs';

type CalendarDrawerProps = {
  open: boolean;
  onClose: () => void;
}

const CalendarDrawer = ({ open, onClose }: CalendarDrawerProps) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2023-11-16'));

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 450 },
          bgcolor: '#0F0F0F', 
          color: 'white',
          borderLeft: '1px solid #333',
        }
      }}
    >
      {/* Header Section */}
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>Calendar</Typography>
        </Stack>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ 
            width: '100%',

            '& .MuiDateCalendar-root': {
                width: '100%',
                maxHeight: 'none',
                height: 'auto',
                bgcolor: 'transparent',
            },
            '& .MuiPickersCalendarHeader-root': {
                color: 'white',
                marginTop: 4,
                marginBottom: 4,
                paddingLeft: '24px',
                paddingRight: '24px',
            },
            '& .MuiDayCalendar-header': {
                justifyContent: 'space-between',
                px: 2,
                '& .MuiTypography-root': {
                    color: '#666',
                    fontSize: '12px',
                    fontWeight: 600,
                }
            },
            '& .MuiDayCalendar-weekContainer': {
                justifyContent: 'space-between',
                px: 2,
                borderBottom: '1px solid #222', 
            },
            '& .MuiPickersDay-root': {
                color: '#999',
                fontSize: '14px',
                width: '50px',
                height: '80px', 
                borderRadius: 0,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                pt: 1,
                pl: 1,
                '&:hover': { bgcolor: '#222' },
                '&.Mui-selected': {
                    bgcolor: '#2F54EB',
                    borderRadius: '20px',
                    height: '24px',
                    width: '32px',
                    marginTop: '8px',
                    marginLeft: '8px',
                    color: 'white',
                }
            },
            // Hide the default circle highlight of today
            '& .MuiPickersDay-today': {
                border: 'none !important'
            }
        }}>
          <DateCalendar 
            value={value} 
            onChange={(newValue) => setValue(newValue)} 
            showDaysOutsideCurrentMonth
          />
        </Box>
      </LocalizationProvider>
    </Drawer>
  );
};

export default CalendarDrawer;