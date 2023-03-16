import React, { MouseEvent } from "react";
import { selectState } from "../features/speakerSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
import {
  increase,
  decrease,
  remove,
  removeAll,
} from "../features/speakerSlice";
import { useDispatch } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();

  const state = useSelector(selectState);

  let { products, TotalQuantity, totalprice } = state;

  const handleMore = (id: TProductId) => dispatch(increase(id));

  const handleLess = (id: TProductId) => dispatch(decrease(id));

  const handleRemove = (speaker: TProduct) => dispatch(remove(speaker));

  const handleClearAll = () => dispatch(removeAll());

  return (
    <>
      {products.map((item) => (
        <div key={item.id}>
          <Image src={item.image} width={100} height={100} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <p>Units: {item.amount}</p>
          <button
            style={{ padding: "6px", cursor: "pointer" }}
            onClick={() => handleMore(item.id)}
          >
            +
          </button>
          <button
            style={{ padding: "6px", cursor: "pointer" }}
            onClick={() => handleLess(item.id)}
          >
            -
          </button>
          <button
            style={{ padding: "6px", cursor: "pointer" }}
            onClick={() => handleRemove(item)}
          >
            x
          </button>
        </div>
      ))}
      {state.totalprice ? (
        <>
          <p>Total ${totalprice}</p>
          <p>Unis :{TotalQuantity}</p>
          <button onClick={handleClearAll}>Clear All</button>
        </>
      ) : (
        <></>
      )}
    </>
    
  );
}
