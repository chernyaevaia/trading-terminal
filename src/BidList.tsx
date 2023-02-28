import styles from "./BidList.module.css";

export interface BidListProps {
  id?: number,
  creationTime?: string,
  changedTime?: string,
  status?: string,
  side?: string,
  price?: string,
  amount?: string,
  instrument?: string,
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
        <tr>
          <td>1 {bid.id}</td>
          <td>22.02.2023 {bid.creationTime}</td>
          <td>22.02.2023 {bid.changedTime}</td>
          <td>Active {bid.status}</td>
          <td>Buy {bid.side}</td>
          <td>33.89 {bid.price}</td>
          <td>10 000 {bid.amount}</td>
          <td>USD/RUB {bid.instrument}</td>
        </tr>
      </tbody>
    </table>
  );
}
