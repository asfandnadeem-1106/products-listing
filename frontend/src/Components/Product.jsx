import React, { useState, useEffect } from "react";
import  { CircularProgress } from "@mui/material";
import Description from "./Description";

const Product = () => {
    const [spinner, setSpinner] = useState(true);
    // setSpinner(true)
    const [productData, setProduct] = useState("");
    useEffect(() => {
        fetch("https://products-listing.onrender.com/api/products/663ba6ef8641a65fe20887d8")
            .then((res) => res.json())
            .then((data) => {
                setProduct(data.product)
                setSpinner(false)
            }
        );
    }, [])
    return (
        <section className="core">
            {spinner && ( <div className="loader"> <CircularProgress/>  </div>)}
            {!spinner && (<Description productData={productData}/>)}
        </section>

    );
};

export default Product;
