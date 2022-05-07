import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import QuoteList from './views/List/List';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
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
