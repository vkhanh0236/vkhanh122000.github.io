import { useState } from "react";
import { PROMO_CODES } from "../mockData";
export default function Footer({ products , PRODUCTS ,setProducts }) {
  const [checkpromo, setCheckPromo] = useState("");
  const [isdiscount, setIsDiscount] = useState(false);
  const [numberdiscount, setNumberDiscount] = useState(0);
  function usePromoCode() {
    for (let i = 0; i < PROMO_CODES.length; i++) {
      if (checkpromo === PROMO_CODES[i].code) {
        setIsDiscount(true);
        setNumberDiscount(PROMO_CODES[i].discountPercent);
        return;
      }
      setIsDiscount(false);
      setNumberDiscount(0);
    }
  }
  function formatCurrency(amount) {
    amount = amount.toFixed(2).replace(/(\d)(?=(\d{3})+\b)/g, "$1,");
    return amount;
  }
  let sum = 0;
  const totalPrice = function () {
    let totalprice = 0;
    for (let i = 0; i < products.length; i++) {
      totalprice += products[i].quantity * products[i].price;
    }
    sum = totalprice;
    return totalprice;
  };
  const taxCal = function () {
    let a = (sum / 100) * 10;
    return a;
  };
  const afterTaxPrice = formatCurrency(
    parseInt(totalPrice() * (100 - numberdiscount) * 0.01) + parseInt(taxCal())
  );

  return (
    <div>
      {products.length === 0 ? (
        <section className="container">
          <div className="detail">
            <div className="name">Không có sản phẩm nào trong giỏ </div>
            <div className="checkout">
              <button
                type="button"
                className="button-back"
                onClick={() => setProducts(PRODUCTS)}
              >
                Quay lại mua hàng
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="container">
          <div className="promotion">
            <label htmlFor="promo-code">Have A Promo Code?</label>
            <input
              type="text"
              id="promo-code"
              value={checkpromo}
              onChange={(event) => {
                setCheckPromo(event.target.value);
              }}
            />
            <button type="button" onClick={usePromoCode} />
          </div>
          <div className="summary">
            <ul>
              <li>
                Subtotal <span>${formatCurrency(totalPrice())}</span>
              </li>
              <li>
                Tax <span>${formatCurrency(taxCal())}</span>
              </li>
              {isdiscount && (
                <li>
                  Discount <span>- {numberdiscount}%</span>
                </li>
              )}
              <li className="total">
                Total <span>${afterTaxPrice}</span>
              </li>
            </ul>
          </div>
          <div className="checkout">
            <button type="button">Check Out</button>
          </div>
        </section>
      )}
    </div>
  );
}
