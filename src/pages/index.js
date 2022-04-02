import * as React from "react"
import Layout from '../components/layout/Layout'
import Header from '../components/pages/home/Header';
import Experience from '../components/pages/home/Experience';
import BlogPosts from '../components/pages/home/BlogPosts';
import Work from '../components/pages/home/Work';
import MetaWrapper from "../components/providers/MetaWrapper";

const IndexPage = () => {
  return (
    <MetaWrapper title="Home">
      <Layout currentPage="home">
        <Header />
        <Experience />
        <Work />
        <BlogPosts />
      </Layout>
    </MetaWrapper>
  )
}

export default IndexPage