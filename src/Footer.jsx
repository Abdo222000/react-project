import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import Contacts from "./Contacts.jsx";
import Signup from "./Signup.jsx";

function Footer() {
  const [siteImages, setImagesData] = useState([]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  async function getImages() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    setImagesData(data);
  }

  useEffect(() => {
    getImages();
  }, []);

  const quickLinks = [
    { name: "HOME", link: "" },
    { name: "ABOUT", link: "/About" },
    { name: "PRODUCTS", link: "/Products" },
    { name: "CONTACTS", link: "/Contact" },
  ];

  return (
    <footer className="text-white mt-5">
      <div className="container bg-dark py-5">
        <div className="row mb-5">
          <div className="col-12">
            <a id="Contact" />
            <Contacts />
          </div>
        </div>

        <div className="row text-center text-md-start px-5">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">QUICK LINKS</h5>
            <ul className="list-unstyled">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} onClick={scrollToTop} className="text-white text-decoration-none d-block mb-2" >{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">INSTAGRAM FEEDS</h5>
            <div className="row g-2">
              {siteImages.slice(0, 6).map((item, index) => (
                <div className="col-4" key={index}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{ width: "70px", height: "70px", objectFit: "contain" }}
                    className="rounded bg-light bg-opacity-25 data-item"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <Signup />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
