import React from 'react'
import TopBar from './component/topbar'
// import header from './component/header'
import { useState } from "react";

import Card from './component/card'

function App() {
  let [cart,setCart] = useState(0)    //gettting hooks states 
  let data=[                                             
    {
        unit:"Sale",
        proImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        productName:"Special Item",
        israting:true,
        productPrice:["$20.00","$18.00"],
        discount:true

  },
  {
        unit:"Sale",
        proImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        productName:"Sale Item",
        israting:false,
        productPrice:["$50.00","$25.00"],
        discount:true
  },
  {
    unit:"",
    proImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName:"Popular Item",
    israting:true,
    productPrice:["","$40.00"],
    discount:false
  },{
    unit:"Sale",
    proImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName:"Special Item",
    israting:true,
    productPrice:["$20.00","$18.00"],
    discount:true

},{
  unit:"Sale",
  proImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  productName:"Sale Item",
  israting:false,
  productPrice:["$50.00","$25.00"],
  discount:true
},
{
  unit:"",
  proImage:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  productName:"Popular Item",
  israting:true,
  productPrice:["","$40.00"],
  discount:false
}
]                                             //Datas for card in array
  return <>
  {/* NavBar */}
  <TopBar cart={cart} setcart={setCart}/>     
  {/* Header */}

  {/* Cards */}
  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {data.map((e,i)=>{
                    return <Card cart={cart} setCart={setCart} data={e} key={i} />  // passing Data Dynamically #key used to separate each card
                   })} 
                    
                </div>
            </div>
  </section>
  </>
}

export default App