import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import AllQuotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import QuoteDetail from './pages/QuoteDetail';
import Comments from './components/comments/Comments'

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
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
