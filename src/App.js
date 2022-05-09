import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ModelProvider from "./prodiver/ModelProvider";
import { HelmetProvider } from "react-helmet-async";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; 
import Nav from "./components/Nav";
import NavProvider from "./prodiver/NavProvider";
import Toggle from "./components/Toggle";
import DestinationsProvider from "./prodiver/DestinationsProvider";
import Details from "./pages/Details";

function App() {

  return (
    <div className="App">
       <Router>
         <ModelProvider>
           <NavProvider>
             <DestinationsProvider>
             <Toggle />
              <Nav />
               <HelmetProvider>
                 <Switch>
                    <Route path="/"  exact >                                                                                                                                
                      <Home />                                                                                                                                                                                                                                                                                                                      
                    </Route>
                    <Route path="/about"  exact >
                      <About />                                                                                                                                                                                                                                                                                                                                                                                                
                    </Route>
                    <Route path="/details/:id"  exact >
                      <Details />                                                                                                                                                                                                                                                                                                                                                                                                
                    </Route>
                    <Route >
                      <NotFound  />
                    </Route>
                </Switch>   
               </HelmetProvider>
               </DestinationsProvider>
          </NavProvider>                                                                                                                                                                                                                                                       
         </ModelProvider>
       </Router>
    </div>
  );
}

export default App;
                                                                                                                                                                                                                                                                                                                  