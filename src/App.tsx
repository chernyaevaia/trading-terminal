import React, { useState } from "react";
import "./App.css";
import { BidList } from "./BidList";
import { TickerCard } from "./TickerCard";
import { Instrument } from "./Enum";

function App() {
  const [tickerAmount, setTickerAmount] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>(
    Instrument[0].value
  );

  return (
    <>
      <TickerCard
        options={Instrument}
        selectedOption={selectedOption}
        tickerAmount={tickerAmount}
        onChangeOption={(e) => setSelectedOption(e.target.value)}
        onChange={(e) => setTickerAmount(e.target.value)}
      />
      <BidList amount={tickerAmount} />
    </>
  );
}

export default App;
