import React from 'react'
import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Box, Container, Slide, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { navBarConfig } from './NavBarConfig';
import LOGO from '../../assets/iris-logo.gif'
import { colors } from '../../utils';
import { createTheme } from '@mui/material/styles';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
        margin: 'auto'
    },
    main_btn: {
        backgroundColor: `${colors.blue.main} !important`,
        color: 'white !important',
        height: 48,
        padding: '0 30px',
        margin: '0 10px !important',
        // fontWeight: 'bold !important',
        fontSize: '17px !important'
    },
    nav_btn: {
        color: 'black !important',
        margin: '0 10px !important',
        fontSize: '17px !important'
    }
})

export default function DesktopMenu(props) {

    const styles = useStyles()

    function HideOnScroll(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
        });

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    const scrollTo = to => {
        scroll.scrollTo(to)
    }

    return (
        <>
            {/* <CssBaseline /> */}
            <HideOnScroll {...props}>
                <AppBar color='neutral' sx={{ boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }}>
                    <Toolbar className={styles.root}>
                        <img src={LOGO} />
                        <Box>
                            {navBarConfig.map((nav, index) => (
                                <Button onClick={() => scrollTo(nav.scroll_to)} className={nav.type === "main" ? styles.main_btn : styles.nav_btn} key={index}>{nav.title}</Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

        </>
    )
}
