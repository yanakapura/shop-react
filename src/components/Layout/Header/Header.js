import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "../../../store/menu-slice";
import { Link, useMatch } from "react-router-dom";

import { ButtonHeader } from "../../UI/Button";

import "./Header.scss";

const Header = (props) => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.menu.menuIsOpen);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const match = useMatch("/pages/*");

  const menuToggleHandler = () => {
    dispatch(menuActions.toggle());
  };

  const logoClickHandler = () => {
    if (showMenu) {
      menuToggleHandler();
    }
  };

  const headerClasses = match && !showMenu && "black relative";

  return (
    <>
      <header className={`header ${headerClasses}`}>
        <div className="header__logo" onClick={logoClickHandler}>
          <Link to="/home">moomoo.space</Link>
        </div>
        <div className="header__menu">
          <ButtonHeader className="header__btn" onClick={menuToggleHandler}>
            {showMenu ? "Close" : "Menu"}
          </ButtonHeader>
        </div>
        <div className="header__cart">
          <ButtonHeader className="header__btn">
            cart(<span>{cartQuantity}</span>)
          </ButtonHeader>
        </div>
      </header>
    </>
  );
};

export default Header;
