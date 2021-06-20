import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from 'routes/index'
import Tasks from 'components/Tasks/Tasks'
import Header from 'components/Header/Header'

function App() {
  return (
    <Router>
      <div className="App bg-green-50 pb-10 w-full min-h-screen">
        <section className="container mx-auto px-3 md:px-0">
          {/* Header */}
          <Header />

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
