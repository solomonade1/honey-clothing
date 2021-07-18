import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/Pages/Homepage/homePage.component";
import ShopPage from "./Components/Pages/shop/shop.component";
import Header from "./Components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
