import React from 'react'
import { useHistory } from "react-router-dom";


import products from '../data/productData'
import german from '../img/gallery/german2.jpg'





export const GermanProduct = () => {

    const germanCuisine = products.find( product =>   product.cuisine === "GERMAN")

    
    let histroy = useHistory();
    const onClick = () => {
        localStorage.setItem("cartProduct", JSON.stringify(germanCuisine));
        histroy.push("/basket")

    }



    let imageBoderStyle = {
        border: "5px solid #ddd",
        borderRadius: "10px",
        padding: "5px",
        width: "100%",
        height: "26rem",
    }

    return (

        <>
           
           <div className="container">
                <div className="jumbotron row">
                    <div className="col">
                        <img style={imageBoderStyle} src={german} alt="german" />
                    </div>
                    <div className="col">
                        <div className="">
                    <h3>{ germanCuisine.cuisine }</h3>
                    <h5> { germanCuisine.title } </h5>
                    <p> { germanCuisine.description } </p>
                        </div>
                        <button className="btn btn-sm btn-warning"  onClick={() => onClick()}  >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}
