import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";

function ShowData({siteData}) {
    const dispatch = useDispatch();

    {siteData.map((item) => ( console.log(item.category)))}
    return (
        <div className="container my-4">
        <div className="row">
            {siteData.map((item) => (
            <div key={item.id} className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm data-item">
                <img src={item.image} alt={item.title} className="card-img-top p-3 hamada"/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{item.title}</h5>
                    <p className="card-text text-center item-desc">{item.description}</p>
                    <div className="mt-auto d-flex flex-row justify-content-between">
                        <h6 className="text-success text-center align-self-center">${item.price}</h6>
                        <Link to={`/Product/${item.id}`} className={`btn btn-primary`} role="button" >Read more...</Link>
                        <button className="btn btn-dark" onClick={() => dispatch(addToCart(item))}><i className="fa fa-cart-plus"></i></button>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    )
}

export default ShowData