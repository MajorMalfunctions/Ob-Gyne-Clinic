import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App" style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <h1>
        <center>CRUD Operation using React Redux-thunk(middleware)</center>
      </h1>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
