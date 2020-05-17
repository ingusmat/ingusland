import React from 'react';
import Layout from '../components/layout';
import blogStyles from './blog.module.scss';

import { useStaticQuery, graphql, Link } from 'gatsby';
import Head from '../components/head';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate
          order: DESC
        }
      ){
        edges {
          node {
            title
            slug
            publishedDate (formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title='Blog' />
      <h1>Blog</h1>
      <ul className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((post) => (
          <li className={blogStyles.post}>
            <p><b><Link to={`/blog/${post.node.slug}`}>{post.node.title}
              {/*<p>{post.node.excerpt}</p>*/}
              <p>posted on {post.node.publishedDate}</p>
            </Link></b></p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage;
