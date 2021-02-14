import React from "react"
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom"
import { PointContainer, ProfileContainer } from "./containers"
import { useGist, useCyoa } from "./hooks"
import { GistFiles } from "./lib"
import { Cyoa, Profile, Landing } from "./pages"
import { Config } from "./types"

const Routing: React.FC = () =>  (
  <Switch>
    <Route path={`/:gistId/:filename?`}>
      <GameRouting/>
    </Route>
    <Route path={`/`}>
      <Landing/>
    </Route>
  </Switch>
)

type GameRoutingParams = {
  gistId: string
  filename?: string
}


const GameRouting: React.FC = () => {
  const {params:{gistId, filename}} = useRouteMatch<GameRoutingParams>()
  // TODO cache gist, in case user wants to view another cyoa by the same user or view their profile
  // Thus also parse all json once on profile, if on other pages just load their (anche cache/memoize in both cases)
  const config = useGist(gistId) 

  switch (config.status) {
    default: return (
      <div>Loading</div>
    )

    case "failed": return (
      <div>
        <h3>Invalid cyoa format.</h3>
        <p>
          Make sure its a valid json, use this
          <a href="https://jsonformatter.curiousconcept.com/"> validator </a>
          first for incorect json syntax then consult the docs and/or examples for CYOA Viewer issues.
        </p>
      </div>
    )

    case "succeeded": {
      if(filename && filename !== "_index.json"){
        const {content} = config.data.files[filename]
        const cyoa: Config = JSON.parse(content)
        console.log(`Loaded file: ${filename}.\nLoaded cyoa with title: "${cyoa.title}"`);
        return (
          <PointContainer>
            <Cyoa config={cyoa} />
          </PointContainer>
        )
      }

      const {content} = config.data.files["_index.json"]


      const cyoa: Config = JSON.parse(content)
      console.log(`Loaded file: ${filename}.\nUser Profile Loaded`);
      console.log(cyoa);
      return (
        <ProfileContainer fileList={parseFileList(config.data.files)}>
          <Profile config={cyoa} />
        </ProfileContainer>
      )
    }
  }
}

function parseFileList(files: GistFiles){
  const fileList = []
  for (const [filename, file] of Object.entries(files)) {
    if(filename != "_index.json"){
      fileList.push({
        filename,
        title: JSON.parse(file.content).title
      })
    }
  }
  return fileList
}

export default Routing