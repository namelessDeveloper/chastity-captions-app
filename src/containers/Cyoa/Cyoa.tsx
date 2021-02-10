import React, { useContext } from "react"
import { PointTracker } from "../../components/PointTracker"
import { Config } from "../../types"
import {Section} from '../../components'
import { PointContext } from "../../contexts"

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
      {config.sections.map((sect, key) => 
        //@ts-ignore
        <Section data={sect} key={key}/>
      )}
    </>
  )
}