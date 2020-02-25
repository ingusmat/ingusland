import React from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h1>About Ingus</h1>
    <p>I'm a ratfish trying to practice doing backflips on your mattress</p>
    <p><Link to='/contact'>Contact me</Link></p>
  </Layout>
);

export default AboutPage;