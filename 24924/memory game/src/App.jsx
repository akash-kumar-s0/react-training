import { Provider } from "react-redux";
import MemoryGame from "./components/MemoryGame";
import "./App.css";
import store from "./store/Store";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <MemoryGame />
        </Provider>
      </div>
    </>
  );
}

export default App;
