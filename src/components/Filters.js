import React from "react";
import StarRateIcon from '@material-ui/icons/StarRate';

const Filters = () =>{
    return(
        <form className="filters">
        <h2>Filters</h2>
        <a href="#">FILTERS</a>
        <button>Filters</button>
        <div className="filter-options">
          <fieldset>
            <legend>Guitar Types</legend>
            <ol className="filter-list">
              <li><input type="checkbox" name="type" value="acoustic" id="acoustic"/> <label htmlFor="acoustic">acoustic</label></li>
              <li><input type="checkbox" name="type" value="electric" id="electric"/> <label htmlFor="electric">electric</label></li>
              <li><input type="checkbox" name="type" value="semi-acoustic" id="semi-acoustic"/> <label htmlFor="semi-acoustic">semi-acoustic</label></li>
            </ol>
          </fieldset>
          <fieldset>
            <legend>Ratings (above)</legend>
            <ol className="filter-list">
              <li>
                <input type="radio" name="rating" value="4" id="aboveFour"/>
                <label htmlFor="aboveFour">
                  <span>{<StarRateIcon />}</span><span>{<StarRateIcon />}</span><span>{<StarRateIcon />}</span><span>{<StarRateIcon />}</span><span>{<StarRateIcon />}</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="3" id="aboveThree"/>
                <label htmlFor="aboveThree">
                  <span>{<StarRateIcon />}</span><span>{<StarRateIcon />}</span><span>{<StarRateIcon />}</span><span>{<StarRateIcon />}</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="2" id="aboveTwo"/>
                <label htmlFor="aboveTwo">
                  <span>{<StarRateIcon />}</span><span>{<StarRateIcon />}</span><span>{<StarRateIcon />}</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="1" id="aboveOne"/>
                <label htmlFor="aboveOne">
                  <span>{<StarRateIcon />}</span><span>{<StarRateIcon />}</span>
                </label>
              </li>
            </ol>
          </fieldset>
        </div>
        <fieldset className="sorting">
          <label htmlFor="sort">Show</label>
          <select name="sort" id="sort">
            <option value="price-high">Price, highest to lowest</option>
            <option value="price-low">Price, lowest to highest</option>
            <option value="newest">Newest releases</option>
          </select>
        </fieldset>
      </form>
    );
}

export default Filters