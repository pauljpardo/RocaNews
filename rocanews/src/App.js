import { Switch } from "react-router";
import { Route } from "react-router";
import AllNews from "./screens/AllNews/AllNews";
import NewsDetail from "./screens/NewsDetail/NewsDetail";
import Splash from "./screens/Splash/Splash";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Splash />
        </Route>
        <Route exact path='/allnews'>
          <AllNews />
        </Route>
        <Route exact path='/stories/:id'>
          <NewsDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
