import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from 'core/layout/MainLayout/Main';
import LandingPage from 'pages/LandingPage/LandingPage';
import MedicineManage from 'pages/MedicineManage/MedicineManage';
import AddMedicineForm from 'pages/MedicineManage/components/AddMedicineForm/AddMedicineForm'

const AppRouter = () => {
  return (
    <Router>
      <Main>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/medicine' exact component={MedicineManage} />
          <Route path='/medicine/add' exact component={AddMedicineForm} />
        </Switch>
      </Main>
    </Router>
  );
};

export default AppRouter;
