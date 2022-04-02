import * as React from "react"
import Layout from '../../components/layout/Layout'
import Header from '../../components/pages/work/Header'
import WorkGrid from '../../components/pages/work/WorkGrid';

const WorkPage = () => {
  return (
    <Layout title="Work" currentPage="work">
      <Header />
      <WorkGrid />
    </Layout>
  )
}

export default WorkPage;