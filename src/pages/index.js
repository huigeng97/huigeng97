import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default function Home({data}) {
  console.log(data)
  return (
   <Layout>
     <div style={{ margin: `center`, maxWidth: 700 , color: `purple` }}>
       <h1>Hello World!</h1>
       <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
       {data.allMarkdownRemark.edges.map(({ node }) => (
         <div key={node.id}>
           <Link to={node.fields.slug}
                 css = {css`
                 text-decoration: none;
                 color: inherit;
                 `}
                 >
             <h3
               css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
             >
               {node.frontmatter.title}{" "}
               <span
                 css={css`
                  color: #bbb;
                `}
               >
                — {node.frontmatter.date}
              </span>
             </h3>
             <p>{node.excerpt}</p>
           </Link>

         </div>
         ))}
       <p>This is Hui Geng's first personal page!</p>
       <img
         src="https://design.northwestern.edu/engineering-design-innovation/images/people/profiles/gu-zicheng.jpg"
         alt="This is a very talented designer!"
       />
       <p><a href={"https://design.northwestern.edu/engineering-design-innovation/people/profiles/gu-zicheng.html"}>Let's see Zicheng's website!</a></p>
     </div>
   </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
           }
          excerpt
        }
      }
    }
  }
`
