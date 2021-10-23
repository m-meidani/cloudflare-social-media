import React, {useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import SignIn from "./Auth/login"
import PrivateRoute from "./Utils/privateRoute"
import Posts from "./Dashboard/Posts"


function App() {
  const [username, setUsername] = useState(undefined)

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <SignIn
            username={username}
            setUsername={setUsername}
          />
        </Route>
        <PrivateRoute username={username} path="/">
          <Posts username={username}/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
