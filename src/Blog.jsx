import React from 'react'
import Background from './assets/background.webp'
import Background2 from './assets/background2.jpg'
import b1 from './assets/b1.jpg'
import b2 from './assets/b2.jpg'
import b3 from './assets/b3.jpg'

function Blog() {
    return (
        <div>
            <div className="mt-5">
                <div className="card mx-auto">
                <img
                    className="card-img img-fluid"
                    src={Background2}
                    alt="Card"
                    style={
                        {objectFit:"cover",height:"500px"}
                    }
                />
                <div className="card-img-overlay d-flex align-items-center">
                    <div className="container text-dark">
                    <h1 className="card-title">New Season Arrivals</h1>
                    <p className="card-text fs-5 d-sm-block ">
                        We have wider products to suit your need.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="d-flex flex-row align-items-center ">
                        <h1 className="mx-auto">Get up to 30% Off <br/> New Arrivals</h1>
                        <img src={b1} className="card-img " id="blog-img" ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog