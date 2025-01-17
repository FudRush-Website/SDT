import React, {useEffect, useState} from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// import required modules
import {Navigation, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import RestaurantCard from "../restaurants/RestaurantCard.jsx";


const Recommended = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        fetch("restaurants.json")
            .then(res => res.json())
            .then(data => setRestaurants(data))
    })

    return (
        <div className='py-16'>
            <h2 className='text-3xl font-semibold mb-6'>Recommended for you </h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    restaurants.length > 0 && restaurants.map((restaurant, index) => (
                        <SwiperSlide key={index}>
                            <RestaurantCard restaurant={restaurant}/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

export default Recommended