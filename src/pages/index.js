import * as React from "react"
import Layout from '../components/layout/Layout'
import Header from '../components/pages/home/Header';
import Experience from '../components/pages/home/Experience';
import BlogPosts from '../components/pages/home/BlogPosts';
import MetaWrapper from "../components/providers/MetaWrapper";

const IndexPage = () => {
  return (
    <MetaWrapper title="Home">
      <Layout currentPage="home">
        <Header />
        <Experience />
        <BlogPosts />
      </Layout>
    </MetaWrapper>
  )
}

export default IndexPage