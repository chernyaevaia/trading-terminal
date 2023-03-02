import { FormEvent, useState } from "react";
import { Instrument, OrderSide, OrderStatus } from "./Enum";
import styles from "./TickerCard.module.css";

export interface TickerCardProps {
  options: typeof Instrument;
  addBid: (
    tickerAmount: number,
    selectedInstrument: string,
    orderSide: string,
    status: string,
    price: string
  ) => void;
}

export function AddBidForm(ticker: TickerCardProps) {
  const [tickerAmount, setTickerAmount] = useState<number>(0);
  const [orderSide, setOrderSide] = useState<string>("");
  const [sellPrice, setSellPrice] = useState<string>(
    (Math.random() * 3 + 70).toFixed(4)
  );
  const [buyPrice, setBuyPrice] = useState<string>(
    (Math.random() * 3 + 70).toFixed(4)
  );
  const [status, setStatus] = useState<string>(OrderStatus.active);
  const [selectedInstrument, setSelectedInstrument] = useState<string>(
    Instrument[0].value
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ticker.addBid(
      tickerAmount,
      selectedInstrument,
      orderSide,
      status,
      orderSide === OrderSide.buy ? buyPrice : sellPrice
    );
    setTickerAmount(0);
    setSelectedInstrument(Instrument[0].value);
  };

  return (
    <form className={styles.tickercard} onSubmit={handleSubmit}>
      <select
        className={styles.instruments}
        name="instruments"
        id="instruments"
        onChange={(e) => {
          setSellPrice((Math.random() * 3 + 70).toFixed(4));
          setBuyPrice((Math.random() * 3 + 70).toFixed(4));
          setSelectedInstrument(e.target.value);
        }}
      >
        {ticker.options.map((option) => {
          return (
            <option
              label={option.label}
              value={option.value}
              selected={selectedInstrument === option.value}
            ></option>
          );
        })}
      </select>
      <input
        value={tickerAmount}
        onChange={(e) => setTickerAmount(+e.target.value)}
        className={styles.input}
        type="number"
      />
      <div className={styles.priceBlock}>
        <div className={styles.price}>{sellPrice}</div>
        <button
          onClick={(e) => setOrderSide(OrderSide.sell)}
          value={orderSide}
          type="submit"
          className={styles.btn1}
        >
          sell
        </button>
      </div>
      <div className={styles.priceBlock}>
        <div className={styles.price}>{buyPrice}</div>
        <button
          type="submit"
          onClick={(e) => setOrderSide(OrderSide.buy)}
          value={orderSide}
          className={styles.btn2}
        >
          buy
        </button>
      </div>
    </form>
  );
}
