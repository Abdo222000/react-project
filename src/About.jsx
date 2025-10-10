import { Link } from 'react-router-dom'
import about_image from './assets/about-img.png'
function About(){

    return(<div className="mt-5">
        <div className="about-section container my-5 py-5">
            <div className="row align-item-center g-4">
                <div className="about-image col-md-6 align-self-center">
                    <img className="img-fluid w-75 rounded" src={about_image} alt="About"/>
                </div>
            <div className="about-text col-md-6">
                <h2 className="about-h2 fw-bold mb-3">ABOUT US</h2>
                <p className="text-center  mb-4">The new collection brings an informal elegance to your Life.<br/> Where style, sophistication, exclusivity is the forefront of our collection <br/> Check out our new collection! outerwear, Backpacks, Bracelets, Essentials and many more.</p>
                <p className="text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil cumque, debitis aliquid dolor architecto nobis labore corrupti! Consequatur ex veniam ipsa perspiciatis quae pariatur corrupti voluptatem, quo perferendis incidunt.</p>
                <Link to="/Products" className="about-btn btn btn-info text-white" role="button" >Products page</Link>
            </div>
        </div>
        </div>
        </div>
    )
}

export default About