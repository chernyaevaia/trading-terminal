export enum OrderSide {
  buy = "Buy",
  sell = "Sell"
}

export enum OrderStatus {
  active = "Active",
  filled = "Filled",
  rejected = "Rejected",
  cancelled = "Cancelled"
}

export const Instrument = [
  { label: "EUR/USD", value: "EUR/USD" },
  { label: "EUR/RUB", value: "EUR/RUB" },
  { label: "USD/RUB", value: "USD/RUB" },
];

export interface Bid  {
  creationTime: string,
  changeTime: string,
  status: string,
  side: string;
  price: string,
  amount: string,
  instrument: string,
  onDelete: any,
}
