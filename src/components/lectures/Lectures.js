import { Box, Grid, Typography, Button, Card } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { display } from '@mui/system'
import React from 'react'
import IRIS from '../../assets/iris.png'
import { colors } from '../../utils'
import useResponsive from '../useResponsive'
import lectures from './lectures.json'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const useStyles = makeStyles({
    root: {
        // border: '1px solid',
        height: '70vh',
    },
    root_mobile: {
        height: '50vh',
        paddingTop: '150px'
    },
    header_box: {
        // border: '1px solid',
        width: '70%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    header_box_mobile: {
        // border: '1px solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px'
    },
    lectures_box: {
        display: 'flex',
        // border: '1px solid',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        margin: 'auto',
        height: '550px',

    },
    lectures_box_mobile: {
        // display: 'flex',
        // // border: '1px solid',
        // alignItems: 'center',
        // justifyContent: 'center',
        // width: '70%',
        // margin: 'auto',
        // height: '350px',
    },
    lecture_card: {
        width: '90%',
        border: '1px solid #ced4da',
        padding: '20px',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "10px !important",
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px !important',
        margin: 'auto',
        '& h6': {
            textAlign: 'center'
        },

    },
    lecture_card_mobile: {
        // width: '90%',
        borderTop: '1px solid #ced4da',
        borderBottom: '1px solid #ced4da',
        borderLeft: 'none',
        borderRight: 'none',
        padding: '0 30px',
        height: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "0px !important",
        // boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px !important',
        boxShadow: 'none',
        margin: 'auto',
        '& h6': {
            textAlign: 'center'
        },

    }


})

export default function Lectures() {

    const styles = useStyles()

    const isDesktop = useResponsive('up', 'md')

    console.log(lectures)

    return (
        <Box className={isDesktop ? styles.root : styles.root_mobile}>

            <Box className={isDesktop ? styles.header_box : styles.header_box_mobile}>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>הרצאות</Typography>
            </Box>

            <Box className={isDesktop ? styles.lectures_box : styles.lectures_box_mobile}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    pagination={{ clickable: true }}
                    navigation={true}
                    scrollbar={{ draggable: true }}
                    slidesPerView={isDesktop ? 3 : 1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                >
                    {lectures.map((lecture, index) => (
                        <SwiperSlide key={index} >
                            <Card className={isDesktop ? styles.lecture_card : styles.lecture_card_mobile}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' , textAlign: 'center'}}>{lecture.title}</Typography>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

        </Box>
    )
}
