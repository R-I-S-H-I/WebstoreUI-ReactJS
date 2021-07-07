import React from 'react';
import ButtonSvg from '../img/Asset_1.png';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const Header = () =>{
    console.log(typeof(FavoriteBorderIcon));
    return(
        <>
            <header className="page-header">
                <a href="index.html" className="logo"><h1>StringLish</h1></a>

                <button type="button" className="nav-toggle" id="mob_menu">
                    <img src={ButtonSvg} />
                </button>
                <nav aria-label="Primary" className="navigation">
                    <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li className="sub"><a href="#">Shop</a>
                        <ul className="submenu">
                        <li><a href="#">Electric Guitars</a></li>
                        <li><a href="#">Acoustic Guitars</a></li>
                        </ul>
                    </li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <form className="search">
                    <input type="search" name="find" id="find" placeholder="Search" />
                    <button type="button" className="searchbtn"></button>
                </form>

                <ul className="your-products">
                    <li><a href="#">{<FavoriteBorderIcon />}</a></li>
                    <li><a href="#">{<ShoppingCartIcon/>}</a></li>
                    <li><a href="#">{<AccountCircleIcon />}</a></li>
                </ul>
            </header>
        </>
    );
}

export default Header