import React from "react"
import { PointTracker } from "../components/PointTracker"
import { Config, Direction } from "../types"
import {Section} from '../components'
import styled from "styled-components"

interface Props {
  config: Config
}

export const Cyoa: React.FC<Props> = ({
  config,
}) => (
  <>
    <PointTracker/>
    <Layout direction={config?.direction || "column"}>
      {config.sections.map((sect, key) => 
        <Section data={sect} key={key}/>
      )}
    </Layout>
  </>
)

const Layout = styled.div<{direction: Direction}>`
  display: flex;
  flex-direction: ${p => p.direction};
`