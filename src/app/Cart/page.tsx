import React from "react";
import style from "./cartPage.module.css";
import Image from "next/image";
import img from "@public/Image/Frame 611.png";
import BigButton from "@/Components/BigButton";

const CartPage = () => {
  return (
    <div className={style.CartPage}>
      <p>
        Home / <span>Cart</span>
      </p>

      <table className={style.cartTable}>
        <tr className={style.tableHeader}>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th className={style.subTotal}>Subtotal</th>
        </tr>
        <TableRow />
        <TableRow />
        <TableRow />
      </table>

      <div className={style.cartTotal}>
        <h3>Cart Total</h3>
        <div>
          <p>Subtotal: </p>
          <p>$1750</p>
        </div>
        <div>
          <p>Dilivery </p>
          <p>Free</p>
        </div>
        <div>
          <p>Total: </p>
          <p>$1750</p>
        </div>
        <BigButton
          buttonTitle="Proceed To checkout"
          styles={{ marginTop: "20px", padding: "10px 50px" }}
        />
      </div>
    </div>
  );
};

export default CartPage;

const TableRow = () => {
  return (
    <tr className={style.tableRow}>
      <td className={style.ImageProductFlex}>
        <div className={style.TableImageHolder}>
          <Image
            src={img}
            alt="Product Image"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        Alfreds Futterkiste
      </td>
      <td>650</td>
      <td>
        <input
          className={style.numberInput}
          type="number"
          defaultValue={1}
          min={0}
        />
      </td>
      <td className={style.subTotal}>650</td>
    </tr>
  );
};

// const Counter = () => {
//   return (
//     <div className={style.tableCounter}>
//       <p>2</p>
//       <div></div>
//     </div>
//   );
// };
