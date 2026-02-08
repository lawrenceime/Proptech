import { Box, Stack, Typography } from "@mui/material";

export const FeaturedCard = ({ tag, title, image }: any) => (
  <Box sx={{ 
    height: 300, 
    borderRadius: '16px', 
    overflow: 'hidden', 
    position: 'relative',
    backgroundImage: `url(${image})`, // Replace with real images
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    p: 3,
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%)',
    }
  }}>
    <Box sx={{ zIndex: 1, color: 'white' }}>
      <Typography variant="caption" sx={{ fontWeight: 600, opacity: 0.9 }}>{tag}</Typography>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>{title}</Typography>
      {/* Carousel dots placeholder */}
      <Stack direction="row" spacing={1} mt={2}>
        {[1, 2, 3].map((d) => (
          <Box key={d} sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: d === 1 ? 'white' : 'rgba(255,255,255,0.4)' }} />
        ))}
      </Stack>
    </Box>
  </Box>
);