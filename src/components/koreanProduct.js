import React from 'react'
import { useHistory } from "react-router-dom";


import products from '../data/productData'
import korean from '../img/gallery/korean2.jpg'




export const KoreanProduct = () => {


    const koreanCuisine = products.find( product =>   product.cuisine === "KOREAN")

    
    let histroy = useHistory();
    const onClick = () => {
        localStorage.setItem("cartProduct", JSON.stringify(koreanCuisine));
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
                        <img style={imageBoderStyle} src={korean} alt="korean" />
                    </div>
                    <div className="col">
                        <div className="">
                    <h3>{ koreanCuisine.cuisine }</h3>
                    <h5> { koreanCuisine.title } </h5>
                    <p> { koreanCuisine.description } </p>
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
