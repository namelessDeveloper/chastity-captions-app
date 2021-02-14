import React from "react"
import { Config, Direction } from "../types"
import {Section} from '../components'
import styled from "styled-components"

interface Props {
  config: Config
}

export const Profile: React.FC<Props> = ({
  config,
}) => (
  <Layout direction={config?.direction || "column"}>
    {config.sections.map((sect, key) => 
      <Section data={sect} key={key}/>
    )}
  </Layout>
)

const Layout = styled.div<{direction: Direction}>`
  display: flex;
  flex-direction: ${p => p.direction};
`