import React from 'react'
import useResponsive from '../useResponsive'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

export default function NavBar() {

    const isDesktop = useResponsive('up', 'md')

    return (
        isDesktop ?
            <DesktopMenu /> : <MobileMenu />
    )
}
