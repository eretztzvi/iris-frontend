import React from 'react'
import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Box, Container, Slide, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { navBarConfig } from './NavBarConfig';
import LOGO from '../../assets/iris-logo.gif'
import { colors } from '../../utils';
import { createTheme } from '@mui/material/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        margin: 'auto'
    },
    main_btn: {
        backgroundColor: `${colors.blue.main} !important`,
        color: 'white !important',
        height: 48,
        width: '120px',
        padding: '0 30px',
        margin: '0 10px !important',
        fontWeight: 'bold !important',
        fontSize: '17px !important'
    },
})



export default function MobileMenu(props) {

    const styles = useStyles()

    function HideOnScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
        });

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    return (
        <>
            {/* <CssBaseline /> */}
            <HideOnScroll {...props}>
                <AppBar color='neutral' sx={{boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}}>
                    <Toolbar className={styles.root}>
                        <img src={LOGO} />
                        <Box>
                            <Button className={styles.main_btn} >הזמן הרצאה</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

        </>
    )
}
