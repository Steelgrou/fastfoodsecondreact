import Seafood from "./Сatalog-card/Seafood/Seafood";

import './Catalog.css'

export default function Catalog() {
    return (
        <>
            <section className="catalog">
                <div className="container">
                    <div className="catalog-list">
                        <ul>
                            <li><a href="#">Lavash</a></li>
                            <li><a href="#">Desert</a></li>
                            <li><a href="#">Set</a></li>
                            <li><a href="#">Haggi</a></li>
                            <li><a href="#">Burger</a></li>
                            <li><a href="#">Pizza</a></li>
                            <li><a href="#">Sendwich</a></li>
                            <li><a href="#">Donar</a></li>
                            <li><a href="#">XotDog</a></li>
                            <li><a href="#">Free</a></li>
                            <li><a href="#">Drink</a></li>
                            <li><a href="#">Salad</a></li>
                            <li><a href="#">Bread</a></li>
                            <li><a href="#">Sauce</a></li>
                        </ul>
                    </div>

                </div>
            </section>
            <div className="container">
                <div className="catolog-cards">
                    <Seafood />
                </div>
            </div>
        </>
    )
}