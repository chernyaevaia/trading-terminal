import { useState } from "react";
import "./App.css";
import { BidList } from "./BidList";
import { AddBidForm } from "./TickerCard";
import { Instrument } from "./Enum";

function App() {

  const [bidsList, setBidsList] = useState<[]>([]);

  const addBid = (tickerAmount: string, selectedInstrument: string) => {
    let copy: any = [...bidsList];
    copy = [...copy, {amount: tickerAmount, instrument: selectedInstrument}];
    setBidsList(copy);
  }


  return (
    <>
      <AddBidForm
        options={Instrument}
        addBid={addBid}
      />
      <BidList bids={bidsList}/>
    </>
  );
}

export default App;
