import React ,{useState} from 'react'

function Card({cart,setCart,data}) {
  let [toggle,setToggle]=useState(true)   //useState is used to create remove cart part
return  <div className="col mb-5">

<div className="card h-100">
  
  <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{data.unit}</div>
  
  <img className="card-img-top" src={data.proImage} alt="..." />

  <div className="card-body p-4">
      <div className="text-center">
          
          <h5 className="fw-bolder">{data.productName}</h5>
          {/* for rating purpose */}
         {
          data.israting?<div className="d-flex justify-content-center small text-warning mb-2">
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
      </div>:""
         }
         
          <span className="text-muted text-decoration-line-through">{data.productPrice[0]}</span>
          {data.productPrice[1]}
      </div>
  </div>
  
  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div className="text-center">
        {
           toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{            //toggle is used as state variable
            setCart(cart+1)              // increasing the cart count
            setToggle(false)            // setting false for toggle
          }}>Add to cart</button>
           :
           <button className="btn btn-outline-dark mt-auto" onClick={()=>{
            setCart(cart-1)          //decreasing the cart count
            setToggle(true)         // setting false for toggle
          }}>remove from cart</button>
        
        }
        </div>
  </div>
</div>
</div>
}

export default Card