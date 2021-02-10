import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getConfig } from "../lib"
import { Config } from "../types"

export function useCyoa(){
  const [config, setConfig] = useState<null | Config>(null)
  const {pathname} = useLocation()

  useEffect(() => {
    const [gistID, filename] = pathname.substr(1).split('/')
    getConfig(gistID, filename)
      .then(json => {
        if(json){
          setConfig(json)
          console.log(`Loaded "${json?.title}"`)
        }
      })
  }, [pathname])
  return config
}