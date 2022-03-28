import * as React from "react"
import Layout from '../components/layout/Layout'
import { FaBeer } from 'react-icons/fa'

const IndexPage = () => {
  return (
    <Layout>
      <div className="text-center text-primary">
        <p className="underline text-headingSecondary font-dankMono">nu funkar det <FaBeer className="inline" /></p>
      </div>
    </Layout>
  )
}

export default IndexPage
