import Catalog from "../../Components/Catalog/Catalog";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SwiperFood from "../../Components/Swiper/SwiperFood";
 


export default function Homepage() {
    return (
        <>
            <Header />
            <SwiperFood />
             <Catalog/>
            <Footer/>
        </>
    )
}