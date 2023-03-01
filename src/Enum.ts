export enum ClientMessageType {
  subscribeMarketData = 1,
  unsubscribeMarketData,
  placeOrder,
}

export enum ServerMessageType {
  success = 1,
  error,
  executionReport,
  marketDataUpdate,
}

export enum OrderSide {
  buy = 1,
  sell,
}

export enum OrderStatus {
  active = 1,
  filled,
  rejected,
  cancelled,
}

export const Instrument = [
  { label: "EUR/USD", value: "EUR/USD" },
  { label: "EUR/RUB", value: "EUR/RUB" },
  { label: "USD/RUB", value: "USD/RUB" },
];

export interface Bid  {
  id: number,
  creationTime: string,
  changeTime: string,
  status: string,
  side: string;
  price: string,
  amount: string,
  instrument: string
}
