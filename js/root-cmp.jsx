import { MailDetails } from "./apps/mail/pages/mail-details.jsx"
import { Footer } from "./cmps/footer/footer.jsx"
import { Header } from "./cmps/header/header.jsx"
import { AppHome } from "./pages/app-home.jsx"
import { BookApp } from "./pages/book-app.jsx"
import { KeepApp } from "./pages/keep-app.jsx"
import { MailApp } from "./pages/mail-app.jsx"
import { MailCompose } from "./apps/mail/cmps/mail-compose.jsx"
import { BookDetails } from "../js/apps/book/pages/book-details.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return (
    <Router>
      <Header />
      <section className="app">
        <Switch>
          <Route path="/mail/newmail" component={MailCompose} />
          <Route path="/book/:bookId" component={BookDetails} />
          <Route path="/mail/:mailId" component={MailDetails} />
          <Route path="/book" component={BookApp} />
          <Route path="/keep" component={KeepApp} />
          <Route path="/mail" component={MailApp} />
          <Route path="/" component={AppHome} />
        </Switch>
      </section>
      <Footer />
    </Router>
  )
}
