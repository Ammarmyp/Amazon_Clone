import "../styles/header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
      />
      <div className="header_search">
        <input type="text" className="search_input" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest </span>
          <span className="header_optionLineTwo">Sign in </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns </span>
          <span className="header_optionLineTwo">& Orders </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your </span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header_optionCart">
          <ShoppingCartIcon />
          <span className="header_optionLineTwo header_cartCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
