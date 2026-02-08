'use client'
import { colors } from '@/theme/colors'
import { Box } from '@mui/material'
import React from 'react'

type AvatarProps = {
    handleClick: () => void
}

export const Avatar : React.FC<AvatarProps> = ({ handleClick }) => {
  return (
    <Box onClick={handleClick} sx={{ display : 'flex' , alignItems : 'center' , justifyContent : 'center' , width : 40 , height : 40 , borderRadius : '50%' , bgcolor : colors.white.main , color : colors.green.main, fontWeight : 600 , cursor : 'pointer'     }}>
      D
    </Box>
  )
}

