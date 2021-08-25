import { Footer } from './cmps/footer/footer.jsx';
import { Header } from './cmps/header/header.jsx';
import { AppHome } from './pages/app-home.jsx';

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function App() {
  return (
    <Router>
      <Header />
      <section className="app">
        <Switch>
          <Route path="/" component={AppHome} />
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}
