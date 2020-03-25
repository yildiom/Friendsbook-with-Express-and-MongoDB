import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';
import Routes from './Routes';

import Navigationbar from './Navigation';

const App = () => (
  <>
    <Router>
      <Navigationbar />
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </>
);

export default App;
