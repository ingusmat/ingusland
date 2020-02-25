import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        publishedDate(formatString: "MMMM DD, YYYY")
        body {
            json
        }
    }
  }
`;

const Blog = (props) => {
  const { data = {} } = props;
  const { contentfulBlogPost = {} } = data;
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />;
      },
    },
  };
  return (
    <Layout>
      <h1>{contentfulBlogPost.title}</h1>
      <p>{contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(contentfulBlogPost.body.json, options)}
    </Layout>
  );
};

export default Blog;
