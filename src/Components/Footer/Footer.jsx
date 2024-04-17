import { Link } from 'react-router-dom'
import './Footer.css'
import instagram from '/instagram.svg'
import telegram from '/telegram.svg'
import youtube from '/youtube.svg'


export default function Footer() {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="footer-info">
                            <p>SFood</p>
                            <ul>
                                <li><Link to="/">Главная</Link></li>
                                <li><Link to="/Branch">Филиалы</Link></li>
                                <li><a href="">О Нас</a></li>
                                <li><a href="">Контакты</a></li>
                            </ul>
                        </div>
                        <div className="footer-social">
                            <h2>Присоединяйтесь к нам</h2>
                            <div className="social-logo">
                                <a href=""><img className='telegram' src={telegram} alt="telegram" /></a>
                                <a href=""><img className='instagram' src={instagram} alt="instagram" /></a>
                                <a href=""><img className='youtube' src={youtube} alt="youtube" /></a>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <h2>Заказывайте по номеру</h2>
                            <a href="tel:+998931487733">+998993024512</a>
                        </div>

                    </div>
                    <hr />
                    <div className="footer-by">
                        <h3>© 2020–2022, ООО «IT-TIME», официальный сайт</h3>
                        <h4>Developed by Steelgrou</h4>
                    </div>
                    <h3></h3>
                </div>
            </section>




        </>
    )
}