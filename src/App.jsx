import {useState} from 'react';

function App(){
  const [amount,setAmount]=useState("");
  const [to,setTo]=useState("");
  const [from,setFrom]=useState("");
  const [converted,setConverted]=useState("");

  const handleSubmit= async()=>{
    if(!amount ||!to ||!from){
      alert("Fill all the fields");
      return;
    }
    const res=await fetch(`https://exchangerate.host/convert?from=${from.toUpperCase()}&to=${to.toUpperCase()}&amount=${amount}`);
    const data=await res.json();
    setConverted(data.result);
  
  };

  return(
    <div>
      <h1>Converter</h1>
      <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount"/>
      <input type="text" value={from} onChange={(e)=>setFrom(e.target.value)} placeholder="Enter from currency"/>
      <input type="text" value={to} onChange={(e)=>setTo(e.target.value)} placeholder="Enter To currency"/>
      <button onClick={handleSubmit}>CLICK here</button>
      {converted && (
        <div>
          {amount}:{from.toUpperCase()}={converted}:{to.toUpperCase()}
        </div>

      )}
    </div>
  );
}
export default App;