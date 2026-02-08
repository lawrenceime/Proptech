'use client'
import React from 'react'
import { colors } from '@/theme/colors'
import { Box } from '@mui/material'
import Image from 'next/image'
import { Avatar } from '@/components/avatar'

const Header = () => {

    const handleAvatarClick = () => {
        console.log('Avatar clicked');
    }
  return (
    <Box sx={{bgcolor : colors.green.main , width : "100%" , py : 3 , px : 3 ,  }}>
        <Box sx={{display : 'flex' , alignItems : 'center' , justifyContent : 'space-between'}}>
           <Box sx={{display : 'flex' , gap : 2 , alignItems : 'center'}}>
                <Image
                alt='expert listing logo'
                src='/assets/expert_listing_logo.svg'
                width={21}
                height={21}
                />
                <Image
                alt='expert listing text'
                src='/assets/expert_listing_text.svg'
                width={167}
                height={26}
                />
           </Box>
         <Box sx={{color : colors.white.main, gap : 3 , display : 'flex' , alignItems : 'center', pr : 3}}>
            <Image
                alt='budgeting icon'
                src='/assets/calculator.svg'
                width={32}
                height={32}
                />
             <Image
                alt='budgeting icon'
                src='/assets/Budgeting.svg'
                width={32}
                height={32}
                />
                 <Image
                alt='Activity Log icon'
                src='/assets/Activity Log.svg'
                width={32}
                height={32}
                />
                 <Image
                alt='Payout icon'
                src='/assets/Payout Center.svg'
                width={32}
                height={32}
                />
                 <Image
                alt='Market place icon'
                src='/assets/Marketplace.svg'
                width={32}
                height={32}
                />
                <Avatar handleClick={handleAvatarClick}/>
         </Box>
        </Box>
    </Box>
  )
}

export default Header