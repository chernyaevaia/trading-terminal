import { useState } from "react";
import styles from "./BidList.module.css";
import { Bid, OrderStatus } from "./Enum";
import { ModalWindow } from "./ModalWindow";

export interface BidListProps {
  bids: Bid[];
  handleDelete: (index: number) => void;
}

export function BidList(props: BidListProps) {
  const [callModalWindow, setCallModalWindow] = useState<number | undefined>(
    undefined
  );
  const [order, setOrder] = useState<{
    sortBy: "creationTime" | "orderSide" | "tickerAmount" | "price";
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

    if (order.sortBy === "tickerAmount") {
      const isMore = +a.amount < +b.amount;
      const isLess = +a.amount > +b.amount;
      if (order.descending ? isLess : isMore) {
        return -1;
      }
      if (order.descending ? isMore : isLess) {
        return 1;
      }
      return 0;
    }

    if (order.sortBy === "price") {
      const isExpensive = +a.price < +b.price;
      const isCheap = +a.price > +b.price;
      if (order.descending ? isCheap : isExpensive) {
        return -1;
      }
      if (order.descending ? isExpensive : isCheap) {
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
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th>ID</th>
            <th>
              Creation Time{" "}
              <img
                className={styles.icon}
                alt=""
                src={require("./img/sort-ico.png")}
                onClick={() =>
                  setOrder({
                    sortBy: "creationTime",
                    descending: !order.descending,
                  })
                }
              />
            </th>
            <th>Change Time</th>
            <th>Status</th>
            <th>
              Side
              <img
                className={styles.icon}
                alt=""
                src={require("./img/sort-ico.png")}
                onClick={() =>
                  setOrder({
                    sortBy: "orderSide",
                    descending: !order.descending,
                  })
                }
              />
            </th>
            <th>
              Price
              <img
                className={styles.icon}
                alt=""
                src={require("./img/sort-ico.png")}
                onClick={() =>
                  setOrder({ sortBy: "price", descending: !order.descending })
                }
              />
            </th>
            <th>
              Amount
              <img
                className={styles.icon}
                alt=""
                src={require("./img/sort-ico.png")}
                onClick={() =>
                  setOrder({
                    sortBy: "tickerAmount",
                    descending: !order.descending,
                  })
                }
              />
            </th>
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
                  {bid.status === OrderStatus.active && (
                    <button
                      type="button"
                      onClick={() => setCallModalWindow(index)}
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {callModalWindow && (
        <ModalWindow
          onClose={() => setCallModalWindow(undefined)}
          isOpen={!!callModalWindow}
          text={`Are you sure you want to cancel this bid?`}
          onYes={() => {
            props.handleDelete(callModalWindow);
            setCallModalWindow(undefined);
          }}
        />
      )}
    </>
  );
}
