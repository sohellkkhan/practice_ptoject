import React from "react";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import {remove} from '../store/cartSlice'


const Cart = () => {

  const dispatch=useDispatch()

  const handleAdd = (itemId) => {
      dispatch(remove(itemId))

  };

  const items = useSelector(state => state.cart);
  console.log(items)
  return (
    <div>
      <Nav />
      <div>
        <div className="bg-pink-50 p-2">
          <div className="flex flex-wrap items-center justify-center">
            {items.map((item) => (
              <div
                className="m-6 h-full [270px] w-[250px] shadow-md rounded-md bg-white p-0.5"  >
                <div className="m-3 grid grid-cols-1 justify-center">
                  <img className="h-[160px] w-[150px] ml-8" src={item.image} />
                  <p className="p-2">{item.title}</p>
                  <p className="p-2">₹ {item.price}</p>
                  <Button
                    onClick={()=>handleAdd(item.id)}
                    className="p-2 m-3 uppercase bold bg-blue-500 px-10 py-2 rounded-md items-center
                               duration-500 hover:bg-slate-500" >
                    Add
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
