import { useState } from "react";
import "./App.css";
import { BidList } from "./BidList";
import { AddBidForm } from "./TickerCard";
import { Instrument } from "./Enum";
import moment from "moment";

function App() {
  const [bidsList, setBidsList] = useState<[]>([]);

  const addBid = (
    tickerAmount: string,
    selectedInstrument: string,
    orderSide: string
  ) => {
    let copy: any = [...bidsList];
    copy = [
      ...copy,
      {
        amount: tickerAmount,
        instrument: selectedInstrument,
        creationTime: moment(new Date()).format("YYYY-MM-DD LTS"),
        changeTime: moment(new Date()).format("YYYY-MM-DD LTS"),
        side: orderSide,
      },
    ];
    setBidsList(copy);
  };

  return (
    <>
      <AddBidForm options={Instrument} addBid={addBid} />
      <BidList bids={bidsList} />
    </>
  );
}

export default App;
