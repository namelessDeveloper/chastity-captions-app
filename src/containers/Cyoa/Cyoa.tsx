import React, { useContext } from "react"
import { PointTracker } from "../../components/PointTracker"
import { Config, Direction } from "../../types"
import {Section} from '../../components'
import { PointContext } from "../../contexts"
import styled from "styled-components"

interface Props {
  config: Config
}

export const Cyoa: React.FC<Props> = ({
  config,
}) => {
  const {
    available = 0,
    total = 0,
    setAvailable,
    setTotal,
  } = useContext(PointContext)

  return (
    <>
      <PointTracker available={available} total={total}/>
      <Layout direction={config?.direction || "column"}>
        {config.sections.map((sect, key) => 
          //@ts-ignore
          <Section data={sect} key={key}/>
        )}
      </Layout>
    </>
  )
}

const Layout = styled.div<{direction: Direction}>`
  display: flex;
  flex-direction: ${p => p.direction};
`