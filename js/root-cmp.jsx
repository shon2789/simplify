import { Footer } from './cmps/footer/footer.jsx';
import { Header } from './cmps/header/header.jsx';
import { AppHome } from './pages/app-home.jsx';
import { BookApp } from './pages/book-app.jsx';
import { KeepApp } from './pages/keep-app.jsx';
import { MailApp } from './pages/mail-app.jsx';

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function App() {
  return (
    <Router>
      <Header />
      <section className="app">
        <Switch>
          <Route path="/book" component={BookApp} />
          <Route path="/keep" component={KeepApp} />
          <Route path="/mail" component={MailApp} />
          <Route path="/" component={AppHome} />
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}
