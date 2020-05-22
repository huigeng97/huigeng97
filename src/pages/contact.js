import React from 'react'
import {Link } from 'gatsby'
import Header from '../components/header'
import Layout from '../components/layout'

export default function Contact() {
  return (
  <Layout>
    <div style={{ color: `purple` }}>
      <Header headerText = "Contact"></Header>
      <p>Sent me a message, zicheng!</p>
      <img src="https://design.northwestern.edu/engineering-design-innovation/images/people/profiles/gu-zicheng.jpg" alt="" />
    </div>
  </Layout>
  );
}

