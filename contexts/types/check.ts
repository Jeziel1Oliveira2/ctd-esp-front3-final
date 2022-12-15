export type Checkout = {
    name: string;
    lastname: string;
    email: string;
    address1: string;
    address2?: string | null;
    city: string;
    state: string;
    zipCode: string;
    number: string;
    cvc: string;
    expDate: string;
    nameOnCard: string;
}