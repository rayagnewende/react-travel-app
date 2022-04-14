import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; 

function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
              
              <Route path="/"  exact >
                 <Home />
              </Route>

              <Route path="/about"  exact >
                <About />
              </Route>
              <Route >
                 <NotFound  />
              </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
