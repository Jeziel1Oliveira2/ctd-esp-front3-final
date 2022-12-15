import { Dispatch, SetStateAction } from "react";
import { Order } from "./order";
import { Checkout } from "./check";


export type CheckoutDispatchContextData = {
    registerCheckout: Dispatch<SetStateAction<Checkout>>;
    registerOrder: Dispatch<SetStateAction<Order>>;
};