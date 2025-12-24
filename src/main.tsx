import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import Home from "./pages/Home";
import SendRecv from "./pages/SendRecv";
import SendOnly from "./pages/SendOnly";
import RecvOnly from "./pages/RecvOnly";
import DataChannel from "./pages/DataChannel";
import "./index.css";

const App = () => {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/sendrecv" component={SendRecv} />
        <Route path="/sendonly" component={SendOnly} />
        <Route path="/recvonly" component={RecvOnly} />
        <Route path="/datachannel" component={DataChannel} />
      </Router>
    </LocationProvider>
  );
};

render(<App />, document.getElementById("root") as HTMLDivElement);
