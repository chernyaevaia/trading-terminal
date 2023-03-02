import { useState } from "react";
import "./App.css";
import { BidList } from "./BidList";
import { AddBidForm } from "./TickerCard";
import { Bid, Instrument } from "./Enum";
import moment from "moment";

function App() {
  const [bidsList, setBidsList] = useState<Bid[]>([]);

  const addBid = (
    tickerAmount: number,
    selectedInstrument: string,
    orderSide: string,
    status: string,
    price: string
  ) => {
    let copy: Bid[] = [...bidsList];
    copy = [
      ...copy,
      {
        amount: tickerAmount,
        instrument: selectedInstrument,
        creationTime: moment(new Date()).format("YYYY-MM-DD LTS"),
        changeTime: moment(new Date()).format("YYYY-MM-DD LTS"),
        side: orderSide,
        status: status,
        price: price,
        onDelete: handleDelete,
      },
    ];
    setBidsList(copy);
  };

  const handleDelete = (index: number) => {
    const array = bidsList?.filter((item, i) => index !== i);
    setBidsList(array);
  };

  return (
    <>
      <AddBidForm options={Instrument} addBid={addBid} />
      <BidList bids={bidsList} handleDelete={handleDelete} />
    </>
  );
}

export default App;
