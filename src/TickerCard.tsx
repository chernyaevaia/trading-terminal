import styles from "./TickerCard.module.css";

export interface TickerCardProps {
    options?: [];
    sellPrice?: number,
    buyPrice?: number,
    tickerAmount?: string
}

export function TickerCard(ticker: TickerCardProps) {
  return (
    <div className={styles.tickercard}>
      <select
        className={styles.instruments}
        name="instruments"
        id="instruments"
      >
        {/* {ticker.options} */}
        {/* <option value=""></option>
        <option value=""></option> */}
      </select>
      <input value={ticker.tickerAmount} className={styles.input} type="text" />
      <div className={styles.priceBlock}>
        <div className={styles.price}>8.59339 {ticker.sellPrice}</div>
        <button className={styles.btn1}>sell</button>
      </div>
      <div className={styles.priceBlock}>
        <div className={styles.price}>8.599 {ticker.buyPrice}</div>
        <button className={styles.btn2}>buy</button>
      </div>
    </div>
  );
}
