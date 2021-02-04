import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { User } from "./components/User";
import { UsersList } from "./components/UsersList";
import { Nav } from "./components/Nav";

function App() {
  const [align, setAlign] = useState("center");

  return (
    <Router>
      <div>
        <Nav setAlign={setAlign} position={align} />
        <Switch>
          <Route path="/user/:id">
            <User />
          </Route>
          <Route path="/">
            <UsersList position={align} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
