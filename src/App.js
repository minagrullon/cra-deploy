import "./App.css";
import Contacts from "./Components/Contacts";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <h1>First Deployed Site</h1>
      <h2> my new update </h2>
      <Contacts />
    </div>
  );
}

export default App;
