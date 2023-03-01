import { useState } from "react";
import styles from "./BidList.module.css";
import { Bid } from "./Enum";

export interface BidListProps {
  bids?: Bid[];
  handleDelete?: any;
}

export function BidList(props: BidListProps) {

  const [order, setOrder] = useState<{
    sortBy: "creationTime" | "orderSide" | "tickerAmount";
    descending: boolean;
  }>({
    sortBy: "creationTime",
    descending: true,
  });

  const comparator = (a: Bid, b: Bid): number => {

    if (order.sortBy === "orderSide") {
      if (order.descending ? a.side === "Buy" : a.side === "Sell") {
        return -1;
      }
      if (order.descending ? a.side === "Buy" : a.side === "Sell") {
        return 1;
      }
      return 0;
    }
   
    if (order.sortBy === "creationTime") {
      const isNewer = new Date(a.creationTime) < new Date(b.creationTime);
      const isLater = new Date(a.creationTime) > new Date(b.creationTime);
      if (order.descending ? isLater : isNewer) {
        return -1;
      }
      if (order.descending ? isNewer : isLater) {
        return 1;
      }
      return 0;
    }
    return 0;
  };



  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tableHeader}>
          <th>ID</th>
          <th>Creation Time <button onClick={() => setOrder({sortBy: "creationTime", descending: !order.descending})}>sort</button> </th>
          <th>Change Time</th>
          <th>Status</th>
          <th>Side <button onClick={() => setOrder({sortBy: "orderSide", descending: !order.descending})}>sort</button></th>
          <th>Price</th>
          <th>Amount</th>
          <th>Instrument</th>
          <th>Cancel</th>
        </tr>
      </thead>
      <tbody>
        {props.bids?.sort(comparator).map((bid, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{bid.creationTime}</td>
              <td>{bid.changeTime}</td>
              <td>{bid.status}</td>
              <td>{bid.side}</td>
              <td>{bid.price}</td>
              <td>{bid.amount}</td>
              <td>{bid.instrument}</td>
              <td>
                {bid.status === "Active" && (
                  <button type="button" onClick={() => props.handleDelete(index)}>
                    Cancel
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
