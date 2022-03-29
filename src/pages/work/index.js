import * as React from "react"
import Layout from '../../components/layout/Layout'
import Header from '../../components/work/Header'
import WorkGrid from '../../components/work/WorkGrid';

const WorkPage = () => {
  return (
    <Layout title="Work" current="work">
      <Header />
      <WorkGrid />
    </Layout>
  )
}

export default WorkPage;