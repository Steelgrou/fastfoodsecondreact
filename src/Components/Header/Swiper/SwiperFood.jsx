import { Swiper, SwiperSlide } from 'swiper/react';
import "./SwiperFood.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperFood() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}

        className="mySwiper"
      >
        <SwiperSlide><img src="https://17508422.s21i.faiusr.com/2/ABUIABACGAAg2LiU7QUop8mcxgIwnRU4-ws.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/delicious-burger-in-nature_23-2150902140.jpg?w=900&t=st=1713415823~exp=1713416423~hmac=edf00cef4f91edd40aa66684b58e41382b695f1738872cfc12e3ccc438a3b2d5" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://avatars.mds.yandex.net/i?id=1e58b8bee44a408a540dfd4816f27a46_l-5169643-images-thumbs&n=13" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://kalix.club/uploads/posts/2022-12/1671675941_kalix-club-p-burgeri-fon-oboi-8.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dasart.ru/userdata/image/ed/e9/ede9b7f59fe653c442b60d3906fe6e3f.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://rare-gallery.com/uploads/posts/806196-Fast-food-Hamburger-Vegetables.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/close-up-hand-holding-tasty-burger_23-2149160037.jpg?w=1060&t=st=1713416815~exp=1713417415~hmac=1f25879a5ca8ea9a099a60ca860e0e3c8d39c9e958b2e5d0e57385e4c9160219" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://avatars.dzeninfra.ru/get-zen_doc/3530601/pub_5f20142d7c64f45cde98a076_5f203f7208232d7491f1b735/scale_1200" alt="" /></SwiperSlide>

      </Swiper>


    </>
  )
}