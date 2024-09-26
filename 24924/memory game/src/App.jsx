import { Provider } from "react-redux";
import "./App.css";
import store from "./store/Store";
import MemoryGame from "./screen/MemoryGame";

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
