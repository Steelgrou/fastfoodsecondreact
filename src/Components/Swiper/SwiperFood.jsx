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
        <SwiperSlide><img src="https://img.goodfon.ru/original/2560x1600/4/3c/luk-bulochka-kotleta-gamburger-pomidor-sous-fast-food-hambur.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/originals/ad/5d/98/ad5d98db25b4e0d97390f37cb5fa382f.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://avatars.mds.yandex.net/i?id=1e58b8bee44a408a540dfd4816f27a46_l-5169643-images-thumbs&n=13" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://kalix.club/uploads/posts/2022-12/1671675941_kalix-club-p-burgeri-fon-oboi-8.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dasart.ru/userdata/image/ed/e9/ede9b7f59fe653c442b60d3906fe6e3f.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://rare-gallery.com/uploads/posts/806196-Fast-food-Hamburger-Vegetables.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.zastavki.com/pictures/originals/2018Food_Sandwiches_with_crispy_toast_on_the_table_127601_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.zastavki.com/pictures/originals/2018Food_Sandwiches_with_crispy_toast_on_the_table_127601_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://avatars.dzeninfra.ru/get-zen_doc/3530601/pub_5f20142d7c64f45cde98a076_5f203f7208232d7491f1b735/scale_1200" alt="" /></SwiperSlide>
       
      </Swiper>


    </>
  )
}