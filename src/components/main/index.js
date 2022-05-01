import { Box, Grid, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import IRIS from '../../assets/iris.png'
import { colors } from '../../utils'
import useResponsive from '../useResponsive'

const useStyles = makeStyles({
  root: {
    // border: '1px solid',
    height: '100vh'
  },
  main_box: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    // border: '1px solid'
  },
  main_box_mobile: {
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid',
    '& h1': {
      textAlign: 'center',
      fontSize: '60px'
    },
    '& p': {
      textAlign: 'center',
    },
    main_box_mobile_min: {

    }
  },
  img: {
    width: '100%',
    borderRadius: '30px',
    transition: '.2s',
    '&:hover': {
      transform: 'rotate(-1deg)'
    }
  },
  img_mobile: {
    width: '100%',
  }
})

export default function Main() {

  const styles = useStyles()

  const isDesktop = useResponsive('up', 'md')

  return (
    <Box className={styles.root}>
      <Grid container >
        <Grid item xs={12} md={2} lg={2}>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>

          <Box className={isDesktop ? styles.main_box : styles.main_box_mobile}>
            <Typography variant="h1" sx={{letterSpacing: '2px', fontWeight: 'bold'}}>איריס ירדני</Typography>
            <br />
            <br />
            <Typography variant="body1" width="80%" sx={{ fontSize: '20px' }}>עומדת בראש  משרד בוטיק שהוקם בשנת 1998, ומתמחה בליווי משפטי לעסקים קטנים ובינוניים, דיני עבודה ובתחום דיני הירושה (עריכת צוואות) ומוסמכת לערוך ייפוי כוח מתמשך, בעלת ניסיון מקצועי רב-שנים, ומהווה בת סמכא בתחומי התמחותה.</Typography>

          </Box>

        </Grid>

        <Grid item xs={12} md={4} lg={4}>

          <Box className={isDesktop ? styles.main_box : styles.main_box_mobile_min}>
            <img src={IRIS} className={isDesktop ? styles.img : styles.img_mobile} />
          </Box>

        </Grid>

        <Grid item xs={12} md={2} lg={2}>
        </Grid>
      </Grid>
    </Box>
  )
}
