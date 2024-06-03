import React, { useEffect, useRef, useState } from "react";
import categoryArr from "../components/category";
import { Link, useNavigate } from "react-router-dom";

const Home1 = () => {

  let inputRef = useRef();
  let navigate = useNavigate()

  const [value, setvalue] = useState("");
  console.log(value)

  const handleClick = (e) =>{
    e.preventDefault()
    let viewdetails = inputRef.current.value
    console.log(viewdetails)

    navigate('/viewdetails', {state:viewdetails})
  }

  const [currentPage, setcurrentPage] = useState([]);

  const [allProducts, setallProducts] = useState([]);
  async function fetchData() {
    let res = await fetch("https://dummyjson.com/products?skip=0&limit=100");
    let data = await res.json();
    console.log(data.products);
    setallProducts(data.products);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="row text-center">
        <div className="col-2 mt-5">
          <h4>Category</h4>
          <ul class="list-group">
            {categoryArr.map((ele) => {
              return <li className="list-group-item categoryList">{ele}</li>;
            })}
          </ul>
        </div>
        <div className="col-10">
          <div className="row d-flex justify-content-center  gap-3  ">
            {allProducts.map((ele) => {
              return (
                <div className="card mt-5 " style={{ width: "18rem" }}>
                  <img
                    style={{ height: "200px" }}
                    src={ele.thumbnail}
                    className="card-img-top"
                    alt="..."/>

                  <div className="card-body  text-center">
                    <h5 className="card-title text-truncate">{ele.title}</h5>
                    <p className="card-text text-truncate">{ele.description}</p>
  <Link to="/viewdetails" state={ele} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              );
            })}
          </div>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home1;
