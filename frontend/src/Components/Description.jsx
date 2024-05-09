import CartIcon from "./Icons/CartIcon";

const Description = ({ productData }) => {
    return (
        <section className="core-description">
            <div className="gallery-holder hide-in-mobile">
                <div className="gallery">
                    <div className="image">
                        <img src={productData.image} alt="product-1" />
                    </div>
                </div>
            </div>
            <div className="mobile-gallery hide-in-desktop">
                <img src={productData.image} alt="featured-product" />
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

export default Description;
