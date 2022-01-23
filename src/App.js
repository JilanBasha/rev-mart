import logo from './logo.svg';
import './App.css';

import React from 'react';
import Login from "./components/Login";

function App() {
//   const [formData, setFormData] = React.useEffect({
//     user: "",
//     pwd: ""
// });
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Login />
      <form>

      <input type="text" name="user" value="{formData.user}" />
            <input type="password" name="pwd" value="{formData.pwd}" /> 
      </form>
    </div>
  );
}

export default App;
