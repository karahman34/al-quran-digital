import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from 'routes/index'
import Tasks from 'components/Tasks/Tasks'

function App() {
  return (
    <Router>
      <div className="App">
        <section className="bg-green-50 h-screen w-screen">
          <Tasks>
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
          </Tasks>
        </section>
      </div>
    </Router>
  )
}

export default App
