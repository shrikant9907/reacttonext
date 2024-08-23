// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default ({ data }) => {

    return (
        <div className='container max-w-screen-xl mx-auto mt-6'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={3}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((product) => {
                    return <div key={product.id + "_product"}> <SwiperSlide>
                        <div className='p-4 border rounded-2xl shadow-lg mb-4 h-[400px]'>
                            <div className='b mb-4'>
                                <img className='h-[200px] mx-auto' src={product.image} alt="" />
                            </div>
                            <h3 className='font-bold line-clamp-1 text-lg mb-3'>{product.title}</h3>
                            <p className='line-clamp-4'>{product.description}</p>
                        </div>
                    </SwiperSlide> </div>
                })}
            </Swiper>
        </div>
    );
};