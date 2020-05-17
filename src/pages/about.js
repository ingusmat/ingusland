import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => (
  <Layout>
    <Head title='About Ingus' />
    <h1>About Ingus</h1>
    <p>I&apos;m a ratfish trying to practice doing backflips on your mattress</p>
    <p><Link to='/contact'>Contact me</Link></p>
  </Layout>
);

export default AboutPage;