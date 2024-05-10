import React, { useState, useEffect } from "react";
import  { CircularProgress } from "@mui/material";
import Description from "./Description";

const Product = () => {
    const [spinner, setSpinner] = useState(true);
    // setSpinner(true)
    const [productData, setProduct] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://products-listing.onrender.com/api/products/663ba6ef8641a65fe20887d8');
                const jsonData = await response.json();
                setProduct(jsonData.product)
            } catch (error) {
                // show static data in case of error
                setSpinner(false)
                setProduct({"name": "Samsung s23",
                "title": "Samsung Smartphone",
                "price": "1000$",
                "description": "The Samsung S23: A sleek and powerful device, seamlessly blending cutting-edge technology with elegant design. Experience vivid visuals, lightning-fast performance, and unparalleled innovation in the palm of your hand. Redefining what's possible, it's more than just a phone—it's a gateway to a world of limitless possibilities.",
                "image": "https://images.samsung.com/pk/smartphones/galaxy-s23/buy/kv_group_MO_v2.jpg"})
            }
        };
        // Show static data in case of timeout
        const timeoutId = setTimeout(() => {
            setSpinner(false)
            setProduct({"name": "Samsung s23",
            "title": "Samsung Smartphone",
            "price": "1000$",
            "description": "The Samsung S23: A sleek and powerful device, seamlessly blending cutting-edge technology with elegant design. Experience vivid visuals, lightning-fast performance, and unparalleled innovation in the palm of your hand. Redefining what's possible, it's more than just a phone—it's a gateway to a world of limitless possibilities.",
            "image": "https://images.samsung.com/pk/smartphones/galaxy-s23/buy/kv_group_MO_v2.jpg"})
        }, 5000); // 5000 milliseconds
        fetchData();
        return () => clearTimeout(timeoutId); // Clean up timeout if component unmounts
    }, []); // Empty dependency array means this effect runs only once on mount

    return (
        <section className="core">
            {spinner && ( <div className="loader"> <CircularProgress/>  </div>)}
            {!spinner && (<Description productData={productData}/>)}
        </section>

    );
};

export default Product;
