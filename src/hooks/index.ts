import { useRef } from "react"
import { Config } from "../types"


// TODO clean up this mess
export function useCyoa(){
  const config = useRef<Config>()
  
  return config
}


export * from './useDevCyoa'
export * from './useGist'
export * from './useConstructor'