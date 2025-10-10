import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";

function ProductPage() {
    let {id} = useParams();
    let [prodData,setdata]= useState({});
    const dispatch = useDispatch();


    async function getdata() {
        let res = await fetch(`https://fakestoreapi.com/products/${id}`)
        let data = await res.json()      
        setdata(data)
    };

    useEffect(() => {
        getdata();
    }, [id]);

    return (
        <div className="container">
        <div className="row">
            <div className="col-10 mx-auto">
                <div key={prodData.id} className="text-center">
                    <div className="card h-100 shadow-sm">
                        <img src={prodData.image} alt={prodData.title} className="card-img-top p-3 " style={{height:"50vh",objectFit:"contain"}}/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-center">{prodData.title}</h5>
                            <p className="card-text text-center ">{prodData.description}</p>
                            <div className="mt-auto">
                                <h6 className="text-success text-center">${prodData.price}</h6>
                            </div>
                                <button className="btn btn-dark w-50 align-self-center d-flex gap-5 justify-content-center" onClick={() => dispatch(addToCart(prodData))}>
                                    <span>Add to cart </span> <i className="fa fa-cart-plus align-self-center"></i></button>
                            <ul className="list-unstyled text-start mt-3">
                                <li>
                                    <strong>Category:</strong> {prodData.category}
                                </li>
                                <li>
                                    <strong>Rating:</strong> {prodData.rating?.rate}
                                </li>
                                <li>
                                    <strong>Reviews:</strong> {prodData.rating?.count}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductPage