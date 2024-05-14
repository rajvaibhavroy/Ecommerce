import React, { useEffect, useState } from 'react'

const Home1 = () => {
  const [allProducts, setallProducts] = useState([]);
 async function fetchData(){
    let res = await fetch('https://dummyjson.com/products?skip=0&limit=100');
    let data =await res.json();
     console.log(data.products)
    setallProducts(data.products)
  }
  // console.log(allProducts)
useEffect(()=>{
  fetchData()
},[])


  return (
    <div className='row d-flex justify-content-center  gap-3  '>
      {allProducts.map((ele)=>{
        return <div className="card mt-5 " style={{width: '18rem'}}>
  <img style={{height:'200px'}} src={ele.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body  text-center">
    <h5 className="card-title text-truncate">{ele.title}</h5>
    <p className="card-text text-truncate">{ele.description}</p>
    <a href="#" className="btn btn-primary">Buy Now</a>
    
  </div>
</div>

      })}
      
    </div>
  )
}

export default Home1
