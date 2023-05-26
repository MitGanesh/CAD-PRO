import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import { SliderData } from './Common';

const Philosophy = () => {
  return (
    <section className="text-gray-600 body-font">
      <div id='philosophy' className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR PHILOSOPHY</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them.</p>
        </div>
        <div>
          <Swiper
            className='h-[65vh]'
            slidesPerView={1}
            spaceBetween={30}
            loopedSlides={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
          >
            {SliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <div class="rounded-lg h-[60vh] overflow-hidden">
                  <Image width={600} height={470} alt="content" class="object-cover object-center h-full w-full" src={item.img} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Philosophy;