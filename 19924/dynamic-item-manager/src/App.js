import { ItemProvider } from "./context/ItemContext";
import ItemManager from "./components/ItemManager";

function App() {
  return (
    <ItemProvider>
      <ItemManager />
    </ItemProvider>
  );
}

export default App;