import * as React from "react"
import Layout from '../components/layout/Layout'
import Header from '../components/home/Header';
import Experience from '../components/home/Experience';
import BlogPosts from '../components/home/BlogPosts';

const IndexPage = () => {
  return (
    <Layout title="Home" current="home">
      <Header />
      <Experience />
      <BlogPosts />
    </Layout>
  )
}

export default IndexPage