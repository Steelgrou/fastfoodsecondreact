import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'
import './About.css'
import about from '/about.png'

export default function About() {
    return (
        <>
            <Header />
            <section className='about'>
                <div className="container">
                    <div className="about-wrapper">
                        <div className="about-img">
                            <img src={about} alt="" />
                        </div>

                        <h2>О компании</h2>
                        <h4>Компания была основана в феврале 2005 года в Ташкенте. На сегодняшний момент у компании 11 филиалов в Ташкенте. Меню состоит в основном из клаб сендвичей, хот-догов, бургеров, лавашей и донаров. Наши приоритеты – свежесть и качество ингредиентов, разнообразие начинок, доступные цены и внимание к просьбам гостей. Ежедневно в MaxWay заказывают большое количество самых разных людей. И мы стараемся увеличивать как число посетителей, так и число филиалов. С каждым приготовленным блюдом мы оттачиваем детали фирменных рецептов и ищем идеальный баланс цены и качества, чтобы и дальше оставаться вашим любимым брендом. Если вдруг вы столкнулись с плохим обслуживанием или низким качеством приготовленной еды с нашей стороны, обязательно напишите нам на Мы с радостью принимаем как положительные, так и отрицательные отзывы. Жалоба гостя – подарок, благодаря которому нам есть куда расти.</h4>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}