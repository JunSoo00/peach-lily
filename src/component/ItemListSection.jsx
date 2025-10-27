import React, { useEffect, useState, useRef } from 'react';
import ItemCard from './ItemCard';

// Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const ItemListSection = () => {
  const [all, setAll] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const base = process.env.PUBLIC_URL || '';
    fetch(`${base}/db.json`)
      .then((r) => r.json())
      .then((data) => {
        const items = data.items || [];
        const firstFive = items.slice(0, 5);
        setAll(firstFive);

        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.update();
        }
      })
      .catch((err) => {
        console.log('데이터 로드 실패', err);
      });
  }, []);

  return (
    <div className="ItemListSection">
      <h2 className="title">주간 인기 아이템</h2>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={10}
        pagination={{
            type : 'progressbar'
        }}
        modules={[Pagination]}
        className="ItemList mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4.2},
        }}
      >


        {all.map((item) => (
          <SwiperSlide key={item.id}>
            <ItemCard item={item} />
          </SwiperSlide>
        ))}


      </Swiper>
    </div>
  );
};

export default ItemListSection;
