import React from 'react'
import {Link} from 'gatsby'
import header from '../components/header'
import Layout from '../components/layout'

export default function Home() {
  return (
   <Layout>
     <div style={{ margin: `3rem auto`, maxWidth: 250 , color: `purple` }}>
       <h1>Hello World!</h1>
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

