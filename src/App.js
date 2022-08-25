import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
function App() {
  //useefect ile spette her degisiklik oldugunda calculate fonksiyonu tetiklenecek ve sayılar güncellenecek
  const {cartItems}=useSelector((store)=>store.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems])

  return (
    <main>
    <Navbar />
    <CartContainer/>
    </main>

  )
}
export default App;
