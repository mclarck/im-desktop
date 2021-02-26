import { sum, multiply } from "mathjs";
import { t } from "../locale";

export default class Calculator {
  cart: any[];
  constructor(cart: any[]) {
    this.cart = cart;
  }
  tax = () => {
    let taxes = 0;
    if (this.cart)
      this.cart.forEach((order) => {
        const tax = parseFloat(order.stock?.tax);
        const price = parseFloat(order.stock?.price);
        const quantity = parseFloat(order.quantity);

        if (tax && price && quantity) {
          if (quantity > 0) {
            // il y au moins un article
            const percentage = multiply(tax, quantity); // %tax pour tous les articles
            const subTax = multiply(percentage, price); // pour tous les article
            taxes = sum(taxes, subTax); // tax accumulated
          }
        }
      });
    return taxes.toFixed(2);
  };

  shipment = () => {
    let final = 0;
    let total = 0;
    let base: any = 0;
    let add: any = 0;

    if (this.cart) {
      this.cart.forEach((order) => {
        const _base = parseFloat(order.stock?.shipping);
        const _add = parseFloat(order.stock?.shippingAdditional);
        const quantity = parseFloat(order.quantity);

        if (quantity && quantity > 0) total = sum(total, quantity);
        if (_base > base) base = _base; // le cout a change, surement un nouveau stock
        if (_add > add) add = _add; // la cout additionel a change
      });
      if (base && add && total) {
        total = total > 0 ? total - 1 : total; // exclure le premier article
        add = multiply(total, add); // cout additionnel
        final = sum(base, add); // cout final
      }
    }

    return final.toFixed(2);
  };

  subTotal = () => {
    let total = 0;
    if (this.cart)
      this.cart.forEach((order) => {
        const price = parseFloat(order.stock?.price);
        const quantity = parseFloat(order.quantity);
        if (quantity > 0) {
          // au moins un article
          const cost = multiply(quantity, price); // cout pour un order
          total = sum(total, cost);
        }
      });
    return total.toFixed(2);
  };

  amount = () => {
    const _tax = parseFloat(this.tax());
    const _ship = parseFloat(this.shipment());
    const _total = parseFloat(this.subTotal());
    const amount = sum(_tax, _ship, _total);
    return amount.toFixed(2);
  };

  bills = () => {
    return [
      { name: t("SubTotal"), value: this.subTotal() },
      { name: t("Shipping"), value: this.shipment() },
      { name: t("Total"), value: this.amount(), isTotal: true },
    ];
  };
}
