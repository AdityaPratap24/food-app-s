import React, { useContext } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import myStore from "../utils/myStore";

const Header = () => {
  const [isOnline] = useOnline();
  //   const { user, setUser } = useContext(UserContext);
  const cartItems = useSelector((myStore) => myStore.cart.items);

  return (
    <div className="sticky top-0 bg-white z-10 shadow-md">
      <div className="p-3 w-full m-0 md:m-auto md:w-4/5  flex justify-between items-center">
        <Title />
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>

          <li>
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>

          <li>{!isOnline ? "❌" : "✔️"}</li>
          {/* <input
          value={user.name}
          onChange={(e) => setUser({...user,name: e.target.value })}
        /> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
