import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { add } from "../Redux/CartSlice";
import "../Styles/Product.css";
function Product() {
  const dispatch = useDispatch();
  const [count,setCount]=useState(0);
  const data = [
    {
      id: 1,
      img:"https://www.smtparkash.in/site-admin/upload/product/101538148.jpg",
      title:"Polishing",
      price:'500/-',
    },
    {
      id: 2,
      img:"https://image.made-in-china.com/202f0j00rHmcifCKAkbp/Honeycomb-Coating-Nonstick-Cookware-Heavy-Duty-Hydraulic-Press-Machine.jpg",
      title:"Electroplating",
      price:'1000/-',
    },
    {
      id: 3,
      img:"https://image.made-in-china.com/2f0j00WisVKbvlSAYe/Semi-Automatic-Cookware-Metal-Surface-Polishing-Machine-Buffing-Machine-Polisher.jpg",
      title:"Cleaning",
      price:'600/-'
    },
    
  ];

  const handleadd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className='product'>
      <h2>Our Products</h2>
      <div className='productInfo'>
      {data.map((product) => (
        <div key={product.id} className="productCard">
          <img src={product.img} alt="" className='productImg'/>
          <h4>{product.title}</h4>
          <h5>Price:{product.price}</h5>
          <h6>Buy:{count}</h6>
          <button className='btn1' onClick={()=>setCount(count+1)}>Buy</button>
          <button className="btn" onClick={() => handleadd(product)}>
            Add to cart
          </button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Product