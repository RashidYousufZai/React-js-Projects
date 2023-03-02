import React from 'react'
import { watch1, watch2, watch3 } from '../Assets'
import { NavLink } from 'react-router-dom'
import "./Card.scss"
const Card = () => {
    return (
        <div className="cotainer">
            <div className="row">
                <div className="col-12 main-card">
                    <img src={watch1} alt="" />
                    <NavLink to='/products'><h4>Thermo Ball Etip Gloves</h4></NavLink>

                    <p class="card-price">1250 $.</p>
                </div>
            </div>
        </div>
    )
}

export default Card
