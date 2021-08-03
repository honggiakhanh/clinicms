import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from 'core/layout/MainLayout/Main';
import LandingPage from 'pages/LandingPage/LandingPage';
import MedicineManage from 'pages/MedicineManage/MedicineManage';
import AddMedicineForm from 'pages/MedicineManage/components/AddMedicineForm/AddMedicineForm'
import EditMedicineForm from 'pages/MedicineManage/components/EditMedicineForm/EditMedicineForm'
import ServiceManage from 'pages/ServiceManage/ServiceManage'
import AddServiceForm from 'pages/ServiceManage/components/AddServiceForm/AddServiceForm'

const AppRouter = () => {
  return (
    <Router>
      <Main>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/medicine' exact component={MedicineManage} />
          <Route path='/medicine/add' exact component={AddMedicineForm} />
          <Route path='/service' exact component={ServiceManage} />
          <Route path='/service/add' exact component={AddServiceForm} />
          <Route path='/medicine/edit/:id' component={EditMedicineForm} />
        </Switch>
      </Main>
    </Router>
  );
};

export default AppRouter;
