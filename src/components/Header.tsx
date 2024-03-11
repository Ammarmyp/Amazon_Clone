import "../styles/header.css";

const Header = () => {
  return <div className="header">
    <img className="header_logo" src="" alt="" />
    <div className="header_search">
        <input type="text" className="search_input" />
    </div>
    <div className="header_nav">
         <div className="header_option">
            <span className="header_optionLineOne">Hello Guest </span>
            <span className="header_optionLineOne">Sign in </span>
         </div>
         <div className="header_option">
         <span className="header_optionLineOne">Returns  </span>
            <span className="header_optionLineOne">Orders  </span>
         </div>
         <div className="header_option">
         <span className="header_optionLineOne">Your </span>
            <span className="header_optionLineOne">Prime</span>
         </div>
    </div>
  </div>;
};

export default Header;
