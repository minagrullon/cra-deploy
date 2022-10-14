import "./App.css";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <h1>First Deployed Site</h1>
      <h2> my new update </h2>
      <h3>Making changes on the new branch</h3>
    </div>
  );
}

export default App;
