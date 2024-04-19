import Seafood from "./Сatalog-card/Seafood/Seafood";

import './Catalog.css'
import { Link } from "react-router-dom";

// const Desert = document.body.getElementById('Desert')
// const catologCards = document.querySelector('.catolog-cards')
// const Home = document.querySelector('#Home')

// Home.addEventListener('click', () => {
//     catologCards.style.display = "block"

// })




export default function Catalog() {
    return (
        <>
            <section className="catalog">
                <div className="container">
                    <div className="catalog-list">
                        <ul>
                            <li id="Home"><Link to="/">Lavash</Link></li>
                            <li id="Desert"><Link to="/Desert">Desert</Link></li>
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