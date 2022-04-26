import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import QuoteList from './views/List/List';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <h1>Home of Futurama</h1>
          Check out these <Link to="/quotes">Character Quotes!</Link>
        </Route>

        <Route exact path="/quotes">
          <Link to="/">Back Home</Link>
          <QuoteList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
