import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ProductList = ({prodName, prodImage, prodLink, prodDesc, originalPrice, newPrice, prodType, prodColor, rating}) =>{
    return(
        <div className="productCard">
        <header>
            <img className="imgWrapper" src={prodImage} alt="Product Image" />
            <div className="product-brief">
                <h3>{prodName}</h3>
                <data value={newPrice}><del>{originalPrice}</del> <ins>{newPrice}</ins></data>
            </div>
            <p>{prodDesc}<a href={prodLink} target='_blank'>see more</a></p>
            <dl className="product-rating">
                <dt>Rating: </dt>
                <dd>{rating}<span>{<StarRateIcon />}</span><span>{<StarRateIcon />}</span><span>{<StarRateIcon />}</span><span>{<StarRateIcon />}</span></dd>
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
                    <li><label><input type="radio" name="guitarType" value="acoustic"/> {prodType[0]}</label></li>
                    <li><label><input type="radio" name="guitarType" value="electric"/> {prodType[1]}</label></li>
                    <li><label><input type="radio" name="guitarType" value="semi-acoustic"/> {prodType[2]}</label></li>
                </ol>
            </fieldset>
        </form>
        <footer>
            <button type="button">{<AddShoppingCartIcon/>}</button>
            <button type="button">{<FavoriteIcon />}</button>
        </footer>
        </div>
    );
}

export default ProductList