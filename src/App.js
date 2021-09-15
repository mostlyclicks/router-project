import { Route, Switch, NavLink } from 'react-router-dom'
import Quotes from './pages/Quotes'
import NewQuote from './pages/NewQuote'

function App() {
  return (
    <div>
      <header>
        <h1>Great Quotes</h1>
        <nav>
          <ul>
            <li><NavLink to="/quotes">All Quotes</NavLink></li>
          </ul>
          <ul>
          <li><NavLink to="/new-quote">Add a Quote</NavLink></li>
          </ul>
          
        </nav>
      </header>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
      <Route path="/quotes">
        <Quotes />
      </Route>
    </div>
  );
}

export default App;
