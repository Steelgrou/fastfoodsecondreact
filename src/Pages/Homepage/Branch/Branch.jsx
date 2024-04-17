import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import './Branch.css'
export default function Branch() {
    return (
        <>
            <Header />
            <section className="branch">
                <div className="container">
                    <div className="branch-wrapper">
                        <div className="branch-cards">
                            <div className="branch-card">
                                <div className="card-left">
                                    <p className="card-title">MaxWay Magic City</p>
                                    <p className="card-adress">Magic City, ул.Бабура, 174, Ташкент, Узбекистан</p>
                                </div>
                                <div className="card-right">
                                    <p className="card-work">Часы работы</p>
                                    <p className="card-time">10:00-03:00</p>
                                </div>

                            </div>
                            <div className="branch-card">
                                <div className="card-left">
                                    <p className="card-title">MaxWay Magic City</p>
                                    <p className="card-adress">Magic City, ул.Бабура, 174, Ташкент, Узбекистан</p>
                                </div>
                                <div className="card-right">
                                    <p className="card-work">Часы работы</p>
                                    <p className="card-time">10:00-03:00</p>
                                </div>

                            </div>
                            <div className="branch-card">
                                <div className="card-left">
                                    <p className="card-title">MaxWay Magic City</p>
                                    <p className="card-adress">Magic City, ул.Бабура, 174, Ташкент, Узбекистан</p>
                                </div>
                                <div className="card-right">
                                    <p className="card-work">Часы работы</p>
                                    <p className="card-time">10:00-03:00</p>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}