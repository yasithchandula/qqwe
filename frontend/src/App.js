import "../src/components/Header.css";
import Header from "../src/components/Header";
import Counterclass from "./components/Counterclass";
import CounterFunction from "./components/counterfunction";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Counterclass />
      <CounterFunction />
      <Header />
    </div>
  );
}

export default App;
