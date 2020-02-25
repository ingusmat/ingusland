import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import footerStyles from './footer.module.scss';

const PageFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <span>&copy; 2020 {data.site.siteMetadata.author}</span>
    </footer>
  )
}

export default PageFooter;