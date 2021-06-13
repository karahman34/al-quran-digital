import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from 'routes/index'

function App() {
  return (
    <Router>
      <div className="App">
        <section className="bg-green-50 h-screen w-screen">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              ></Route>
            ))}
          </Switch>
        </section>
      </div>
    </Router>
  )
}

export default App
