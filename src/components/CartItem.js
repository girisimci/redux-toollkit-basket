import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article>
      <img
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
        src={img}
        alt={title}
      />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn">
          <button
            className="amount-btn"
            onClick={() => dispatch(increase({ id }))}
          >
            <ChevronUp />
          </button>
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <button
            className="amount-btn"
            onClick={() => {
              // TODO - if işlemi amount 1 den aşşağı inerse item tamamen kalksın diye kullanılldı. aksi halde item -1 -2..vb şeklinde geri gider.
              if (amount === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease({ id }));
            }}
          >
            <ChevronDown />
          </button>
        </button>
      </div>
    </article>
  );
};
export default CartItem;
