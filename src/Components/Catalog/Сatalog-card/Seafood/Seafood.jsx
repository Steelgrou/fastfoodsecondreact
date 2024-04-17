import './Seafood.css'
import lavash from '/lavash.webp'

export default function Seafood() {


    return (
        <>
            <div className="seafood-wrapper">

                <div className="seafood-card">

                    <img className='lavash' src={lavash} alt="" />
                    <h2>Spicy seasoned seafood noodles</h2>
                    <h5>Информация: лаваш мясной classic, картофель-фри, пеп</h5>
                    <div className="seafood-info">
                        <h3>34000сум</h3>
                        <button className='card-btn' type='submit'>Заказать</button>
                    </div>
                </div>

                <div className="seafood-card">

                    <img className='lavash' src={lavash} alt="" />
                    <h2>Spicy seasoned seafood noodles</h2>
                    <h5>Информация: лаваш мясной classic, картофель-фри, пеп</h5>
                    <div className="seafood-info">
                        <h3>34000сум</h3>
                        <button className='card-btn' type='submit'>Заказать</button>
                    </div>
                </div>
                <div className="seafood-card">

                    <img className='lavash' src={lavash} alt="" />
                    <h2>Spicy seasoned seafood noodles</h2>
                    <h5>Информация: лаваш мясной classic, картофель-фри, пеп</h5>
                    <div className="seafood-info">
                        <h3>34000сум</h3>
                        <button className='card-btn' type='submit'>Заказать</button>
                    </div>
                </div>
                <div className="seafood-card">

                    <img className='lavash' src={lavash} alt="" />
                    <h2>Spicy seasoned seafood noodles</h2>
                    <h5>Информация: лаваш мясной classic, картофель-фри, пеп</h5>
                    <div className="seafood-info">
                        <h3>34000сум</h3>
                        <button className='card-btn' type='submit'>Заказать</button>
                    </div>
                </div>





            </div>

        </>
    )
}
