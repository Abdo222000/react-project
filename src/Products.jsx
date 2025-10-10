import { useEffect, useState } from "react";
import ShowData from "./ShowData" 
import Filter from './Filter.jsx'
function Products() {
  let [siteData,setdata]= useState([]);
  let [filteredData, setFilteredData] = useState([]);
  let [selectedCategories, setSelectedCategories] = useState([]);

  async function getdata() {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()  
    setdata(data)    
    setFilteredData(data)
    console.log(data)
  };

  useEffect(() => {
    getdata();
  }, []);

  function handleCategoryChange(e) {
    const { value, checked } = e.target;

    let updatedCategories = checked
      ? [...selectedCategories, value]
      : selectedCategories.filter((category) => category !== value);

    setSelectedCategories(updatedCategories);

    if (updatedCategories.length === 0) {
      setFilteredData(siteData); // show all if no filter
    } else {
      setFilteredData(
        siteData.filter((item) => updatedCategories.includes(item.category))
      );
    }
  }
  return (
    <><div className="container">
      <div className="row">
        <div className="d-flex flex-row">
          <Filter
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
          />
          <div className="col-md-9">
            <h2 className="text-center">OUR PRODUCTS</h2>
            <ShowData siteData={filteredData}/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products
