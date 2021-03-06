import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import List from "../../components/List";

const Products = props => {
  const policies = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Policies">
      <SEO title="Policies" />
      <List items={policies} />
    </Page>
  );
};

export const query = graphql`
  query ProductsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/policies/" } }
      sort: { fields: [frontmatter___sortField], order: ASC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            image {
              publicURL
            }
            title
            path
            sortField
          }
        }
      }
    }
  }
`;

export default withRoot(Products);
