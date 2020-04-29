import React from 'react';

import Layout from '../../common/Layout';
import Cards from './Cards';
import Prices from './Prices';

const MainPage: React.FC = () => (
  <Layout title="main page" description="main description">
    <Cards />
    <Prices />
  </Layout>
);
export default MainPage;
