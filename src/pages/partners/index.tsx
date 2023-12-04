import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Partners: FC = () => {

    const [ list, setList ] = useState<any[]>([
        {
            key: '',
            img: 'https://rileytailor.uz/wp-content/uploads/2023/06/image-1.jpg.svg'
        },
        {
            key: '',
            img: 'https://rileytailor.uz/wp-content/uploads/2023/06/image-3.jpg.svg'
        },
        {
            key: '',
            img: 'https://rileytailor.uz/wp-content/uploads/2023/06/image-4.jpg.svg'
        },
        {
            key: '',
            img: 'https://rileytailor.uz/wp-content/uploads/2023/06/image-5.jpg.svg'
        },
        {
            key: '',
            img: 'https://rileytailor.uz/wp-content/uploads/2023/06/image-6.jpg.svg'
        },
        {
            key: '',
            img: 'https://rileytailor.uz/wp-content/uploads/2023/06/asaxiy-logo.svg'
        },
        {
            key: '',
            img: 'https://rileytailor.uz/wp-content/uploads/2023/06/image-2.jpg.svg'
        },
    ])

    return (
        <div className="partners">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="collection-header">
                            <h1>Наши партнёры</h1>
                        </div>
                    </div>
                </div>
                <div className="partners-content">
                    <Swiper>
                        { list.map((item, idx) => (
                            <>
                                <SwiperSlide className="partners-slide"
                                             key={ idx }
                                >
                                    <div className="partners-item">
                                        <div className="partners-img">
                                            <img src={ item.img } alt=""/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        )) }

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Partners;