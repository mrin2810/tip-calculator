import { useState } from "react";
import Bill from "./components/Bill";
import Feedback from "./components/Feedback";
import Total from "./components/Total";
import Button from "./components/Button";

function App() {
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  const [amount, setAmount] = useState(0);

  const tip = (amount * (tip1 + tip2)) / 200;
  const total = amount + tip;

  const handleAmount = (newAmount) => {
      let value = Number(newAmount);
      if (!isNaN(value)) { 
        setAmount(value);
      }
  }

  const handleTip1 = (newTip1) => {
    let value = Number(newTip1);
    if (!isNaN(value)) { 
      setTip1(value);
    } 
  }


  const handleTip2 = (newTip2) => {
    let value = Number(newTip2);
    if (!isNaN(value)) { 
      setTip2(value);
    } 
  }

  const handleReset = () => {
    setAmount(0);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div className="App">
      <Bill amount={amount} onAmount={handleAmount} />
      <Feedback select={tip1} setSelect={handleTip1}>
        How did you like the service?
      </Feedback>
      <Feedback select={tip2} setSelect={handleTip2}>
        How did your friend like the service?
      </Feedback>
      {amount !== 0 && <><Total bill={amount} total={total} tip={tip} /><Button onReset={handleReset}/></>}
      
    </div>
  );
}

export default App;
