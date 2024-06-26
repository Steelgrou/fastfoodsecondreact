import { Link } from 'react-router-dom'
import './Header.css'
import basket from '/basket.svg'
import logo from '/logo.jpg'

export default function Header() {
    return (
        <>
            <section className='header'>
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-left">
                            <button className='header-burger__btn'>
                                <span></span><span></span><span></span>
                            </button>
                            <div className="header-logo">
                                <img src={logo} alt="" />
                            </div>
                            <nav>
                                <ul>
                                    <Link to='/' className='active'>Главная </Link>
                                    <Link to='/Branch'>Филиалы</Link>
                                    <Link to='/About'>О нас</Link>
                                    <Link to='/Contacts'>Контакты</Link>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-right">
                            <button className='basket-btn'><img src={basket} alt="basket" /></button>
                            <button className='login-btn'>Войти</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


