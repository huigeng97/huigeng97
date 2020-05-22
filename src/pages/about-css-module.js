import React from "react"
import styles from "./about-css-module.module.css"
import Container from "../components/container"
import Layout from '../components/layout'
console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt=""/>
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
  <Layout>
    <Container>
      <h1>About Art</h1>
      <p>Come to visit Zicheng's Gallary</p>
      <User
        username="Shell Art"
        avatar="https://uploads-ssl.webflow.com/5e37088e7aa7cf5ae2a92216/5e767f9be5ba0e60ae96b3f3_5-p-1600.jpeg"
        excerpt="Love eating coconut flesh, so I always chop the coconut shell into halves after drinking. One day, watching at piles of coconut shells I decide to draw on it."
      />
      <User
        username="Illustration"
        avatar="https://uploads-ssl.webflow.com/5e37088e7aa7cf5ae2a92216/5e767f9cd253453c309655a2_IMG-0079-p-1080.jpeg"
        excerpt="Fall days in Evanston are more impressive with illustrations."
      />
    </Container>
  </Layout>
  )

}