import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div >
      <input type="text" value={name} onChange={onChangeNameHandler} />
      <input type="text" value={password} onChange={onChangePasswordHandler} />
      <p>Custom Hooks</p> 
    </div>
  );
}

export default App;
