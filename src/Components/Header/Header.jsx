import './Header.css'
import basket from '/basket.svg'
import logo from '/logo.jpg'

export default function Header() {
    return (
        <>
            <section className='header'>
                <div className="container">
                    <div className="header-left">
                        <div className="header-logo">
                            <img src={logo} alt="" />
                        </div>
                        <nav>
                            <ul>
                                <a href='#'>Главная </a>
                                <a href='#'>Филиалы</a>
                                <a href='#'>О Нас</a>
                                <a href='#'>Контакты</a>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        <button className='basket-btn'><img src={basket} alt="basket" /></button>
                        <button className='login-btn'>Войти</button>
                    </div>
                </div>
            </section>
        </>
    )
}


