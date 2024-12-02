import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Table from './components/Table';
import AddCompanyForm from './components/AddCompanyForm';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px' }}>
        <h1>Список компаний</h1>
        <AddCompanyForm />
        <Table />
      </div>
    </Provider>
  );
};

export default App;
