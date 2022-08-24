import { useSelector } from "react-redux";
import { CartIcon } from "../icons";
import { store } from "../store";
const Navbar = () => {
    const amount = useSelector((store)=>store.cart.amount)
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
        </div>
        <div className="amount-container">
            <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
