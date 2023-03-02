import React from 'react'
import { watch1, watch2, watch3 } from '../Assets'
import { NavLink } from 'react-router-dom'
import "./PopularItems.scss"
import "./Card.scss"


const PopularItems = () => {
    return (
        <>
            <div className='Polular-Item'>
                <h1>Popular Items</h1>
                <p className='text-center para'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
            <div className="cotainer">
                <div className="row p-items">
                    <div className="col-3 main-card">
                        <img src={watch1} alt="" />
                        <div className='cart'>Add to cart</div>
                        <NavLink to='/products'><h4>Thermo Ball Etip Gloves</h4></NavLink>
                        <p class="card-price">1250 $.</p>
                    </div>
                    <div className="col-3 main-card">
                        <img src={watch1} alt="" />
                        <div className='cart'>Add to cart</div>
                        <NavLink to='/products'><h4>Thermo Ball Etip Gloves</h4></NavLink>
                        <p class="card-price">1250 $.</p>
                    </div>
                    <div className="col-3 main-card">
                        <img src={watch1} alt="" />
                        <div className='cart'>Add to cart</div>
                        <NavLink to='/products'><h4>Thermo Ball Etip Gloves</h4></NavLink>
                        <p class="card-price">1250 $.</p>
                    </div>
                    <div className="col-3 main-card">
                        <img src={watch1} alt="" />
                        <div className='cart'>Add to cart</div>
                        <NavLink to='/products'><h4>Thermo Ball Etip Gloves</h4></NavLink>
                        <p class="card-price">1250 $.</p>
                    </div>
                    <div className="col-3 main-card">
                        <img src={watch1} alt="" />
                        <div className='cart'>Add to cart</div>
                        <NavLink to='/products'><h4>Thermo Ball Etip Gloves</h4></NavLink>
                        <p class="card-price">1250 $.</p>
                    </div>
                    <div className="col-3 main-card">
                        <img src={watch1} alt="" />
                        <div className='cart'>Add to cart</div>
                        <NavLink to='/products'><h4>Thermo Ball Etip Gloves</h4></NavLink>
                        <p class="card-price">1250 $.</p>
                    </div>
                </div>
                <div className='button-more-p'>
                    <button type="button" class="btn btn-primary text-center">View More Products</button>
                </div>

            </div>
        </>
    )
}

export default PopularItems
