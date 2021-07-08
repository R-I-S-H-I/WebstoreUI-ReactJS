import React from 'react'

const ProductList = ({prodName, prodImage, prodLink, prodDesc, originalPrice, newPrice, prodType, prodColor, rating}) =>{
    return(
        <section className="results">
        <header>
            <img src={prodImage} alt="Product Image" />
            <div className="product-brief">
                <h3>{prodName}</h3>
                <data value={newPrice}><del>{originalPrice}</del> <ins>{newPrice}</ins></data>
            </div>
            <p>{prodDesc}<a href={prodLink} target='_blank'>see more</a></p>
            <dl className="product-rating">
                <dt>Rating: </dt>
                <dd>{rating}<span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span></dd>
            </dl>
        </header>
        <form className="product-choice">
            <fieldset>
                <legend>Colours</legend>
                <ul className="filter-list">
                    <li><label><input type="radio" name="colour" value="r"/> {prodColor[0]}</label></li>
                    <li><label><input type="radio" name="colour" value="w"/> {prodColor[1]}</label></li>
                    <li><label><input type="radio" name="colour" value="b"/> {prodColor[2]}</label></li>
                </ul>
            </fieldset>
            <fieldset>
                <legend>Guitar Type</legend>
                <ol className="filter-list">
                    <li><label><input type="radio" name="guitarType" value="acoustic"/> {prodType}[0]</label></li>
                    <li><label><input type="radio" name="guitarType" value="electric"/> {prodType}[1]</label></li>
                    <li><label><input type="radio" name="guitarType" value="semi-acoustic"/> {prodType}[2]</label></li>
                </ol>
            </fieldset>
        </form>
        <footer>
            <button type="button"><i className="fab fa-opencart"></i></button>
            <button type="button"><i className="fas fa-heart"></i></button>
        </footer>
        </section>
    );
}

export default ProductList