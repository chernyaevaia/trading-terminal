import { ChangeEvent } from "react";
import { Instrument } from "./Enum";
import styles from "./TickerCard.module.css";

export interface TickerCardProps {
  options: typeof Instrument;
  sellPrice?: number;
  buyPrice?: number;
  tickerAmount: string;
  selectedOption: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeOption: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export function TickerCard(ticker: TickerCardProps) {
  return (
    <form className={styles.tickercard}>
      <select
        className={styles.instruments}
        name="instruments"
        id="instruments"
        onChange={ticker.onChangeOption}
      >
        {ticker.options.map((option) => {
          return (
            <option
              label={option.label}
              value={option.value}
              selected={ticker.selectedOption === option.value}
            ></option>
          );
        })}
      </select>
      <input
        value={ticker.tickerAmount}
        onChange={ticker.onChange}
        className={styles.input}
        type="text"
      />
      <div className={styles.priceBlock}>
        <div className={styles.price}>8.59339 {ticker.sellPrice}</div>
        <button type="submit" className={styles.btn1}>
          sell
        </button>
      </div>
      <div className={styles.priceBlock}>
        <div className={styles.price}>8.599 {ticker.buyPrice}</div>
        <button type="submit" className={styles.btn2}>
          buy
        </button>
      </div>
    </form>
  );
}
