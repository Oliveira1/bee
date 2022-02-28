import React from "react"
import Layout from "../components/Layout"
import History from "../components/History";
import {Grommet} from 'grommet';
import {grommet} from "grommet/themes";

export default function Home() {

    return (
        <Grommet theme={grommet}>>
        <Layout>
            <History/>
            <div>Hello world!</div>
        </Layout>
        </Grommet>
    )
}
