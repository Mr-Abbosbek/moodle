import { Switch } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Evalutsiya from "./Evalutsiya";
import LoyihaBosh from "./LoyihaBosh";
import Mobil from "./Mobil";
import Not from "./Not";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Not} exact />
        <Route path="/ev" component={Evalutsiya} exact />
        <Route path="/lb" component={LoyihaBosh} exact />
        <Route path="/mo" component={Mobil} exact />
      </Switch>
    </BrowserRouter>
  )
}