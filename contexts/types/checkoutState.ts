import { Order } from "./order";
import { Checkout } from "./check";

export type CheckoutStateContextData = {
    checkout: Checkout;
    order: Order;
};