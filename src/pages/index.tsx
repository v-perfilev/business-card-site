import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Layout from "../components/layout/Layout";
import Card from "../components/card/Card";
import Links from "../components/links/Links";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <Card/>
            <Links/>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Vladimir Perfilev</title>
