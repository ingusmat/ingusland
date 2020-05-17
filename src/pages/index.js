import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => (
  <Layout>
    <Head title='Home' />
    <h1>Ingus Mat Burleson</h1>
    <h2>full stack developer, javascript enthusiast, occasional rocker and roller</h2>
    <p><Link to='/contact'>Contact me</Link></p>
  </Layout>
)

export default IndexPage;
