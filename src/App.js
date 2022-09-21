import { Route, Switch, Redirect } from "react-router-dom";
import AllQuote from "./pages/allquote";
import NewQuote from "./pages/newquote";
import QuoteDetails from "./pages/quote";
import Layout from "./components/layout/layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes" exact>
          <AllQuote />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
