import styles from "./BidList.module.css";
import { Bid } from "./Enum";

export interface BidListProps {
  bids?: Bid[];
}

export function BidList(bid: BidListProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tableHeader}>
          <th>ID</th>
          <th>Creation Time</th>
          <th>Change Time</th>
          <th>Status</th>
          <th>Side</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Instrument</th>
        </tr>
      </thead>
      <tbody>
        {bid.bids?.map((bid, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>22.02.2023</td>
              <td>22.02.2023</td>
              <td>Active</td>
              <td>Buy</td>
              <td>33.89</td>
              <td>{bid.amount}</td>
              <td>{bid.instrument}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
