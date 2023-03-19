import React , {useState} from "react";

function App() {
  const [count , setCount] = useState(0)
  const handleclick = () => {
    setCount(count+1)
  }
  return (
    <div>
      <button onClick={handleclick}>button</button> 
      <div>{count}</div>
    </div>
  );
}

export default App;
