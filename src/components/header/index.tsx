import { colors } from '@/theme/colors'
import { Box } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box sx={{bgcolor : colors.green.main , width : "100%" , py : 5 , px : 3 }}>
        <Box sx={{display : 'flex' , alignItems : 'center' , justifyContent : 'space-between'}}>

        </Box>
    </Box>
  )
}

export default Header