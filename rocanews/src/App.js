import { Switch } from "react-router";
import { Route } from "react-router";
import Splash from "./screens/Splash";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Splash />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
