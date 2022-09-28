import ProductsListView from "./components/ProductsListView";
import ProductView from "./components/ProductView";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes>
        <Route path="/" element={<ProductsListView />}></Route>
        <Route path="/product/:id" element={<ProductView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
