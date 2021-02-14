import { useState } from "react"
import { getGist, GithubGist } from "../lib"
import { useConstructor } from "./useConstructor"

interface Success {
  status: "succeeded"
  data: GithubGist
}

interface Fail {
  status: "failed"
  error: {
    message:string
  }
}

interface Loading {
  status: "loading"
}

type Gist =| Success | Fail | Loading

export function useGist(gistId:string): Gist{
  const [gist, setGist] = useState<Gist>({status: "loading"})
  useConstructor( () => {
    getGist(gistId)
      .then(gist => setGist({
        status: "succeeded",
        data: gist,
      }))
      .catch(err => setGist({
        status: "failed",
        error: {
          message: err,
        },
      }))
  })
  return gist
}