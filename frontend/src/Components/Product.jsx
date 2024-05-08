import React, { useState, useEffect } from "react";
import CartIcon from "./Icons/CartIcon";

const Product = () => {
   const [productData, setProduct] = useState("");
    useEffect(() => {
        fetch("http://localhost:4000/api/products/663ba6ef8641a65fe20887d8")
          .then((res) => res.json())
          .then((data) => setProduct(data.product));
      }, [])
    return (
        <section className="core">
            <div className="gallery-holder hide-in-mobile">
                <div className="gallery">
                    <div className="image">
                        <img src={productData.image} alt="product-1" />
                    </div>
                </div>
            </div>

            <div className="description">
                <p className="pre">{productData.title}</p>
                <h1>{productData.name}</h1>
                <p className="desc">
                    {productData.description}
                </p>
                <div className="price">
                    <div className="main-tag">
                        <p>{productData.price}</p>
                    </div>
                </div>
                <div className="buttons">
                    <button
                        className="add-to-cart"
                    >
                        <CartIcon />
                        add to cart
                    </button>
                </div>
            </div>
        </section>

    );
};

export default Product;
