import React from 'react'
import {Link} from "gatsby";
import Header from '../components/header'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

export default function About({ data}) {
  return (
  <Layout>
    <div style={{ color: `teal` }}>
      <h1>This is {data.site.siteMetadata.title}</h1>
      <p>This is Hui Geng's next personal page!</p>
      <img src="https://design.northwestern.edu/engineering-design-innovation/images/people/profiles/gu-zicheng.jpg" alt="" />
    </div>
  </Layout>
  );
}

export const query = graphql`
  query {
      site {
      siteMetadata {
        title
      }
    }
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`