import * as React from "react"
import MetaWrapper from "../components/providers/MetaWrapper";
import Layout from '../components/layout/Layout'
import Header from '../components/pages/home/Header';
import Experience from '../components/pages/home/experience/Experience';
import BlogSection from '../components/pages/home/blog/BlogSection';
import Work from '../components/pages/home/Work';

const IndexPage = () => {
  return (
    <MetaWrapper title="Home">
      <Layout currentPage="home">
        <Header />
        <Experience />
        <Work />
        <BlogSection />
      </Layout>
    </MetaWrapper>
  )
}

export default IndexPage