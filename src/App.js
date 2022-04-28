import { Switch } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Matlab from "./Matlab";
import Not from "./Not";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Not} exact />
        <Route path="/test" component={Matlab} exact />
      </Switch>
    </BrowserRouter>
  )
}