import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

// This wraps the whole page and provides metadata for head on a per page basis
const MetaWrapper = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
      {children}
    </>
  )
}

export default MetaWrapper;