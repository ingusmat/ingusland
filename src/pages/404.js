import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title='Nothing here...' />
      <h1>Page Not Found</h1>
      <Link to='/'>Head home</Link>
    </Layout>
  );
};

export default NotFound;