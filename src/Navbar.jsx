import { NavLink,Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store/userSlice";

function Navbar() {
    const cartCount = useSelector((state) =>
        state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
    );
    const { username, isLoggedIn } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const navlinks=[{name:"Home",link:""},
                    {name:"ABOUT",link:"About"},
                    {name:"PRODUCTS",link:"Products"},
                    {name:"CONTACT US",link:"Contact"},
                    ]

    return (
    <>
    <nav className="navbar navbar-expand-lg">
        <div className="container ">
            <div className="row">
                <div className="col-12">
                    <Link to="/" className="navbar-brand fw-bold" >NEWHOME</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            {navlinks.map((item,index)=>{ 
                                return <li key={index} className="nav-item">
                                    <NavLink to={`/${item.link}`} className={`nav-link px-3 ${({isActive}) => (isActive ? "active-route":"")}`} >{item.name}</NavLink>
                                    </li>

                                } )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex align-items-center">
                        <div className="navbar-nav me-2">
                            {isLoggedIn ? (
                                <div>
                                    <button className="btn btn-outline-dark" onClick={() => dispatch(logout())}>Welcome, {username}</button>
                                </div>
                            ):<Link to="/Login" className="nav-link">
                                    Register <i className="fa fa-user"></i>
                                </Link>}
                            <Link to="/Products" className="btn btn-dark" role="button" > <i className="fa fa-search"></i></Link>
                            <Link to="/Cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart"></i> Cart ({cartCount})
                            </Link>
                        </div>
                    </div>                
                    </div>
            </div>
        </div>
    </nav>
    </>

    )
}

export default Navbar