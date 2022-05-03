import { Box, Grid, Typography, Button, Card } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { display } from '@mui/system'
import React, { useState } from 'react'
import IRIS from '../../assets/iris.png'
import { colors } from '../../utils'
import useResponsive from '../useResponsive'
import reviews from './reviews.json'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const useStyles = makeStyles({
    root: {
        // border: '1px solid',
        height: '50vh',
    },
    root_mobile: {
        height: '50vh',
        paddingTop: '150px',
        marginTop: '100px'

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
    reviews_box: {
        display: 'flex',
        // border: '1px solid',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        margin: 'auto',
        height: '550px',

    },
    reviews_box_mobile: {
        // display: 'flex',
        // // border: '1px solid',
        // alignItems: 'center',
        // justifyContent: 'center',
        // width: '70%',
        // margin: 'auto',
        // height: '350px',
    },
    review_card: {
        width: '90%',
        // border: '1px solid #ced4da',
        padding: '20px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "10px !important",
        margin: 'auto',


    },
    review_card_mobile: {
        width: '80%',
        // borderTop: '1px solid #ced4da',
        // borderBottom: '1px solid #ced4da',
        borderLeft: 'none',
        borderRight: 'none',
        padding: '20px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "0px !important",
        // boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px !important',
        boxShadow: 'none',
        margin: 'auto',


    },
    quote: {
        color: 'gray',
        textAlign: 'right ',
        marginBottom: '40px !important',
        width: '100%',
        fontStyle: 'italic '
    },
    author: {
        color: 'black',
        textAlign: 'left',
        marginBottom: '10px',
        width: '100%'
    }


})

export default function Reviews() {

    const styles = useStyles()

    const isDesktop = useResponsive('up', 'md')

    const [state, setState] = useState({
        active_index: 0
    })

    return (
        <Box className={isDesktop ? styles.root : styles.root_mobile}>

            <Box className={isDesktop ? styles.header_box : styles.header_box_mobile}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'left' }}>מדברים עלי</Typography>
            </Box>

            <Box className={isDesktop ? styles.reviews_box : styles.reviews_box_mobile}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    pagination={{ clickable: true }}
                    navigation={true}
                    scrollbar={{ draggable: true }}
                    slidesPerView={isDesktop ? 3 : 1}
                    onSlideChange={(swiper) => setState({ ...state, active_index: swiper.activeIndex })}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index} >
                            <OneQuote key={index} review={review} isDesktop={isDesktop} active_index={state.active_index} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

        </Box>
    )
}


const OneQuote = ({ review, isDesktop, active_index, index }) => {

    const styles = useStyles()

    return (
        <Box className={isDesktop ? styles.review_card : styles.review_card_mobile}>

            <Typography variant='h6' className={styles.quote}>
                <FormatQuoteIcon />{review.quote}<FormatQuoteIcon sx={{ transform: 'rotateY(180deg)' }} />
            </Typography>

            <Typography className={styles.author}>{review.author}</Typography>
            <Typography className={styles.author}>{review.company}</Typography>
        </Box>
    )
}