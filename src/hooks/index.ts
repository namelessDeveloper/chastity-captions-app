import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getConfig } from "../lib"
import { Config } from "../types"

export function useCyoa(){
  const [config, setConfig] = useState<null | Config>(null)
  const {pathname} = useLocation()

  useEffect(() => {
    const [gistID, filename] = pathname.substr(1).split('/')
    getConfig(gistID)
      .then(json => {
        if(json){
          setConfig(JSON.parse(json.files[filename || "cyoa.json"].content))
        }
      })
  }, [pathname])
  return [config]
}