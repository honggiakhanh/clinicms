import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/layout/MainLayout/Main';
import LandingPage from './pages/LandingPage/LandingPage';

const AppRouter = () => {
  return (
    <Router>
      <Main>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          {/* <Route path='/medicine' exact component={Medicine} /> */}
        </Switch>
      </Main>
    </Router>
  );
};

export default AppRouter;
