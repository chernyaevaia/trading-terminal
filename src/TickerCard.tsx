import { FormEvent, useState } from "react";
import { Instrument } from "./Enum";
import styles from "./TickerCard.module.css";

export interface TickerCardProps {
  options: typeof Instrument;
  addBid?: any
}

export function AddBidForm(ticker: TickerCardProps) {
  const [tickerAmount, setTickerAmount] = useState<string>("");
  const [selectedInstrument, setSelectedInstrument] = useState<string>(
    Instrument[0].value
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ticker.addBid(tickerAmount, selectedInstrument);
    setTickerAmount("")
    setSelectedInstrument(Instrument[0].value)
}

  return (
    <form className={styles.tickercard} onSubmit={handleSubmit}>
      <select
        className={styles.instruments}
        name="instruments"
        id="instruments"
        onChange={(e) => setSelectedInstrument(e.target.value)}
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
        onChange={(e) => setTickerAmount(e.target.value)}
        className={styles.input}
        type="text"
      />
      <div className={styles.priceBlock}>
        <div className={styles.price}>8.59339</div>
        <button type="submit" className={styles.btn1}>
          sell
        </button>
      </div>
      <div className={styles.priceBlock}>
        <div className={styles.price}>8.599</div>
        <button type="submit" className={styles.btn2}>
          buy
        </button>
      </div>
    </form>
  );
}
