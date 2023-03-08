import { useDispatch, useSelector } from "react-redux";

import "./Menu.scss";
import photo3 from "../../../image/img-1.jpg";
import photo4 from "../../../image/img-2.jpg";
import photo5 from "../../../image/img-3.jpg";
import photo6 from "../../../image/img-4.jpg";
import photo2 from "../../../image/img-5.jpg";
import photo from "../../../image/img-6.jpg";
import { Link } from "react-router-dom";
import { menuActions } from "../../../store/menu-slice";

const menu = [
  {
    id: "01",
    name: "shop",
    img: photo,
  },
  {
    id: "02",
    name: "information",
    img: photo2,
  },
  {
    id: "03",
    name: "contacts",
    img: photo3,
  },
  {
    id: "04",
    name: "faq",
    img: photo4,
  },
  {
    id: "05",
    name: "blog",
    img: photo5,
  },
  {
    id: "06",
    name: "account",
    img: photo6,
  },
];

const Menu = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(menuActions.toggle());
  };

  const showMenu = useSelector((state) => state.menu.menuIsOpen);

  const menuClass = showMenu ? "active" : "";

  const menuLinks = menu.map((item) => (
    <li className="menu__item" key={item.id} onClick={clickHandler}>
      <Link to={`pages/${item.name}`}>{item.name}</Link>
    </li>
  ));

  const menuImages = menu.map((item) => <img src={item.img} key={item.id} />);

  return (
    <nav className={`menu ${menuClass}`}>
      <ul className="menu__list">
        {menuLinks}
        <div className="menu__images">{menuImages}</div>
      </ul>
    </nav>
  );
};

export default Menu;
