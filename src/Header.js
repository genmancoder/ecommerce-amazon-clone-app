import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
function Header(){
    return(
        <nav className="header">
            <img className="header__logo" src="" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/" className="header__link">
                    <div className="header__option">            
                        <span className="header__optionLineOne">Hello, User</span>
                        <span className="header__optionLineTwo">Sign</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">            
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3rd */}
                <Link to="/" className="header__link">
                    <div className="header__option">            
                        <span className="header__optionLineOne">You</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            {/* basket icon with number */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    {/* number of items in the basket */}
                    <span className="header_optionLineTwo header__basketCount">2</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header