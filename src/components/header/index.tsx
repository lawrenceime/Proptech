'use client'
import React, { useState } from 'react'
import { colors } from '@/theme/colors'
import { Box, Stack } from '@mui/material'
import Image from 'next/image'
import { Avatar } from '@/components/avatar'
import dynamic from 'next/dynamic'
import { CustomTooltip } from '../custom-tooltip'
import UserHeaderProfile from '@/features/user-profile'

const BudgetModal = dynamic(() => import('@/components/modals/BudgetModal'), {
    ssr: false,
    // loading: () => <p>Loading...</p>
})

const CalendarDrawer = dynamic(() => import('@/components/modals/CalendarDrawer'), {
    ssr: false,
    // loading: () => <p>Loading...</p>
})

const Header = () => {
    const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const headerIcons = [
        { alt: 'Budgeting', src: '/assets/calculator.svg', action: () => setIsBudgetModalOpen(true) },
        { alt: 'Calendar', src: '/assets/Budgeting.svg', action: () => setIsCalendarOpen(true) },
        { alt: 'Activity Log', src: '/assets/Activity Log.svg' },
        { alt: 'Payout Center', src: '/assets/Payout Center.svg' },
        { alt: 'Marketplace', src: '/assets/Marketplace.svg' },
    ];

    return (
        <Box sx={{ bgcolor: colors.green.main, width: "100%", py: 3, px: 3, }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo Section */}
                <Box sx={{ display: 'flex',  alignItems: 'center' }}>
                    <Image alt='logo' src='/assets/Logo.png' width={200} height={26} />
                </Box>
                
                {/* Icons Section */}
                <Stack  direction="row" spacing={3} alignItems="center" sx={{ pr: 3 }}>
                    {headerIcons.map((icon, index) => (
                        <CustomTooltip 
                            key={index} 
                            title={icon.alt} 
                            placement="bottom" 
                            enterTouchDelay={0}
                        >
                            <Box 
                                onClick={icon.action} 
                                sx={{ 
                                    cursor: 'pointer', 
                                    transition: 'transform 0.2s', 
                                    '&:hover': { transform: 'scale(1.1)' } 
                                }}
                            >
                                <Image alt={icon.alt} src={icon.src} width={32} height={32} />
                            </Box>
                        </CustomTooltip>
                    ))}
                    
                    <UserHeaderProfile />
                </Stack>
            </Box>
            <BudgetModal
                open={isBudgetModalOpen}
                onClose={() => setIsBudgetModalOpen(false)}
            />
            <CalendarDrawer
                open={isCalendarOpen}
                onClose={() => setIsCalendarOpen(false)}
            />
        </Box>
    )
}

export default Header